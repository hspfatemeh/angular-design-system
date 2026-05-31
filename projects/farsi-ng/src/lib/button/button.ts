import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';
import { ButtonAppearance, ButtonSize, ButtonVariant } from './button.types';

@Component({
  selector: 'ui-button',
  imports: [],
  standalone: true,
  templateUrl: './button.html',
  styleUrls: ['./button.scss'],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class Button {
    
  buttonClasses = computed(() =>
    [
      'ui-button',
  
      `ui-button--${this.variant()}`,
      `ui-button--${this.size()}`,
      `ui-button--${this.appearance()}`,
  
      this.loading() && 'ui-button--loading',
  
      this.disabled() && 'ui-button--disabled',
  
      this.fullWidth() && 'ui-button--full',
  
      this.rounded() && 'ui-button--rounded',
  
      this.iconOnly() && 'ui-button--icon-only',
  
      this.elevated() && 'ui-button--elevated'
    ]
      .filter(Boolean)
      .join(' ')
  );

  variant= input<ButtonVariant>('primary');
  size= input<ButtonSize>('md');
  appearance=input<ButtonAppearance>('solid');
  disabled = input(false);
  loading = input(false);
  fullWidth = input(false);
  iconOnly = input(false);
  rounded = input(false);
  
  elevated = input(false);
  
  href = input<string | null>(null);
  
  target = input<'_self' | '_blank'>('_self');
  
  type = input<'button' | 'submit' | 'reset'>('button');
  
  ariaLabel = input('');
  
  loadingText = input('Loading...');

  leftIcon = input<string | null>(null);
  rightIcon = input<string | null>(null);

}
