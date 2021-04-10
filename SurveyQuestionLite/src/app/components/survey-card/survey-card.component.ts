import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-survey-card',
    templateUrl: './survey-card.component.html',
    styleUrls: ['./survey-card.component.scss']
})
export class SurveyCardComponent implements OnInit {

    // declare inputs
    // all inputs are required to be defined, except units
    @Input() question: String = "";
    @Input() units?: String = "";

    @Input() minValue: number = 0;
    @Input() maxValue: number = 100;    

    // declare output variable to be value of slider
    @Output() result: EventEmitter<any> = new EventEmitter();

    constructor() { }

    // do nothing on init
    ngOnInit(): void {
    }

    // set output variable (result) to the slider's value
    sliderChanged(event): void {
	    this.result.emit(event.value);
    }
    
}
