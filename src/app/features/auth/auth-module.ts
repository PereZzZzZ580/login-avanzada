import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';

import { AuthRoutingModule } from './auth-routing-module';
import { AtomicModule } from '../../atomic/atomic-module';
import { Auth } from './auth';
import { LoginComponent } from './pages/login/login';

@NgModule({
  declarations: [
    Auth,
    LoginComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    TranslateModule,
    AuthRoutingModule,
    AtomicModule
  ]
})
export class AuthModule { }
