import { TestBed } from '@angular/core/testing';

import { ServicioDeBuscarService } from './servicio-de-buscar.service';

describe('ServicioDeBuscarService', () => {
  let service: ServicioDeBuscarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicioDeBuscarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
