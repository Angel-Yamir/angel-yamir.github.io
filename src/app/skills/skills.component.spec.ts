import { of } from 'rxjs';
import { SkillsComponent } from './skills.component';
import { SkillsService } from '../../services/skills-service/skills.service';

describe('SkillsComponent', () => {
  let fakeSkillsService: jasmine.SpyObj<SkillsService>;

  const fakeChanges = [
    { payload: { doc: { id: '1', data: () => ({ name: 'Angular' }) } } },
    { payload: { doc: { id: '2', data: () => ({ name: 'TypeScript' }) } } }
  ];

  beforeEach(() => {
    fakeSkillsService = jasmine.createSpyObj('SkillsService', ['getSkills']);
    fakeSkillsService.getSkills.and.returnValue({
      snapshotChanges: () => of(fakeChanges)
    } as any);
  });

  it('should create', () => {
    const component = new SkillsComponent(fakeSkillsService);
    expect(component).toBeTruthy();
  });

  it('should load skills from the service on construction', () => {
    const component = new SkillsComponent(fakeSkillsService);
    expect(component.skills.length).toBe(2);
    expect(component.skills[0]).toEqual({ id: '1', name: 'Angular' });
    expect(component.skills[1]).toEqual({ id: '2', name: 'TypeScript' });
  });

  it('should keep an empty list when there is no data', () => {
    fakeSkillsService.getSkills.and.returnValue({
      snapshotChanges: () => of([])
    } as any);
    const component = new SkillsComponent(fakeSkillsService);
    expect(component.skills).toEqual([]);
  });
});
