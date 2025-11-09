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

  @Input() set appHasRole(role: string | string[]) {
    this.vcr.clear();
    this.roles = this.auth.getRoles();

    const requiredRoles = Array.isArray(role) ? role : [role];
    const isAuthorized = requiredRoles.some((required) => this.roles.includes(required));

    if (isAuthorized) {
      this.vcr.createEmbeddedView(this.tpl);
    }
  }
}
