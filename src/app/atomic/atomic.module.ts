import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { TranslateModule } from '@ngx-translate/core';
import { LucideAngularModule, Lock, User } from 'lucide-angular';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgIconsModule } from '@ng-icons/core';
import { heroUser, heroLockClosed } from '@ng-icons/heroicons/outline';
import { heroUserSolid, heroLockClosedSolid } from '@ng-icons/heroicons/solid';

import { ButtonComponent } from './atoms/button/button.component';
import { InputComponent } from './atoms/input/input.component';
import { LabelComponent } from './atoms/label/label.component';
import { IconComponent } from './atoms/icon/icon.component';
import { FormFieldComponent } from './molecules/form-field/form-field.component';
import { LoginFormComponent } from './organisms/login-form/login-form.component';
import { AuthTemplateComponent } from './templates/auth-template/auth-template.component';
import { DesignShowcaseComponent } from './pages/design-showcase/design-showcase.component';

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
    LucideAngularModule.pick({ User, Lock }),
    FontAwesomeModule,
    NgIconsModule.withIcons({ heroUser, heroLockClosed, heroUserSolid, heroLockClosedSolid })
  ],
  exports: [
    ButtonComponent,
    InputComponent,
    LabelComponent,
    IconComponent,
    FormFieldComponent,
    LoginFormComponent,
    AuthTemplateComponent,
    DesignShowcaseComponent
  ]
})
export class AtomicModule { }
