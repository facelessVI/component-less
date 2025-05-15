import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
    standalone: true,
})

export class HomeComponent implements OnInit {
    constructor(
        private readonly router: Router,
    ) {}

    ngOnInit(): void {
        
    }
    
    navigateToButtons(): void {
        this.router.navigate(['/components/buttons']);
    }

    navigateToCards(): void {
        this.router.navigate(['/components/cards']);
    }

    navigateToModals(): void {
        this.router.navigate(['/components/modals']);
    }
}