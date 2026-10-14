import { WorkExperience } from './work-experience.model';

describe('WorkExperience model', () => {
  it('should create an instance with default values', () => {
    const workExperience = new WorkExperience();
    expect(workExperience).toBeTruthy();
    expect(workExperience.company).toBe('');
    expect(workExperience.position).toBe('');
    expect(workExperience.location).toBe('');
    expect(workExperience.startDate).toBe('');
    expect(workExperience.endDate).toBe('');
    expect(workExperience.accomplishments).toEqual([]);
    expect(workExperience.id).toBeUndefined();
  });
});
