import { of } from 'rxjs';
import { LanguagesComponent } from './languages.component';
import { LanguagesService } from '../../services/languages-service/languages.service';

describe('LanguagesComponent', () => {
  let fakeLanguagesService: jasmine.SpyObj<LanguagesService>;

  const fakeChanges = [
    { payload: { doc: { id: '1', data: () => ({ language: 'Espanol' }) } } },
    { payload: { doc: { id: '2', data: () => ({ language: 'Ingles' }) } } }
  ];

  beforeEach(() => {
    fakeLanguagesService = jasmine.createSpyObj('LanguagesService', ['getLanguages']);
    fakeLanguagesService.getLanguages.and.returnValue({
      snapshotChanges: () => of(fakeChanges)
    } as any);
  });

  it('should create', () => {
    const component = new LanguagesComponent(fakeLanguagesService);
    expect(component).toBeTruthy();
  });

  it('should load languages from the service on construction', () => {
    const component = new LanguagesComponent(fakeLanguagesService);
    expect(component.languages.length).toBe(2);
    expect(component.languages[0]).toEqual({ id: '1', language: 'Espanol' });
    expect(component.languages[1]).toEqual({ id: '2', language: 'Ingles' });
  });

  it('should keep an empty list when there is no data', () => {
    fakeLanguagesService.getLanguages.and.returnValue({
      snapshotChanges: () => of([])
    } as any);
    const component = new LanguagesComponent(fakeLanguagesService);
    expect(component.languages).toEqual([]);
  });
});
