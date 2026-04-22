import { Component } from '@angular/core';
import { InterestsService } from '../../services/interests-service/interests.service';
import { Interest } from '../modelos/interest/interest.model';
import { map } from 'rxjs';

@Component({
  selector: 'app-interests',
  standalone: true,
  imports: [],
  templateUrl: './interests.component.html',
  styleUrl: './interests.component.scss'
})
export class InterestsComponent {
  interests: Interest[] = [];

  constructor(public interestsService: InterestsService) {
    this.interestsService.getInterests().snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({ id: c.payload.doc.id, ...c.payload.doc.data() })
        )
      )
    ).subscribe(data => {
      this.interests = data;
    });
  }
}
