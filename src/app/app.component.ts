import { Component, ViewChild } from '@angular/core';
import { NgForm} from '@angular/forms';
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  @ViewChild('f') submitForm: NgForm;
  @ViewChild('mail') email;
  warn = false;
  answer = '';
  defaultoption = 'book';
  genders = ['Male','Female'];
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
