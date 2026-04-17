import { Component } from '@angular/core';
import { InterestsService } from '../../services/interests-service/interests.service';

@Component({
  selector: 'app-interests',
  standalone: true,
  imports: [],
  templateUrl: './interests.component.html',
  styleUrl: './interests.component.scss'
})
export class InterestsComponent {
  constructor(public interestsService:InterestsService){
    console.log(this.interestsService);
  }
}
