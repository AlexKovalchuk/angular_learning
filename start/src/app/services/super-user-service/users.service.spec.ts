import { TestBed } from '@angular/core/testing';

import { SuperUsersService } from './super-users.service';

describe('UsersService', () => {
  let service: SuperUsersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UsersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
