import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user.component';
import {RouterModule, Routes} from "@angular/router";
import {LoginComponent} from "./login/login.component";
import {ReactiveFormsModule} from "@angular/forms";

const routes: Routes = [
  {
    path: "",
    component: UserComponent,
    children: [
      {
        path: "login",
        component: LoginComponent
      },
      {
        path: "register",
        loadChildren: () => import("./register/register.module").then(m => m.RegisterModule),
      }
    ]
  },
]

@NgModule({
  declarations: [
    UserComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
  ],
  exports: [
    RouterModule,
    ReactiveFormsModule,
  ]
})
export class UserModule { }
