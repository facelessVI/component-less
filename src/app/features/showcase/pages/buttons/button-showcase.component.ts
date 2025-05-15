import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrimaryButtonComponent } from '../../../component-library/buttons/components/primary-button/primary-button.component';
// Import other button components as you create them

@Component({
    selector: 'app-button-showcase',
    standalone: true,
    imports: [
        CommonModule,
        PrimaryButtonComponent,
        // Add other button components here
    ],
    templateUrl: './button-showcase.component.html',
    styleUrls: ['./button-showcase.component.scss']
})
export class ButtonShowcaseComponent {
    // Methods for button demos
    handleButtonClick(): void {
        console.log('Button clicked in showcase');
    }
}