import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Directive({
  selector: '[appHasRole]',
  standalone: false
})
export class HasRoleDirective {
  private roles: string[] = [];

  constructor(
    private readonly tpl: TemplateRef<any>,
    private readonly vcr: ViewContainerRef,
    private readonly auth: AuthService
  ) {}

  @Input() set appHasRole(role: string) {
    this.vcr.clear();
    this.roles = this.auth.getRoles();

    if (this.roles.includes(role)) {
      this.vcr.createEmbeddedView(this.tpl);
    }
  }
}
