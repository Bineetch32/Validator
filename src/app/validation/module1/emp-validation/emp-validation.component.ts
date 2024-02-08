import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { FormGroup } from '@angular/forms';


@Component({
  selector: 'app-emp-validation',
  templateUrl: './emp-validation.component.html',
  styleUrls: ['./emp-validation.component.css']
})
export class EmpValidationComponent implements OnInit {
  registerationForm: FormGroup;
  
  constructor(private fb:FormBuilder) { }
  


  ngOnInit(): void {

    this.registerationForm=this.fb.group({
      fname:['',[Validators.required,Validators.minLength(5),Validators.maxLength(10)]],
      lname:['',[Validators.required,Validators.minLength(5),Validators.maxLength(10)]],
      email:['',[Validators.required,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
      password:['', [Validators.required, Validators.minLength(6)]],
      mobile: ['', [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]],
      address:this.fb.group({
        cityname:['',[Validators.required]],
        areaname:['',[Validators.required]]
      })
    })
  }
  submitCall(){}

  fillForm(){

    this.registerationForm.patchValue({
      fname:'',
      lname:'',
      email:'',
      password:'',
      mobile:'',
      address:{
        cityname:'',
        areaname:''
      }
    })
  }

  resetData(){
    this.registerationForm.reset();
  }
}
