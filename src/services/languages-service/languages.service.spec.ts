import { LanguagesService } from './languages.service';

describe('LanguagesService', () => {
  let service: LanguagesService;
  let fakeDb: any;
  let fakeCollectionRef: any;

  beforeEach(() => {
    fakeCollectionRef = { fakeRef: true };
    fakeDb = {
      collection: jasmine.createSpy('collection').and.returnValue(fakeCollectionRef)
    };
    service = new LanguagesService(fakeDb);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should initialize languagesRef using the /languages path', () => {
    expect(fakeDb.collection).toHaveBeenCalledWith('/languages');
    expect(service.languagesRef).toBe(fakeCollectionRef);
  });

  it('getLanguages should return the languages collection reference', () => {
    expect(service.getLanguages()).toBe(fakeCollectionRef);
  });
});
