import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ContactUsComponent } from '../shared/components/contact-us/contact-us.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';
import { MakeQuoteComponent } from './components/make-quote/make-quote.component';
import { AgentprosMainComponent } from './components/agentpros-main/agentpros-main.component';
import { SmallHeaderComponent } from '../shared/components/small-header/small-header.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'reset-password', component: ResetPasswordComponent },
  { path: 'contact-us', component: ContactUsComponent },
  { path: 'agentpros-main', component:AgentprosMainComponent },
  { path: 'make-quote', component: MakeQuoteComponent },
  { path: 'small-header', component: SmallHeaderComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
