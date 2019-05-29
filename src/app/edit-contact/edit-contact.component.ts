import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Contact } from '../contact';
import { ContactService } from '../contact.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
    selector: 'app-edit-contact',
    templateUrl: './edit-contact.component.html',
    styleUrls: ['./edit-contact.component.css']
})
export class EditContactComponent implements OnInit {

    contactList: Contact[] = [];
    editForm: FormGroup;
    submitted = false;
    constructor(private formBuilder: FormBuilder, private router: Router, private route: ActivatedRoute, private contactService: ContactService) { }

    ngOnInit() {
        if (isNaN(+this.route.snapshot.params.id)) {
            alert("Invalid action.")
            this.router.navigate(['list-contact']);
            return;
        }
        let contact: Contact = {
            id: this.route.snapshot.params.id,
            name: "",
            phoneNumber: ""
        };
        this.contactList = this.contactService.get(contact)
        if (this.contactList && this.contactList.length) {
            contact = this.contactList[0];
            this.editForm = this.formBuilder.group({
                id: [],
                name: ['', Validators.required],
                phoneNumber: ['', Validators.required]
            });
            this.editForm.setValue(contact);
        } else {
            alert("Invalid action.")
            this.router.navigate(['list-contact']);
            return;
        }
    }

    get f() { return this.editForm.controls; }

    onSubmit() {
        this.submitted = true;
        if (this.editForm.invalid) {
            return;
        }
        this.contactService.put(this.editForm.value)
            .subscribe(data => {
                this.router.navigate(['list-contact']);
            }, error => {
                alert(error);
            });
    }

}
