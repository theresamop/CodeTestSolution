import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
    template: `<div>
                <h1>{{pageHeader}}</h1>
                <my-emailTemplate></my-emailTemplate>
                </div>`,
})
export class AppComponent  {
    pageHeader: string = 'Email Templates';
}
