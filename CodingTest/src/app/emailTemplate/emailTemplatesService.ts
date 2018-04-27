import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { IEmailTemplate } from './emailTemplate';
import 'rxjs/add/operator/map'
@Injectable()
export class EmailTemplatesService {

    constructor(private _http: Http) { }
    getEmailTemplates(): Observable<IEmailTemplate[]> {
        return this._http.get("http://localhost:30926/api/EmailTemplate")
            .map((response: Response) => <IEmailTemplate[]> response.json())
    }
    //getEmailTemplates(): IEmailTemplate[] {
    //    return [
    //        {  _x003C_ParentId_x003E_k__BackingField: 'name1', _x003C_Subject_x003E_k__BackingField: 'code1' },
    //        { _x003C_ParentId_x003E_k__BackingField: 'name2', _x003C_Subject_x003E_k__BackingField: 'code3' }
    //    ];
    //}
}