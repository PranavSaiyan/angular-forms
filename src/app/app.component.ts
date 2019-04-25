import { Component, ViewChild } from '@angular/core';
import { NgForm} from '@angular/forms';
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  @ViewChild('f') submitForm;
  @ViewChild('mail') email;
  warn = false;
  answer = '';
  defaultoption = 'book';
  genders = ['Male','Female'];
  formUser = {
    name:'',
    email:'',
    password:'',
    gender:'',
    question:'',
    answer:''
  }
  suggestUsername() {
//     this.submitForm.setValue({
// Answer: "leo",
// email: "pranavsupersaiyan10@gmail.com",
// gender: "Male",
// list: "pet",
// pass: "ifucku",
// user: "saiyan100"
//     });

    this.submitForm.form.patchValue({
      user:"saiyan100"
      });
  }
  onSubmit(){
    this.formUser.name = this.submitForm.form.value.user;

    this.formUser.email = this.submitForm.form.value.email;

    this.formUser.gender = this.submitForm.form.value.gender;

    this.formUser.password = this.submitForm.form.value.pass;

    this.formUser.question = this.submitForm.form.value.list;

    this.formUser.answer = this.submitForm.form.value.Answer;
    console.log(this.formUser);
    console.log(this.submitForm);
    console.log(this.email);
  }
  onBlur(){
console.log(this.email._parent.form.status);

    if( this.email._parent.form.status === 'INVALID' ){
      this.warn = true;
    }
    else if(this.email._parent.form.status === 'VALID'){
      this.warn = false;
    }
  }
}
