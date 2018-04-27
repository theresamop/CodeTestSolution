import { Component , OnInit} from '@angular/core';
import { IEmailTemplate } from './emailTemplate';
import { EmailTemplatesService } from './emailTemplatesService'


@Component({
    selector: 'my-emailTemplate',
    templateUrl: 'app/emailTemplate/emailtemplate.component.html',
    styleUrls: [],
    providers: [EmailTemplatesService]
})

export class EmailTemplateComponent implements OnInit{
    emailtemplates: IEmailTemplate[];
    // private _emailTempSvc: EmailTemplatesService;
    constructor(private _emailTempSvc: EmailTemplatesService) {

       
    }

    ngOnInit() {
        this._emailTempSvc.getEmailTemplates()
            .subscribe((emailTemplateData) => this.emailtemplates = emailTemplateData);
        //this.emailtemplates = this._emailTempSvc.getEmailTemplates()
        //    .subscribe((emailTemplateData) => this.emailtemplates = emailTemplateData);
    }
    getTotalDatacnt() {
        this.emailtemplates.length;
    }
}