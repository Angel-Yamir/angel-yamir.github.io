import { HeaderService } from './header.service';

describe('HeaderService', () => {
  let service: HeaderService;
  let fakeDb: any;
  let fakeCollectionRef: any;

  beforeEach(() => {
    fakeCollectionRef = { fakeRef: true };
    fakeDb = {
      collection: jasmine.createSpy('collection').and.returnValue(fakeCollectionRef)
    };
    service = new HeaderService(fakeDb);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should set the accesoHeader message', () => {
    expect(service.accesoHeader).toBe('header service running...');
  });

  it('should initialize headerRef using the /header path', () => {
    expect(fakeDb.collection).toHaveBeenCalledWith('/header');
    expect(service.headerRef).toBe(fakeCollectionRef);
  });

  it('getHeader should return the header collection reference', () => {
    expect(service.getHeader()).toBe(fakeCollectionRef);
  });
});
