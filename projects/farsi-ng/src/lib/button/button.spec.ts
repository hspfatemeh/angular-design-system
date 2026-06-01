import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Button } from './button';

describe('Button', () => {
  let component: Button;
  let fixture: ComponentFixture<Button>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Button]
    }).compileComponents();

    fixture = TestBed.createComponent(Button);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render icon', () => {
    fixture.componentRef.setInput('icon', 'pi pi-save');
    fixture.detectChanges();
  
    const icon = fixture.nativeElement.querySelector('.ui-button__icon');
  
    expect(icon).toBeTruthy();
  });

  it('should build full class list correctly', () => {
    fixture.componentRef.setInput('variant', 'danger');
    fixture.componentRef.setInput('size', 'lg');
    fixture.componentRef.setInput('appearance', 'outline');
    fixture.componentRef.setInput('loading', true);
    fixture.componentRef.setInput('fullWidth', true);

    fixture.detectChanges(); 

    const classes = component.buttonClasses();

    expect(classes).toContain('ui-button--danger');
    expect(classes).toContain('ui-button--lg');
    expect(classes).toContain('ui-button--outline');
    expect(classes).toContain('ui-button--loading');
    expect(classes).toContain('ui-button--full');
  });
});