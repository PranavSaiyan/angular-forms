import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  @ViewChild('f') submitForm: NgForm;
  name = 'Angular';
  onSubmit(){
    console.log(this.submitForm);
  }
}
