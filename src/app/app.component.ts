import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [RouterOutlet],
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
