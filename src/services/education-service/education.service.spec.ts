import { EducationService } from './education.service';

describe('EducationService', () => {
  let service: EducationService;
  let fakeDb: any;
  let fakeCollectionRef: any;

  beforeEach(() => {
    fakeCollectionRef = { fakeRef: true };
    fakeDb = {
      collection: jasmine.createSpy('collection').and.returnValue(fakeCollectionRef)
    };
    service = new EducationService(fakeDb);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should initialize educationRef using the /education path', () => {
    expect(fakeDb.collection).toHaveBeenCalledWith('/education');
    expect(service.educationRef).toBe(fakeCollectionRef);
  });

  it('getEducation should return the education collection reference', () => {
    expect(service.getEducation()).toBe(fakeCollectionRef);
  });
});
