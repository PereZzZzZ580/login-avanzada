import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';

import { Button } from './atoms/button/button';
import { Input } from './atoms/input/input';
import { Label } from './atoms/label/label';
import { Icon } from './atoms/icon/icon';
import { FormField } from './molecules/form-field/form-field';
import { LoginForm } from './organisms/login-form/login-form';
import { AuthTemplate } from './templates/auth-template/auth-template';
import { DesignShowcase } from './pages/design-showcase/design-showcase';

@NgModule({
  declarations: [
    Button,
    Input,
    Label,
    Icon,
    FormField,
    LoginForm,
    AuthTemplate,
    DesignShowcase
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule
  ],
  exports: [
    Button,
    Input,
    Label,
    Icon,
    FormField,
    LoginForm,
    AuthTemplate,
    DesignShowcase
  ]
})
export class AtomicModule { }
