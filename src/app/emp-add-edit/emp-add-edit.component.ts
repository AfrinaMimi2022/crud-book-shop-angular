import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { EmployeeService } from '../services/employee.service';

@Component({
  selector: 'app-emp-add-edit',
  templateUrl: './emp-add-edit.component.html',
  styleUrls: ['./emp-add-edit.component.css']
})
export class EmpAddEditComponent {
  empForm: FormGroup;

  education : string[]=[
    'SSC',
    'HSC',
    'BSc',
    'MSc',
  ];

  // inject the newly created service to constructor
  constructor(private _fb: FormBuilder, private _empService: EmployeeService){
    this.empForm = this._fb.group({
      firstName:'',
      lastName: '',
      email: '',
      dob: '',
      gender: '',
      education: '',
      company: '',
      experience: '',
      package: '',
    })
  }
  onFormSubmit(){
    if(this.empForm.valid){
      console.log(this.empForm.value);
    }
  }
  
}













