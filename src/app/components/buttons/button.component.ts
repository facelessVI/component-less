import { Component, EventEmitter, Input, Output } from '@angular/core';
import { BaseComponent } from '../base-component'
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-button',
    templateUrl: './button.component.html',
    styleUrls: ['./button.component.scss'],
    standalone: true,
    imports: [CommonModule],
})

export class ButtonComponent extends BaseComponent {
    @Input() label: string = '';
    @Input() type: 'primary' | 'secondary' | 'warning' = 'primary';
    @Output() clicked = new EventEmitter<void>();

    constructor() {
        super();
    }

    protected initalize(): void {
        console.log(`Button initialized with id: ${this.id}`);
        console.log(`Button label: ${this.label}`);
        console.log(`Button type: ${this.type}`);
    }

    click(): void {
        console.log(`Button with id: ${this.id} clicked`);
        this.clicked.emit();
    }
}