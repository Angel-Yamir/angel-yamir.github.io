import { Skill } from './skill.model';

describe('Skill model', () => {
  it('should create an instance with default values', () => {
    const skill = new Skill();
    expect(skill).toBeTruthy();
    expect(skill.name).toBe('');
    expect(skill.id).toBeUndefined();
  });
});
