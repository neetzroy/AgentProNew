import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';
import { ContactUsComponent } from '../shared/components/contact-us/contact-us.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MakeQuoteComponent } from './components/make-quote/make-quote.component';
import { AgentprosMainComponent } from './components/agentpros-main/agentpros-main.component';
import { SmallHeaderComponent } from '../shared/components/small-header/small-header.component';



@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    ResetPasswordComponent,
    ContactUsComponent,
    MakeQuoteComponent,
    AgentprosMainComponent,
    SmallHeaderComponent

  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    FormsModule,
    ReactiveFormsModule,

  ],
  exports: [
    LoginComponent,
    RegisterComponent,
    ResetPasswordComponent,
    ContactUsComponent,
    AgentprosMainComponent,
    MakeQuoteComponent,
  ]
})
export class AuthModule { }
