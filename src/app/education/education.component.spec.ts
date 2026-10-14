import { of } from 'rxjs';
import { EducationComponent } from './education.component';
import { EducationService } from '../../services/education-service/education.service';

describe('EducationComponent', () => {
  let fakeEducationService: jasmine.SpyObj<EducationService>;

  const fakeChanges = [
    {
      payload: {
        doc: {
          id: '1',
          data: () => ({ school: 'USBI', title: 'Ingenieria', startDate: '2020', endDate: '2024' })
        }
      }
    }
  ];

  beforeEach(() => {
    fakeEducationService = jasmine.createSpyObj('EducationService', ['getEducation']);
    fakeEducationService.getEducation.and.returnValue({
      snapshotChanges: () => of(fakeChanges)
    } as any);
  });

  it('should create', () => {
    const component = new EducationComponent(fakeEducationService);
    expect(component).toBeTruthy();
  });

  it('should load the education list from the service on construction', () => {
    const component = new EducationComponent(fakeEducationService);
    expect(component.educationList.length).toBe(1);
    expect(component.educationList[0]).toEqual({
      id: '1',
      school: 'USBI',
      title: 'Ingenieria',
      startDate: '2020',
      endDate: '2024'
    });
  });

  it('should keep an empty list when there is no data', () => {
    fakeEducationService.getEducation.and.returnValue({
      snapshotChanges: () => of([])
    } as any);
    const component = new EducationComponent(fakeEducationService);
    expect(component.educationList).toEqual([]);
  });
});
