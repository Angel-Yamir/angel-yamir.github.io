import { Component } from '@angular/core';
import { SkillsService } from "../../services/skills-service/skills.service";
import { Skill } from '../modelos/skill/skill.model';
import { map } from 'rxjs';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent {
  skills: Skill[] = [];

  constructor(public skillsService: SkillsService) {
    this.skillsService.getSkills().snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({ id: c.payload.doc.id, ...c.payload.doc.data() })
        )
      )
    ).subscribe(data => {
      this.skills = data;
    });
  }
}
