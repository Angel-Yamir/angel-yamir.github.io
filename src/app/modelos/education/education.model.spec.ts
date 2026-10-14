import { Education } from './education.model';

describe('Education model', () => {
  it('should create an instance with default values', () => {
    const education = new Education();
    expect(education).toBeTruthy();
    expect(education.endDate).toBe('');
    expect(education.school).toBe('');
    expect(education.startDate).toBe('');
    expect(education.title).toBe('');
    expect(education.id).toBeUndefined();
  });
});
