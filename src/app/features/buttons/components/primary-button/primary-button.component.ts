import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseComponent } from '../../../../shared/base/base-component';

@Component({
    selector: 'app-primary-button',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './primary-button.component.html',
    styleUrls: ['./primary-button.component.scss']
})
export class PrimaryButtonComponent extends BaseComponent {
    @Input() label: string = '';
    @Output() clicked = new EventEmitter<void>();

    constructor() {
        super();
    }

    protected onInit(): void {
        console.log(`Button ${this.id} initialized`);
    }

    onClick(): void {
        this.clicked.emit();
    }
}