import { Directive, Input, OnInit } from "@angular/core";

@Directive()
export abstract class BaseComponent implements OnInit {
    @Input() id: string;
    @Input() visible: boolean = true;

    constructor() {
        this.id = '';
    }

    ngOnInit(): void {
        this.initalize();
    }

    protected abstract initalize(): void;

    show(): void {
        this.visible = true;
    }

    hide(): void {
        this.visible = false;
    }

    isVisible(): boolean {
        return this.visible;
    }

    getId(): string {
        return this.id;
    }
}