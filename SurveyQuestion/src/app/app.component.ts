import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})

export class AppComponent {
    title = 'SurveyQuestion';

    // when the results come in, we print them to the console to show that this works!
    gotResult(value): void {
        console.log(value);
    }

}
