import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';
import { ButtonAppearance, ButtonSize, ButtonVariant } from './button.types';

@Component({
  selector: 'ui-button',
  imports: [],
  standalone: true,
  template: `<button
  [disabled]="disabled() || loading()"
  [attr.aria-busy]="loading()"
  [attr.aria-label]="ariaLabel()  || label()"
  [class]="buttonClasses()"
  >
  @if (loading()) {
    <span class="ui-button__spinner" aria-hidden="true"></span>
  }@else{
    @if (icon() && iconPosition() === 'left' && !loading()) {
      <span class="ui-button__icon">
        <i [class]="icon()"></i>
      </span>
    }
    
    @if (label()) {
      <span class="ui-button__content">
        {{ label() }}
      </span>
    } @else {
      <span class="ui-button__content">
        <ng-content />
      </span>
    }
    
    @if (icon() && iconPosition() === 'right' && !loading()) {
      <span class="ui-button__icon">
        <i [class]="icon()"></i>
      </span>
    }

  }
</button>
`,
  styleUrls: ['./button.scss'],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class Button {
    
  buttonClasses = computed(() => {
    const isIconOnly =!!this.icon() && !this.label();

    return [
      'ui-button',
  
      `ui-button--${this.variant()}`,
      `ui-button--${this.size()}`,
      `ui-button--${this.appearance()}`,
  
      this.loading() && 'ui-button--loading',
      this.disabled() && 'ui-button--disabled',
      this.fullWidth() && 'ui-button--full',
      this.rounded() && 'ui-button--rounded',
  
      isIconOnly && 'ui-button--icon-only',
      this.elevated() && 'ui-button--elevated'
    ]
      .filter(Boolean)
      .join(' ');
  });

  label = input<string | null>(null);
  variant= input<ButtonVariant>('primary');
  size= input<ButtonSize>('md');
  appearance=input<ButtonAppearance>('solid');
  disabled = input(false);
  loading = input(false);
  fullWidth = input(false);

  icon = input<string | null>(null);
  iconPosition = input<'left' | 'right'>('left');

  rounded = input(false);
  
  elevated = input(false);
  
  href = input<string | null>(null);
  
  target = input<'_self' | '_blank'>('_self');
  
  type = input<'button' | 'submit' | 'reset'>('button');
  
  ariaLabel = input('');
  
  loadingText = input('Loading...');



}
