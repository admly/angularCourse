import {Component, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('f') singupForm: NgForm;
  defaultQuestion = 'pet';
  answer: any;
  genders = ['male', 'female'];
  user = {
    username: '',
    email: '',
    secretQuestion: '',
    answer: '',
    gender: ''
  };
  submitted = false;

  suggestUserName() {
    const suggestedName = 'Superuser';
    // this.singupForm.setValue({
    //   userData: {
    //     username: suggestedName,
    //     email: ''
    //   },
    //   secret: 'pet',
    //   questionAnswer: '',
    //   gender: 'male'
    // });
    this.singupForm.form.patchValue({
      userData: {
        username: suggestedName
      }
    });
  }

  // onSubmit(f: NgForm) {
  //   console.log(f);
  // }
  onSubmit() {
    this.user.username = this.singupForm.value.username;
    this.user.email = this.singupForm.value.email;
    this.user.secretQuestion = this.singupForm.value.secret;
    this.user.answer = this.singupForm.value.questionAnswer;
    this.user.gender = this.singupForm.value.gender;
    this.submitted = true;
    console.log(this.singupForm);
    this.singupForm.reset();
  }
}
