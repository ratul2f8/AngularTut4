import { Component,  } from '@angular/core';
import { lorem } from 'faker';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  randomText = lorem.sentence();
  typedText = "";
  onChangeTypedText(event: Event){
    this.typedText = (<HTMLInputElement>event.target).value;
  }
  compare(randomLetter: string, eneteredLetter: string){
    if(!eneteredLetter){
      return "pending"
    };
    return randomLetter === eneteredLetter ? "correct": "incorrect";
  }
}
