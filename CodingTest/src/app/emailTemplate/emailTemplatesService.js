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
var http_1 = require("@angular/http");
require("rxjs/add/operator/map");
var EmailTemplatesService = /** @class */ (function () {
    function EmailTemplatesService(_http) {
        this._http = _http;
        this.pageNum = 1;
    }
    //getEmailTemplates(): Observable<IEmailTemplate[]> {
    //    return this._http.get("http://localhost:30926/api/EmailTemplate/GetAllEmailTemplatesSorted?columnSortBy=EmailLabelAscending&pageNum=" + this.pageNum)
    //        .map((response: Response) => <IEmailTemplate[]> response.json())
    //}
    EmailTemplatesService.prototype.getEmailTemplates = function () {
        return this._http.get("http://localhost:30926/api/EmailTemplate/GetAllEmailTemplatesSorted?columnSortBy=EmailLabelAscending&pageNum=" + this.pageNum)
            .map(function (response) { return response.json(); });
    };
    EmailTemplatesService.prototype.getEmailTemplatesSorted = function (columnSortBy, pageNum) {
        return this._http.get("http://localhost:30926/api/EmailTemplate/GetAllEmailTemplatesSorted?columnSortBy=" + columnSortBy + "&pageNum=" + pageNum)
            .map(function (response) { return response.json(); });
    };
    EmailTemplatesService.prototype.getColumns = function () {
        return [
            { Label: "Email Label", Field: "EmailLabel", ImgUrl: "../../../images/up.png", SortDirection: "Ascending" },
            { Label: "From Address", Field: "FromAddress", ImgUrl: "../../../images/down.png", SortDirection: "Descending" },
            { Label: "Date Updated", Field: "DateUpdated", ImgUrl: "../../../images/down.png", SortDirection: "Descending" }
        ];
    };
    EmailTemplatesService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http])
    ], EmailTemplatesService);
    return EmailTemplatesService;
}());
exports.EmailTemplatesService = EmailTemplatesService;
//# sourceMappingURL=emailTemplatesService.js.map