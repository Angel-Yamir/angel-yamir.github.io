import { SkillsService } from './skills.service';

describe('SkillsService', () => {
  let service: SkillsService;
  let fakeDb: any;
  let fakeCollectionRef: any;

  beforeEach(() => {
    fakeCollectionRef = { fakeRef: true };
    fakeDb = {
      collection: jasmine.createSpy('collection').and.returnValue(fakeCollectionRef)
    };
    service = new SkillsService(fakeDb);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should initialize skillsRef using the /skills path', () => {
    expect(fakeDb.collection).toHaveBeenCalledWith('/skills');
    expect(service.skillsRef).toBe(fakeCollectionRef);
  });

  it('getSkills should return the skills collection reference', () => {
    expect(service.getSkills()).toBe(fakeCollectionRef);
  });
});
