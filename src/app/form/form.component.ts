import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
[x: string]: any;
  form!: FormGroup;
  names: string[] = ['John', 'Alice', 'Bob', 'Jane']; // Sample names for the dropdown
  genders: string[] = ['Male', 'Female', 'Other']; // Sample genders for the radio button group
  
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      initials: ['', Validators.required],
      surname: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      idNumber: ['', [Validators.required, Validators.minLength(13), Validators.maxLength(13)]],
      selectedName: ['', Validators.required], // FormControl for the dropdown
      gender: ['', Validators.required] // FormControl for the radio button group
      
    });
  }

  submitForm() {
    if (this.form.valid) {
      // Submit form data here
      console.log(this.form.value);
    } else {
      // Handle form validation errors
      alert('Form is invalid! Please fill in all required fields correctly.');
    }
  }
}
