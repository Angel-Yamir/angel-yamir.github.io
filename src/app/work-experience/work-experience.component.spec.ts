import { of } from 'rxjs';
import { WorkExperienceComponent } from './work-experience.component';
import { WorkExperienceService } from '../../services/work-experience-service/work-experience.service';

describe('WorkExperienceComponent', () => {
  let fakeWorkExperienceService: jasmine.SpyObj<WorkExperienceService>;

  const fakeChanges = [
    {
      payload: {
        doc: {
          id: '1',
          data: () => ({
            company: 'Innovogen',
            position: 'Desarrollador',
            location: 'Veracruz',
            startDate: '2023',
            endDate: 'Actualidad',
            accomplishments: ['Logro 1', 'Logro 2']
          })
        }
      }
    }
  ];

  beforeEach(() => {
    fakeWorkExperienceService = jasmine.createSpyObj('WorkExperienceService', ['getWorkExperience']);
    fakeWorkExperienceService.getWorkExperience.and.returnValue({
      snapshotChanges: () => of(fakeChanges)
    } as any);
  });

  it('should create', () => {
    const component = new WorkExperienceComponent(fakeWorkExperienceService);
    expect(component).toBeTruthy();
  });

  it('should load work experiences from the service on construction', () => {
    const component = new WorkExperienceComponent(fakeWorkExperienceService);
    expect(component.workExperiences.length).toBe(1);
    expect(component.workExperiences[0]).toEqual({
      id: '1',
      company: 'Innovogen',
      position: 'Desarrollador',
      location: 'Veracruz',
      startDate: '2023',
      endDate: 'Actualidad',
      accomplishments: ['Logro 1', 'Logro 2']
    });
  });

  it('should keep an empty list when there is no data', () => {
    fakeWorkExperienceService.getWorkExperience.and.returnValue({
      snapshotChanges: () => of([])
    } as any);
    const component = new WorkExperienceComponent(fakeWorkExperienceService);
    expect(component.workExperiences).toEqual([]);
  });
});
