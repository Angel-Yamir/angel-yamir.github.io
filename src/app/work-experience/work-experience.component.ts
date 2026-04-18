import { Component } from '@angular/core';
import { WorkExperienceService } from "../../services/work-experience-service/work-experience.service";
import { WorkExperience } from '../modelos/work-experience/work-experience.model';
import { map } from 'rxjs';

@Component({
  selector: 'app-work-experience',
  standalone: true,
  imports: [],
  templateUrl: './work-experience.component.html',
  styleUrl: './work-experience.component.scss'
})
export class WorkExperienceComponent {
  workExperiences: WorkExperience[] = [];

  constructor(public workExperienceService: WorkExperienceService) {
    this.workExperienceService.getWorkExperience().snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({ id: c.payload.doc.id, ...c.payload.doc.data() })
        )
      )
    ).subscribe(data => {
      this.workExperiences = data;
      console.log(this.workExperiences);
    });
  }

}
