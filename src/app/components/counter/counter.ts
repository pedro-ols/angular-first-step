import { Component } from '@angular/core';
import { BackButton } from '../back-button/back-button';

@Component({
    selector: 'app-counter',
    imports: [BackButton],
    templateUrl: './counter.html',
    styleUrl: './counter.css',
})
export class Counter {
    currentNumber = 0

    some() {
        this.currentNumber += 1
    }
    subtract() {
        this.currentNumber -= 1
    }
}
