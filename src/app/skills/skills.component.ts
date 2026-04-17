import { Component } from '@angular/core';
import { SkillsService } from "../../services/skills-service/skills.service";

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent {
  constructor (public skillsService: SkillsService){
    console.log(this.skillsService);
  }
}
