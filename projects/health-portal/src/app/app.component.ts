import { Component } from '@angular/core';
import { SpeechService } from 'projects/cognitive-services/src/public-api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Health Portal';
  constructor(speechService: SpeechService){}

}
