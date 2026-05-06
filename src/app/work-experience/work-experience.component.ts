import { Component } from '@angular/core';
import { WorkExperienceService } from "../../services/work-experience-service/work-experience.service";
import { WorkExperience } from '../modelos/work-experience/work-experience.model';
import { map } from 'rxjs';
import { CommonModule } from '@angular/common'; // Importante para standalone si usas pipes o directivas extra

@Component({
  selector: 'app-work-experience',
  standalone: true,
  imports: [CommonModule], // Añadido CommonModule por buena práctica
  templateUrl: './work-experience.component.html',
  styleUrl: './work-experience.component.scss'
})
export class WorkExperienceComponent {
  workExperiences: WorkExperience[] = [];

  constructor(public workExperienceService: WorkExperienceService) {
    // Nota: Asegúrate que el método se llame getWorkExperience() o getWorkExperiences() 
    // según lo tengas definido en tu servicio.
    this.workExperienceService.getWorkExperience().snapshotChanges().pipe(
      map(changes =>
        changes.map(c => {
          const data = c.payload.doc.data() as WorkExperience;
          const id = c.payload.doc.id;
          return { id, ...data };
        })
      )
    ).subscribe(data => {
      this.workExperiences = data;
      console.log('Datos cargados:', this.workExperiences);
    });
  }
}