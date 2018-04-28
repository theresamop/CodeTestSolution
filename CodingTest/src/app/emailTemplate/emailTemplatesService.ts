import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { IEmailTemplate } from './emailTemplate';
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
    //getEmailTemplates(): IEmailTemplate[] {
    //    return [
    //        {  _x003C_ParentId_x003E_k__BackingField: 'name1', _x003C_Subject_x003E_k__BackingField: 'code1' },
    //        { _x003C_ParentId_x003E_k__BackingField: 'name2', _x003C_Subject_x003E_k__BackingField: 'code3' }
    //    ];
    //}

    
}