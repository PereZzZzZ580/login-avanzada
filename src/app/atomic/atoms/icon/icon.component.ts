import { Component, Input } from '@angular/core';
import type { IconDefinition } from '@fortawesome/fontawesome-svg-core';

@Component({
  selector: 'app-icon',
  standalone: false,
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss']
})
export class IconComponent {
  @Input() type: 'material' | 'lucide' | 'fontawesome' | 'hero' = 'material';
  @Input() name = 'home';
  @Input() size: number | string = 20;
  @Input() color?: string;
  @Input() spin = false;
  @Input() ariaLabel?: string;
  @Input() variant: 'outline' | 'solid' | 'duotone' = 'outline';
  @Input() faIcon?: IconDefinition;

  get sizePx(): string {
    return typeof this.size === 'number' ? `${this.size}px` : this.size;
  }

  get heroIconName(): string {
    if (!this.name) {
      return '';
    }
    if (this.variant === 'solid' && !this.name.endsWith('Solid')) {
      return `${this.name}Solid`;
    }
    return this.name;
  }

  get colorClass(): string | undefined {
    if (!this.color) {
      return undefined;
    }
    return this.isClassColor(this.color) ? this.color : undefined;
  }

  get colorStyle(): string | undefined {
    if (!this.color) {
      return undefined;
    }
    return this.isClassColor(this.color) ? undefined : this.color;
  }

  private isClassColor(value: string): boolean {
    return value.includes('-') || value.includes(' ') || value.includes(':');
  }
}
