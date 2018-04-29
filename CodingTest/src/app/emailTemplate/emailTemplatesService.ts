import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { IEmailTemplate, IColumn } from './emailTemplate';
import 'rxjs/add/operator/map'
@Injectable()
export class EmailTemplatesService {

    constructor(private _http: Http) { }
    pageNum: number = 1;
    //getEmailTemplates(): Observable<IEmailTemplate[]> {
    //    return this._http.get("http://localhost:30926/api/EmailTemplate/GetAllEmailTemplatesSorted?columnSortBy=EmailLabelAscending&pageNum=" + this.pageNum)
    //        .map((response: Response) => <IEmailTemplate[]> response.json())
    //}
    getEmailTemplates(): Observable<any[]> {
        return this._http.get("http://localhost:30926/api/EmailTemplate/GetAllEmailTemplatesSorted?columnSortBy=EmailLabelAscending&pageNum=" + this.pageNum)
            .map((response: Response) => response.json())
    }
    getEmailTemplatesSorted(columnSortBy: string, pageNum: number): Observable<any[]> {
     
        return this._http.get("http://localhost:30926/api/EmailTemplate/GetAllEmailTemplatesSorted?columnSortBy=" + columnSortBy + "&pageNum=" + pageNum)
            .map((response: Response) => response.json())
    }
    getColumns(): IColumn[] {

        return [
            { Label: "Email Label", Field: "EmailLabel", TextSort: "", SortDirection: "Ascending" },
            { Label: "From Address", Field: "FromAddress", TextSort: "", SortDirection: "" },
            { Label: "Date Updated", Field: "DateUpdated", TextSort: "", SortDirection: "" }
        ];


    }

    
}