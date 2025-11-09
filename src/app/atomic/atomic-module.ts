import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { RouterModule, Routes } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

import { ButtonComponent } from './atoms/button/button';
import { InputComponent } from './atoms/input/input';
import { LabelComponent } from './atoms/label/label';
import { IconComponent } from './atoms/icon/icon';
import { FormFieldComponent } from './molecules/form-field/form-field';
import { LoginFormComponent } from './organisms/login-form/login-form';
import { AuthTemplateComponent } from './templates/auth-template/auth-template';
import { DesignShowcaseComponent } from './pages/design-showcase/design-showcase';

const atomicRoutes: Routes = [
  {
    path: 'pages/design-showcase',
    component: DesignShowcaseComponent
  }
];

@NgModule({
  declarations: [
    ButtonComponent,
    InputComponent,
    LabelComponent,
    IconComponent,
    FormFieldComponent,
    LoginFormComponent,
    AuthTemplateComponent,
    DesignShowcaseComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    TranslateModule,
    RouterModule.forChild(atomicRoutes)
  ],
  exports: [
    ButtonComponent,
    InputComponent,
    LabelComponent,
    IconComponent,
    FormFieldComponent,
    LoginFormComponent,
    AuthTemplateComponent,
    DesignShowcaseComponent,
    TranslateModule
  ]
})
export class AtomicModule { }
