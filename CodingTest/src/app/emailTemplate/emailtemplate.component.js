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
    // private _emailTempSvc: EmailTemplatesService;
    function EmailTemplateComponent(_emailTempSvc, pagerService) {
        this._emailTempSvc = _emailTempSvc;
        this.pagerService = pagerService;
        this.data = {};
        this.pagedItems = [];
        this.totalCnt = 0;
        this.pageSz = 0;
        this.pageNum = 1;
        this.columnSortBy = "EmailLabelAscending";
    }
    EmailTemplateComponent.prototype.ngOnInit = function () {
        //this._emailTempSvc.getEmailTemplates()
        //    .subscribe((emailTemplateData) => { this.emailtemplates = emailTemplateData; this.setPage(1); });
        var _this = this;
        this._emailTempSvc.getEmailTemplatesSorted(this.columnSortBy, this.pageNum).subscribe(function (suc) { _this.data = suc; _this.totalCnt = _this.data.ItemsTotalCount / _this.data.ItemsPageSz; _this.emailtemplates = _this.data.EmailTemplateModels; _this.createRange(); });
        //  this.emailtemplates = <IEmailTemplate[]>this.data.EmailTemplateModels;
        //this.totalCnt = this.data.ItemsTotalCount;
        this.pageSz = this.data.ItemsPageSz;
    };
    EmailTemplateComponent.prototype.getTotalDatacnt = function () {
        this.emailtemplates.length;
    };
    EmailTemplateComponent.prototype.onClick = function (col) {
        var _this = this;
        console.log("sorted clicked " + col);
        this.columnSortBy = col;
        this._emailTempSvc.getEmailTemplatesSorted(this.columnSortBy, this.pageNum).subscribe(function (suc) {
            _this.data = suc;
            _this.totalCnt = _this.data.ItemsTotalCount / _this.data.ItemsPageSz;
            _this.emailtemplates = _this.data.EmailTemplateModels;
            _this.createRange();
        });
        //this._emailTempSvc.getEmailTemplatesSorted(this.columnSortBy, this.pageNum)
        //    .subscribe((emailTemplateData) => this.emailtemplates = emailTemplateData);
    };
    EmailTemplateComponent.prototype.createRange = function () {
        this.pagedItems = [];
        for (var i = 1; i <= this.totalCnt; i++) {
            this.pagedItems.push(i);
        }
    };
    EmailTemplateComponent.prototype.setPage = function (page) {
        var _this = this;
        this.pageNum = page;
        console.log("setPage clicked " + page);
        this._emailTempSvc.getEmailTemplatesSorted(this.columnSortBy, this.pageNum).subscribe(function (suc) {
            _this.data = suc;
            _this.totalCnt = _this.data.ItemsTotalCount / _this.data.ItemsPageSz;
            _this.emailtemplates = _this.data.EmailTemplateModels;
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