import { NgModule } from '@angular/core';

import { CognitiveServicesComponent } from './cognitive-services.component';
import { SpeechToTextComponent } from './speech/speech-to-text/speech-to-text.component';
import { SpeechService } from './speech/speech.service';

@NgModule({
  declarations: [CognitiveServicesComponent, SpeechToTextComponent],
  imports: [
  ],
  exports: [ CognitiveServicesComponent, SpeechToTextComponent ],
  providers: [SpeechService]
})
export class CognitiveServicesModule { }
