import { CertificatesService } from './certificates.service';

describe('CertificatesService', () => {
  let service: CertificatesService;
  let fakeDb: any;
  let fakeCollectionRef: any;

  beforeEach(() => {
    fakeCollectionRef = { fakeRef: true };
    fakeDb = {
      collection: jasmine.createSpy('collection').and.returnValue(fakeCollectionRef)
    };
    service = new CertificatesService(fakeDb);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should initialize certificatesRef using the /certificates path', () => {
    expect(fakeDb.collection).toHaveBeenCalledWith('/certificates');
    expect(service.certificatesRef).toBe(fakeCollectionRef);
  });

  it('getCertificates should return the certificates collection reference', () => {
    expect(service.getCertificates()).toBe(fakeCollectionRef);
  });
});
