import { InterestsService } from './interests.service';

describe('InterestsService', () => {
  let service: InterestsService;
  let fakeDb: any;
  let fakeCollectionRef: any;

  beforeEach(() => {
    fakeCollectionRef = { fakeRef: true };
    fakeDb = {
      collection: jasmine.createSpy('collection').and.returnValue(fakeCollectionRef)
    };
    service = new InterestsService(fakeDb);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should initialize interestsRef using the /interests path', () => {
    expect(fakeDb.collection).toHaveBeenCalledWith('/interests');
    expect(service.interestsRef).toBe(fakeCollectionRef);
  });

  it('getInterests should return the interests collection reference', () => {
    expect(service.getInterests()).toBe(fakeCollectionRef);
  });
});
