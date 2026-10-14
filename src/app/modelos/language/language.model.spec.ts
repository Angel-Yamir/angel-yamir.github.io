import { Language } from './language.model';

describe('Language model', () => {
  it('should create an instance with default values', () => {
    const language = new Language();
    expect(language).toBeTruthy();
    expect(language.language).toBe('');
    expect(language.id).toBeUndefined();
  });
});
