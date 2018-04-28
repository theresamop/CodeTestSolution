import { Component , OnInit} from '@angular/core';
import { IEmailTemplate } from './emailTemplate';
import { EmailTemplatesService } from './emailTemplatesService';
import { PagerService } from '../service/pager.service';

@Component({
    selector: 'my-emailTemplate',
    templateUrl: 'app/emailTemplate/emailtemplate.component.html',
    styleUrls: [],
    providers: [EmailTemplatesService, PagerService]
})

export class EmailTemplateComponent implements OnInit{
    emailtemplates: IEmailTemplate[];
    data: any = {};
    pagedItems: any =[];
    totalCnt: number = 0;
    pageSz: number = 0;
    pageNum: number = 1;
    columnSortBy: string = "EmailLabelAscending";
    // private _emailTempSvc: EmailTemplatesService;
    constructor(private _emailTempSvc: EmailTemplatesService, private pagerService: PagerService) {

       
    }

    ngOnInit() {
        //this._emailTempSvc.getEmailTemplates()
        //    .subscribe((emailTemplateData) => { this.emailtemplates = emailTemplateData; this.setPage(1); });

        this._emailTempSvc.getEmailTemplatesSorted(this.columnSortBy, this.pageNum).subscribe(suc => { this.data = suc; this.totalCnt = this.data.ItemsTotalCount / this.data.ItemsPageSz; this.emailtemplates = <IEmailTemplate[]>this.data.EmailTemplateModels; this.createRange() } );
      //  this.emailtemplates = <IEmailTemplate[]>this.data.EmailTemplateModels;
        //this.totalCnt = this.data.ItemsTotalCount;
        this.pageSz = this.data.ItemsPageSz;

       
        
    }
    getTotalDatacnt() {
        this.emailtemplates.length;
    }

    onClick(col: string): void {
        console.log("sorted clicked " + col)
        this.columnSortBy = col;

        this._emailTempSvc.getEmailTemplatesSorted(this.columnSortBy, this.pageNum).subscribe(suc =>
        {
            this.data = suc; this.totalCnt = this.data.ItemsTotalCount / this.data.ItemsPageSz;
            this.emailtemplates = <IEmailTemplate[]>this.data.EmailTemplateModels;
            this.createRange()
        });

        //this._emailTempSvc.getEmailTemplatesSorted(this.columnSortBy, this.pageNum)
        //    .subscribe((emailTemplateData) => this.emailtemplates = emailTemplateData);
    }
   
    createRange() {
        this.pagedItems = [];
        for (var i = 1; i <= this.totalCnt; i++) {
            this.pagedItems.push(i);
        }
       
    }
    setPage(page: number) {
        this.pageNum = page;
        console.log("setPage clicked " + page)
        this._emailTempSvc.getEmailTemplatesSorted(this.columnSortBy, this.pageNum).subscribe(suc => {
            this.data = suc; this.totalCnt = this.data.ItemsTotalCount / this.data.ItemsPageSz;
            this.emailtemplates = <IEmailTemplate[]>this.data.EmailTemplateModels
        });
    }
}