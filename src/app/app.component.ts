import { Component } from '@angular/core';
import { SpeechRecognitionService } from './speech-recognition.service'

@Component({
  selector: 'app-root',
  providers: [SpeechRecognitionService],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  
  constructor(private speech:SpeechRecognitionService){
    this.speech.record('es_ES')
      .subscribe(e => console.log(e));
  }
  
}
