import { Injectable } from '@angular/core';
import { Contact } from './contact';
import { Subject, Observable, of } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class ContactService {
    CONTACT_DETAILS_KEY = "ContactDetails";
    constructor() { }

    get(contact: Contact = null): Contact[] {
        return this.getContactDetailsData(contact);
    }

    post(contact: Contact): Observable<Boolean> {
        this.setContactDetailsData(contact);
        return of(true);
    }

    delete(contact: Contact): Observable<Boolean> {
        this.setContactDetailsData(contact, true);
        return of(true);
    }

    put(contact: Contact): Observable<Boolean> {
        this.setContactDetailsData(contact);
        return of(true);
    }

    private setContactDetailsData = (contact: Contact, isRemove: Boolean = false) => {
        if (contact) {
            let contactDetailsData = this.getContactDetailsDataFromLocalStorage();
            const existingIndex = contactDetailsData.findIndex((item: Contact) => item.id === contact.id)
            if (existingIndex !== -1) {
                if (isRemove) {
                    contactDetailsData.splice(existingIndex, 1);
                } else {
                    contactDetailsData[existingIndex] = contact;
                }
            } else {
                contactDetailsData.push(contact);
            }
            localStorage.setItem(this.CONTACT_DETAILS_KEY, JSON.stringify(contactDetailsData));
        }
    }

    private getContactDetailsData = (contact: Contact) => {
        let contactDetailsData = this.getContactDetailsDataFromLocalStorage();
        if (contact) {
            const existingIndex = contactDetailsData.findIndex(item => parseInt(item.id, 10) === contact.id)
            if (existingIndex !== -1) {
                return contactDetailsData.splice(existingIndex, 1);
            }
        }
        return contactDetailsData;
    }

    private getContactDetailsDataFromLocalStorage = () => {
        try {
            const storageData = localStorage.getItem(this.CONTACT_DETAILS_KEY);
            return storageData ? JSON.parse(storageData) : [];
        } catch {
            return [];
        }
    }
}
