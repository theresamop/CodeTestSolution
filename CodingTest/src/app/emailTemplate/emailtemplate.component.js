"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var emailTemplatesService_1 = require("./emailTemplatesService");
var pager_service_1 = require("../service/pager.service");
var EmailTemplateComponent = /** @class */ (function () {
    function EmailTemplateComponent(_emailTempSvc, pagerService) {
        this._emailTempSvc = _emailTempSvc;
        this.pagerService = pagerService;
        this.data = {};
        this.pagedItems = [];
        this.totalCnt = 0;
        this.totalPages = 0;
        this.pageSz = 0;
        this.pageNum = 1;
        this.columnSortBy = "EmailLabel";
        this.sortByDirection = "Ascending";
        this.classSort = "chevron-up";
        this.textItems = "";
        this.isShow = true;
        this.isSorted = false;
    }
    EmailTemplateComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.columnSortBy = this.columnSortBy + this.sortByDirection;
        this._emailTempSvc.getEmailTemplatesSorted(this.columnSortBy, this.pageNum).subscribe(function (suc) { _this.data = suc; _this.totalCnt = _this.data.ItemsTotalCount; _this.totalPages = _this.data.ItemsTotalCount / _this.data.ItemsPageSz; _this.emailtemplates = _this.data.EmailTemplateModels; _this.createRange(); });
        this.pageSz = this.data.ItemsPageSz;
        this.columns = this._emailTempSvc.getColumns();
    };
    EmailTemplateComponent.prototype.getTotalDatacnt = function () {
        this.emailtemplates.length;
    };
    EmailTemplateComponent.prototype.onClick = function (colObj) {
        var _this = this;
        var col = colObj.Field;
        console.log("sorted clicked " + colObj.SortDirection);
        this.setDirection(colObj);
        this.columnSortBy = colObj.Field + colObj.SortDirection;
        this._emailTempSvc.getEmailTemplatesSorted(this.columnSortBy, this.pageNum).subscribe(function (suc) {
            _this.data = suc;
            _this.totalCnt = _this.data.ItemsTotalCount;
            _this.totalPages = _this.data.ItemsTotalCount / _this.data.ItemsPageSz;
            _this.emailtemplates = _this.data.EmailTemplateModels;
            _this.createRange();
        });
    };
    EmailTemplateComponent.prototype.createRange = function () {
        this.pagedItems = [];
        for (var i = 0; i <= this.totalPages; i++) {
            {
                if (i == 0)
                    this.pagedItems.push("<<");
                else if (i == this.totalPages) {
                    this.pagedItems.push(i);
                    this.pagedItems.push(">>");
                }
                else
                    this.pagedItems.push(i);
            }
        }
        this.textItems = "Page " + this.pageNum + " of " + this.totalPages;
    };
    EmailTemplateComponent.prototype.setPage = function (page) {
        var _this = this;
        this.pageNum = page == "<<" ? (this.pageNum == 1 ? 1 : this.pageNum - 1) : (page == ">>" ? (this.pageNum == this.totalPages ? this.totalPages : this.pageNum + 1) : Number(page));
        this.textItems = "Page " + this.pageNum + " of " + this.totalPages;
        console.log("setPage clicked " + page);
        this._emailTempSvc.getEmailTemplatesSorted(this.columnSortBy, this.pageNum).subscribe(function (suc) {
            _this.data = suc;
            _this.totalCnt = _this.data.ItemsTotalCount;
            _this.totalPages = _this.data.ItemsTotalCount / _this.data.ItemsPageSz;
            _this.emailtemplates = _this.data.EmailTemplateModels;
        });
    };
    EmailTemplateComponent.prototype.setDirection = function (colObj) {
        if (colObj.SortDirection == "Ascending") {
            colObj.SortDirection = "Descending";
            colObj.TextSort = "V";
        }
        else {
            colObj.SortDirection = "Ascending";
            colObj.TextSort = "^";
        }
        //reset sorting of other cols
        this.columns.forEach(function (col) {
            if (col.Field != colObj.Field) {
                col.TextSort = "";
            }
        });
    };
    EmailTemplateComponent = __decorate([
        core_1.Component({
            selector: 'my-emailTemplate',
            templateUrl: 'app/emailTemplate/emailtemplate.component.html',
            styleUrls: [],
            providers: [emailTemplatesService_1.EmailTemplatesService, pager_service_1.PagerService]
        }),
        __metadata("design:paramtypes", [emailTemplatesService_1.EmailTemplatesService, pager_service_1.PagerService])
    ], EmailTemplateComponent);
    return EmailTemplateComponent;
}());
exports.EmailTemplateComponent = EmailTemplateComponent;
//# sourceMappingURL=emailtemplate.component.js.map