import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ContactService } from '../contact.service';
import { Contact } from '../contact';

@Component({
    selector: 'app-add-contact',
    templateUrl: './add-contact.component.html',
    styleUrls: ['./add-contact.component.css']
})
export class AddContactComponent implements OnInit {

    constructor(private formBuilder: FormBuilder,
        private router: Router,
        private contactService: ContactService) { }
    addForm: FormGroup;
    submitted = false;
    ngOnInit() {
        this.addForm = this.formBuilder.group({
            id: [],
            name: ['', Validators.required],
            phoneNumber: ['', Validators.required]
        });
    }

    get f() { return this.addForm.controls; }

    onSubmit() {
        this.submitted = true;
        if (this.addForm.invalid) {
            return;
        }
        const contact: Contact = this.addForm.value;
        contact.id = (new Date()).getTime();
        this.contactService.post(this.addForm.value)
            .subscribe(data => {
                this.router.navigate(['list-contact']);
            });

    }

}
