import { Header } from './header.model';

describe('Header model', () => {
  it('should create an instance with default values', () => {
    const header = new Header();
    expect(header).toBeTruthy();
    expect(header.name).toBe('');
    expect(header.goalLife).toBe('');
    expect(header.photoUrl).toBe('');
    expect(header.email).toBe('');
    expect(header.phoneNumber).toBe('');
    expect(header.location).toBe('');
    expect(header.socialNetwork).toBe('');
    expect(header.id).toBeUndefined();
  });
});
