import { of } from 'rxjs';
import { CertificatesComponent } from './certificates.component';
import { CertificatesService } from '../../services/certificates-service/certificates.service';

describe('CertificatesComponent', () => {
  let fakeCertificatesService: jasmine.SpyObj<CertificatesService>;

  const fakeChanges = [
    { payload: { doc: { id: '1', data: () => ({ title: 'Angular Developer' }) } } },
    { payload: { doc: { id: '2', data: () => ({ title: 'Java Certification' }) } } }
  ];

  beforeEach(() => {
    fakeCertificatesService = jasmine.createSpyObj('CertificatesService', ['getCertificates']);
    fakeCertificatesService.getCertificates.and.returnValue({
      snapshotChanges: () => of(fakeChanges)
    } as any);
  });

  it('should create', () => {
    const component = new CertificatesComponent(fakeCertificatesService);
    expect(component).toBeTruthy();
  });

  it('should load certificates from the service on construction', () => {
    const component = new CertificatesComponent(fakeCertificatesService);
    expect(component.certificates.length).toBe(2);
    expect(component.certificates[0]).toEqual({ id: '1', title: 'Angular Developer' });
    expect(component.certificates[1]).toEqual({ id: '2', title: 'Java Certification' });
  });

  it('should keep an empty list when there is no data', () => {
    fakeCertificatesService.getCertificates.and.returnValue({
      snapshotChanges: () => of([])
    } as any);
    const component = new CertificatesComponent(fakeCertificatesService);
    expect(component.certificates).toEqual([]);
  });
});
