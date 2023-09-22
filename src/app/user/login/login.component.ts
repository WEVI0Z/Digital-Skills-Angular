import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {User} from "../../shared/interface/user";
import {UserService} from "../user.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{
  form!: FormGroup;
  incorrect: boolean = false;

  constructor(private userService: UserService, private router: Router) {
  }

  ngOnInit(): void {
    this.form = new FormGroup<any>({
      login: new FormControl(null, [
        Validators.required,
      ]),
      password: new FormControl(null, [
        Validators.required,
      ])
    })
  }

  submit() {
    const user: User = {
      login: this.form.value["login"],
      password: this.form.value["password"],
    }

    this.userService.login(user).subscribe(user => {
      if (user) {
        this.router.navigate(["/main"]);
      } else {
        this.incorrect = true;
      }
    });
  }
}
