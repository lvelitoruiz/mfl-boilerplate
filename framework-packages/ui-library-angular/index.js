import { Component, Input, Output, EventEmitter, NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { defineCustomElements as defineElements } from 'ui-library/loader';

// Initialize web components
let componentsInitialized = false;
const initializeComponents = () => {
  if (!componentsInitialized) {
    defineElements();
    componentsInitialized = true;
  }
};

// Angular wrapper components
@Component({
  selector: 'ui-button',
  template: `
    <ui-button 
      [attr.variant]="variant"
      [attr.size]="size"
      [attr.loading]="loading"
      [attr.disabled]="disabled"
      (click)="$event">
      <ng-content></ng-content>
    </ui-button>
  `
})
export class UiButtonComponent {
  @Input() variant;
  @Input() size;
  @Input() loading;
  @Input() disabled;

  constructor() {
    initializeComponents();
  }
}

@Component({
  selector: 'ui-card',
  template: `<ui-card><ng-content></ng-content></ui-card>`
})
export class UiCardComponent {
  constructor() {
    initializeComponents();
  }
}

@Component({
  selector: 'ui-card-header',
  template: `<ui-card-header><ng-content></ng-content></ui-card-header>`
})
export class UiCardHeaderComponent {
  constructor() {
    initializeComponents();
  }
}

@Component({
  selector: 'ui-card-title',
  template: `<ui-card-title><ng-content></ng-content></ui-card-title>`
})
export class UiCardTitleComponent {
  constructor() {
    initializeComponents();
  }
}

@Component({
  selector: 'ui-card-content',
  template: `<ui-card-content><ng-content></ng-content></ui-card-content>`
})
export class UiCardContentComponent {
  constructor() {
    initializeComponents();
  }
}

@Component({
  selector: 'ui-input',
  template: `
    <ui-input
      [attr.label]="label"
      [attr.placeholder]="placeholder"
      [attr.value]="value"
      [attr.required]="required"
      [attr.error]="error"
      [attr.error-message]="errorMessage"
      (uiInput)="uiInput.emit($event.detail)"
      (uiBlur)="uiBlur.emit()"
      (uiFocus)="uiFocus.emit()">
    </ui-input>
  `
})
export class UiInputComponent {
  @Input() label;
  @Input() placeholder;
  @Input() value;
  @Input() required;
  @Input() error;
  @Input() errorMessage;
  
  @Output() uiInput = new EventEmitter();
  @Output() uiBlur = new EventEmitter();
  @Output() uiFocus = new EventEmitter();

  constructor() {
    initializeComponents();
  }
}

@NgModule({
  declarations: [
    UiButtonComponent,
    UiCardComponent,
    UiCardHeaderComponent,
    UiCardTitleComponent,
    UiCardContentComponent,
    UiInputComponent
  ],
  imports: [CommonModule],
  exports: [
    UiButtonComponent,
    UiCardComponent,
    UiCardHeaderComponent,
    UiCardTitleComponent,
    UiCardContentComponent,
    UiInputComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class UiLibraryModule {}

// Export the initialize function
export const defineCustomElements = () => {
  initializeComponents();
};