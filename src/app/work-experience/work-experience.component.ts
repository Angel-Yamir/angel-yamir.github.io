import { Component } from '@angular/core';
import { WorkExperienceService } from "../../services/work-experience-service/work-experience.service";

@Component({
  selector: 'app-work-experience',
  standalone: true,
  imports: [],
  templateUrl: './work-experience.component.html',
  styleUrl: './work-experience.component.scss'
})
export class WorkExperienceComponent {
  constructor(public workExperienceService: WorkExperienceService){
    console.log(this.workExperienceService);
  }

}
