import { Component , OnInit} from '@angular/core';
import { IEmailTemplate, IColumn } from './emailTemplate';
import { EmailTemplatesService } from './emailTemplatesService';
import { PagerService } from '../service/pager.service';
import { Observable } from 'rxjs/Observable';

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
    columns: IColumn[];
    isShow: boolean = true;
    isSorted: boolean = false;
    url: string = "../../../images/up.png";//../images/up.png";
    constructor(private _emailTempSvc: EmailTemplatesService, private pagerService: PagerService) {

       
    }

    ngOnInit() {
        

        this.columnSortBy = this.columnSortBy + this.sortByDirection;
        this._emailTempSvc.getEmailTemplatesSorted(this.columnSortBy,this.pageNum).subscribe(suc => { this.data = suc; this.totalCnt = this.data.ItemsTotalCount; this.totalPages = this.data.ItemsTotalCount / this.data.ItemsPageSz; this.emailtemplates = <IEmailTemplate[]>this.data.EmailTemplateModels; this.createRange() });

        this.pageSz = this.data.ItemsPageSz;
        this.columns = this._emailTempSvc.getColumns();

    }
    getTotalDatacnt() {
        this.emailtemplates.length;
    }

    onClick(colObj: IColumn): void {
        let col = colObj.Field;
        console.log("sorted clicked " + colObj.SortDirection);

        this.setDirection(colObj);
        this.columnSortBy = colObj.Field + colObj.SortDirection;

        this._emailTempSvc.getEmailTemplatesSorted(this.columnSortBy, this.pageNum).subscribe(suc =>
        {
            this.data = suc; this.totalCnt = this.data.ItemsTotalCount; this.totalPages = this.data.ItemsTotalCount / this.data.ItemsPageSz;
            this.emailtemplates = <IEmailTemplate[]>this.data.EmailTemplateModels;
            this.createRange()
        });

      
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

    setDirection(colObj: IColumn) {
        if (colObj.SortDirection == "Ascending") {
            colObj.SortDirection = "Descending";
             colObj.ImgUrl = "../../../images/down.png"
        }
        else {
            colObj.SortDirection = "Ascending";
            colObj.ImgUrl = "../../../images/up.png"
        }
        //reset sorting of other cols
        //this.columns.forEach(col => {
        //    if (col.Field != colObj.Field) {
        //        col.ImgUrl = "";
        //    }
        //});
    }
}