import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-component-test',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './component-test.html',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ComponentTestComponent {
  inputValue: string = '';
  loading: boolean = false;

  handleButtonClick() {
    this.loading = true;
    setTimeout(() => {
      this.loading = false;
    }, 2000);
  }

  handleInputChange(event: any) {
    this.inputValue = event.detail;
  }
}