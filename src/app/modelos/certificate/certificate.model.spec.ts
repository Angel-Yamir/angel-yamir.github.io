import { Certificate } from './certificate.model';

describe('Certificate model', () => {
  it('should create an instance with default values', () => {
    const certificate = new Certificate();
    expect(certificate).toBeTruthy();
    expect(certificate.title).toBe('');
    expect(certificate.id).toBeUndefined();
  });
});
