import { of } from 'rxjs';
import { HeaderComponent } from './header.component';
import { HeaderService } from '../../services/header-service/header.service';

describe('HeaderComponent', () => {
  let fakeHeaderService: jasmine.SpyObj<HeaderService>;

  const fakeChanges = [
    {
      payload: {
        doc: {
          id: 'h1',
          data: () => ({
            name: 'Angel Yamir',
            goalLife: 'Ser un gran desarrollador',
            photoUrl: 'photo.png',
            email: 'test@test.com',
            phoneNumber: '123456789',
            location: 'Veracruz',
            socialNetwork: 'linkedin.com/in/test'
          })
        }
      }
    }
  ];

  beforeEach(() => {
    fakeHeaderService = jasmine.createSpyObj('HeaderService', ['getHeader']);
    fakeHeaderService.getHeader.and.returnValue({
      snapshotChanges: () => of(fakeChanges)
    } as any);
  });

  it('should create', () => {
    const component = new HeaderComponent(fakeHeaderService);
    expect(component).toBeTruthy();
  });

  it('should load the header data from the service on construction', () => {
    const component = new HeaderComponent(fakeHeaderService);
    expect(component.header).toEqual({
      id: 'h1',
      name: 'Angel Yamir',
      goalLife: 'Ser un gran desarrollador',
      photoUrl: 'photo.png',
      email: 'test@test.com',
      phoneNumber: '123456789',
      location: 'Veracruz',
      socialNetwork: 'linkedin.com/in/test'
    });
  });
});
