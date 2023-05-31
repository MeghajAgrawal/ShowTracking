import { Component , Input } from '@angular/core';
import { Anime } from './animemodel';
@Component({
  selector: 'app-animedisplay',
  templateUrl: './animedisplay.component.html',
  styleUrls: ['./animedisplay.component.css']
})
export class AnimedisplayComponent {
  @Input() anime :  Anime | undefined
  constructor(){}

}
