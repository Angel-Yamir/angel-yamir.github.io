import { Interest } from './interest.model';

describe('Interest model', () => {
  it('should create an instance with default values', () => {
    const interest = new Interest();
    expect(interest).toBeTruthy();
    expect(interest.name).toBe('');
    expect(interest.id).toBeUndefined();
  });
});
