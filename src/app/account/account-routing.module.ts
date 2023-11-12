import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { SignComponent } from "./pages/sign/sign.component";
import { RegisterComponent } from "./pages/register/register.component";
import { AccountComponent } from "./account.component";

const routes: Routes = [
  {
    path: '', component: AccountComponent, children: [
      {
        path: 'login', component: SignComponent
      },
      {
        path: 'register', component: RegisterComponent,
      }
    ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AccountRoutingModule {}
