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
var EmailTemplateComponent = /** @class */ (function () {
    // private _emailTempSvc: EmailTemplatesService;
    function EmailTemplateComponent(_emailTempSvc) {
        this._emailTempSvc = _emailTempSvc;
    }
    EmailTemplateComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._emailTempSvc.getEmailTemplates()
            .subscribe(function (emailTemplateData) { return _this.emailtemplates = emailTemplateData; });
        //this.emailtemplates = this._emailTempSvc.getEmailTemplates()
        //    .subscribe((emailTemplateData) => this.emailtemplates = emailTemplateData);
    };
    EmailTemplateComponent.prototype.getTotalDatacnt = function () {
        this.emailtemplates.length;
    };
    EmailTemplateComponent = __decorate([
        core_1.Component({
            selector: 'my-emailTemplate',
            templateUrl: 'app/emailTemplate/emailtemplate.component.html',
            styleUrls: [],
            providers: [emailTemplatesService_1.EmailTemplatesService]
        }),
        __metadata("design:paramtypes", [emailTemplatesService_1.EmailTemplatesService])
    ], EmailTemplateComponent);
    return EmailTemplateComponent;
}());
exports.EmailTemplateComponent = EmailTemplateComponent;
//# sourceMappingURL=emailtemplate.component.js.map