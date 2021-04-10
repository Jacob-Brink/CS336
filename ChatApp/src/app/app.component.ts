import { Component } from '@angular/core';
import { Timestamp } from 'rxjs';

interface FirestoreRec {
  message: string,
  timeStamp: firebase.default.firestore.Timestamp,
  color?: string,  
};

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ChatApp';
  chat: Array<FirestoreRec> = [];
  
}
