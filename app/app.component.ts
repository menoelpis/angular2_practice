import {Component} from 'angular2/core';
import {CoursesComponent} from "./courses.component";
import {AuthorsComponent} from "./authors.component";

@Component({
    selector: 'my-app',
    template: `
        <h1>My First Angular 2 App</h1>
        <courses></courses>
        <authors></authors>
        <button 
            class="btn btn-primary" 
            [class.active]="isActive"
            [style.backgroundColor]="isActive ? 'blue' : 'gray'">Submit</button>
        <div (click)="onDivClick()">
            <button (click)="onClick($event)">Click</button>
        </div>
        <input type="text" [value]="title" (input)="title = $event.target.value" />
        <input type="text" [(ngModel)]="title" />
        <input type="text" bindon-ngModel="title" />
        <input type="button" (click)="title = ''" value="Clear" />
        Preview: {{ title }}
        <i 
            class="glyphicon" 
            [class.glyphicon-star]="!isFavorite" 
            [class.glyphicon-star-empty]="isFavorite"
            (click)="onStarClick()">
        </i>
        `,
    directives: [CoursesComponent, AuthorsComponent]
})

export class AppComponent {
    isActive = true;
    isFavorite = false;

    title = "Angular App";

    onDivClick() {
        console.log("Handled by Div");
    }

    onClick($event) {
        $event.stopPropagation();
        console.log("Clicked", $event);
    }

    onStarClick() {
        this.isFavorite = !this.isFavorite;
    }
}