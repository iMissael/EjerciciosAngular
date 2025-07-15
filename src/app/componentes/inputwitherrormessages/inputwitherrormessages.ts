import { Component } from '@angular/core';
import {FormControl, Validators, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';

@Component({
  selector: 'app-inputwitherrormessages',
  imports: [FormsModule, MatFormFieldModule, MatInputModule, ReactiveFormsModule],
  templateUrl: './inputwitherrormessages.html',
  styleUrl: './inputwitherrormessages.css'
})
export class Inputwitherrormessages {
    emailFormControl = new FormControl('', [Validators.required, Validators.email]);
}
