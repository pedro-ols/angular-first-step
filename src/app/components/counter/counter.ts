import { Component } from '@angular/core';

@Component({
    selector: 'app-counter',
    imports: [],
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
