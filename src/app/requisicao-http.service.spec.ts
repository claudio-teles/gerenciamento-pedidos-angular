import { TestBed } from '@angular/core/testing';

import { RequisicaoHttpService } from './requisicao-http.service';

describe('RequisicaoHttpService', () => {
  let service: RequisicaoHttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RequisicaoHttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
