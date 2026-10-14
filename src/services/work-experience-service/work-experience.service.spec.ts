import { WorkExperienceService } from './work-experience.service';

describe('WorkExperienceService', () => {
  let service: WorkExperienceService;
  let fakeDb: any;
  let fakeCollectionRef: any;

  beforeEach(() => {
    fakeCollectionRef = { fakeRef: true };
    fakeDb = {
      collection: jasmine.createSpy('collection').and.returnValue(fakeCollectionRef)
    };
    service = new WorkExperienceService(fakeDb);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should set the accesoWorkExperience message', () => {
    expect(service.accesoWorkExperience).toBe('work experience running');
  });

  it('should initialize workRef using the /work-experience path', () => {
    expect(fakeDb.collection).toHaveBeenCalledWith('/work-experience');
    expect(service.workRef).toBe(fakeCollectionRef);
  });

  it('getWorkExperience should return the work experience collection reference', () => {
    expect(service.getWorkExperience()).toBe(fakeCollectionRef);
  });
});
