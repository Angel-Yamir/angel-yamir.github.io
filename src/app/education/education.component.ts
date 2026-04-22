import { Component } from '@angular/core';
import { EducationService } from '../../services/education-service/education.service';
import { Education } from '../modelos/education/education.model';
import { map } from 'rxjs';

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [],
  templateUrl: './education.component.html',
  styleUrl: './education.component.scss'
})
export class EducationComponent {
  educationList: Education[] = [];

  constructor(public educationService: EducationService) {
    this.educationService.getEducation().snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({ id: c.payload.doc.id, ...c.payload.doc.data() })
        )
      )
    ).subscribe(data => {
      this.educationList = data;
    });
  }
}
