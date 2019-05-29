import { RouterModule, Routes } from '@angular/router';
import { AddContactComponent } from './add-contact/add-contact.component';
import { ContactListComponent } from './contact-list/contact-list.component';
import { EditContactComponent } from './edit-contact/edit-contact.component';

const routes: Routes = [
    { path: 'add-contact', component: AddContactComponent },
    { path: 'list-contact', component: ContactListComponent },
    { path: 'edit-contact/:id', component: EditContactComponent },
    { path: '**', component: ContactListComponent }
];

export const routing = RouterModule.forRoot(routes);