import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ContactListComponent } from './contact-list/contact-list.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';
import { AddContactComponent } from './add-contact/add-contact.component';
import { EditContactComponent } from './edit-contact/edit-contact.component';
import { routing } from './routing.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
    declarations: [
        AppComponent,
        ContactListComponent,
        AddContactComponent,
        EditContactComponent
    ],
    imports: [
        BrowserModule, routing, CommonModule, ReactiveFormsModule, NgbModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
