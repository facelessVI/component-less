import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ButtonComponent } from './components/buttons/button.component';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [RouterOutlet, ButtonComponent],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss'
})
export class AppComponent {
    title = 'component-less';

    constructor() {
        console.log('AppComponent initialized');
    }

    onLoginClick(): void {
        console.log('Login button clicked');
    }
}
