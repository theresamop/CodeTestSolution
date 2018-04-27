import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { EmailTemplateComponent } from './emailTemplate/emailtemplate.component'
@NgModule({
    imports: [BrowserModule, HttpModule ],
    declarations: [AppComponent, EmailTemplateComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
