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
    totalPages: number = 0;
    pageSz: number = 0;
    pageNum: number = 1;
    columnSortBy: string = "EmailLabel";
    sortByDirection : string = "Ascending"
    classSort: string = "chevron-up";
    textItems: string = "";
    constructor(private _emailTempSvc: EmailTemplatesService, private pagerService: PagerService) {

       
    }

    ngOnInit() {
        
        //this._emailTempSvc.getEmailTemplates()
        //    .subscribe((emailTemplateData) => { this.emailtemplates = emailTemplateData; this.setPage(1); });
        this.columnSortBy = this.columnSortBy + this.sortByDirection;
        this._emailTempSvc.getEmailTemplatesSorted(this.columnSortBy,this.pageNum).subscribe(suc => { this.data = suc; this.totalCnt = this.data.ItemsTotalCount; this.totalPages = this.data.ItemsTotalCount / this.data.ItemsPageSz; this.emailtemplates = <IEmailTemplate[]>this.data.EmailTemplateModels; this.createRange() });
      //  this.emailtemplates = <IEmailTemplate[]>this.data.EmailTemplateModels;
        //this.totalCnt = this.data.ItemsTotalCount;
        this.pageSz = this.data.ItemsPageSz;
       
       
        
    }
    getTotalDatacnt() {
        this.emailtemplates.length;
    }

    onClick(col: string): void {
        console.log("sorted clicked " + col + " " + this.sortByDirection);

        this.setDirection(this.sortByDirection);
        this.columnSortBy = col + this.sortByDirection;

        this._emailTempSvc.getEmailTemplatesSorted(this.columnSortBy, this.pageNum).subscribe(suc =>
        {
            this.data = suc; this.totalCnt = this.data.ItemsTotalCount; this.totalPages = this.data.ItemsTotalCount / this.data.ItemsPageSz;
            this.emailtemplates = <IEmailTemplate[]>this.data.EmailTemplateModels;
            this.createRange()
        });

        //this._emailTempSvc.getEmailTemplatesSorted(this.columnSortBy, this.pageNum)
        //    .subscribe((emailTemplateData) => this.emailtemplates = emailTemplateData);
    }
   
    createRange() {
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
    }
    setPage(page: string) {
        this.pageNum = page == "<<" ? (this.pageNum == 1 ? 1 : this.pageNum - 1) : (page == ">>" ? (this.pageNum == this.totalPages ? this.totalPages : this.pageNum + 1) : Number(page));
        this.textItems = "Page " + this.pageNum  + " of " + this.totalPages;
        console.log("setPage clicked " + page)
        this._emailTempSvc.getEmailTemplatesSorted(this.columnSortBy, this.pageNum).subscribe(suc => {
            this.data = suc; this.totalCnt = this.data.ItemsTotalCount; this.totalPages = this.data.ItemsTotalCount / this.data.ItemsPageSz;
            this.emailtemplates = <IEmailTemplate[]>this.data.EmailTemplateModels
        });
    }

    setDirection(direction: string) {
        if (direction == "Ascending") {
            this.sortByDirection = "Descending";
            this.classSort = "chevron-down";
        }
        else {
            this.sortByDirection = "Ascending";
            this.classSort = "chevron-up";
        }
    }
}