import { Routes } from "@angular/router";
import { ContainerComponent } from "./components/container/container.component";
import { SigninComponent } from "./components/auth/signin/signin.component";
import { SignupComponent } from "./components/auth/signup/signup.component";

export const ROUTES : Routes = [
  {
    path:'',
    component: ContainerComponent,
    pathMatch: 'full'
  },
  {
    path:'signin',
    component: SigninComponent,
    pathMatch: 'full'
  },
  {
    path:'signup',
    component: SignupComponent,
    pathMatch: 'full'
  },
]
