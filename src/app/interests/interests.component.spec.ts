import { of } from 'rxjs';
import { InterestsComponent } from './interests.component';
import { InterestsService } from '../../services/interests-service/interests.service';

describe('InterestsComponent', () => {
  let fakeInterestsService: jasmine.SpyObj<InterestsService>;

  const fakeChanges = [
    { payload: { doc: { id: '1', data: () => ({ name: 'Ajedrez' }) } } },
    { payload: { doc: { id: '2', data: () => ({ name: 'Programacion' }) } } }
  ];

  beforeEach(() => {
    fakeInterestsService = jasmine.createSpyObj('InterestsService', ['getInterests']);
    fakeInterestsService.getInterests.and.returnValue({
      snapshotChanges: () => of(fakeChanges)
    } as any);
  });

  it('should create', () => {
    const component = new InterestsComponent(fakeInterestsService);
    expect(component).toBeTruthy();
  });

  it('should load interests from the service on construction', () => {
    const component = new InterestsComponent(fakeInterestsService);
    expect(component.interests.length).toBe(2);
    expect(component.interests[0]).toEqual({ id: '1', name: 'Ajedrez' });
    expect(component.interests[1]).toEqual({ id: '2', name: 'Programacion' });
  });

  it('should keep an empty list when there is no data', () => {
    fakeInterestsService.getInterests.and.returnValue({
      snapshotChanges: () => of([])
    } as any);
    const component = new InterestsComponent(fakeInterestsService);
    expect(component.interests).toEqual([]);
  });
});
