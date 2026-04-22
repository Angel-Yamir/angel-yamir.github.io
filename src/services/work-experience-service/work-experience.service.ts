import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { WorkExperience } from '../../app/modelos/work-experience/work-experience.model';

@Injectable({
  providedIn: 'root'
})
export class WorkExperienceService {

  accesoWorkExperience = "work experience running";
  private dbPath = '/work-experience';
  workRef: AngularFirestoreCollection<WorkExperience>;

  constructor(private db: AngularFirestore) {
    this.workRef = db.collection(this.dbPath);
  }

  getWorkExperience(): AngularFirestoreCollection<WorkExperience> {
    return this.workRef;
  }
}
