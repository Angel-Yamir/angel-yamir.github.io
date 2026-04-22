import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./header/header.component";
import { CertificatesComponent } from "./certificates/certificates.component";
import { EducationComponent } from "./education/education.component";
import { InterestsComponent } from "./interests/interests.component";
import { LanguagesComponent } from "./languages/languages.component";
import { WorkExperienceComponent } from "./work-experience/work-experience.component";
import { SkillsComponent } from "./skills/skills.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, CertificatesComponent, EducationComponent, InterestsComponent, LanguagesComponent, WorkExperienceComponent, SkillsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'mycv';
}
