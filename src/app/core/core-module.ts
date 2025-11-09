import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JwtInterceptor } from './interceptors/jwt.interceptor';
import { I18nModule } from './i18n/translate.module';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    I18nModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: JwtInterceptor,
      multi: true
    }
  ]
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule?: CoreModule) {
    if (parentModule) {
      throw new Error('CoreModule was already loaded. Import it in the AppModule only.');
    }
  }
}
