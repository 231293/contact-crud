import { Component, OnInit } from '@angular/core';
import { ContactService } from '../contact.service';
import { Contact } from '../contact';

@Component({
    selector: 'app-contact-list',
    templateUrl: './contact-list.component.html',
    styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {
    contacts: Contact[];
    constructor(private contactService: ContactService) {
    }

    ngOnInit() {
        this.loadContactList();
    }

    loadContactList = () => {
        this.contacts = this.contactService.get();
    }

    onDeleteContact(id: number) {
        if (confirm("Are you sure?")) {
            const contact: Contact = {
                id: id,
            }
            this.contactService.delete(contact).subscribe((date) => {
                this.loadContactList();
            });
        }
    }
}
