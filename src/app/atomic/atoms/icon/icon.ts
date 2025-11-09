import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-icon',
  standalone: false,
  templateUrl: './icon.html',
  styleUrls: ['./icon.scss']
})
export class IconComponent {
  @Input() type: 'material' | 'lucide' | 'fontawesome' | 'hero' = 'material';
  @Input() name = 'home';
  @Input() size: number | string = 20;
  @Input() color?: string;
  @Input() spin = false;
  @Input() ariaLabel?: string;

  get sizePx(): string {
    return typeof this.size === 'number' ? `${this.size}px` : this.size;
  }
}
