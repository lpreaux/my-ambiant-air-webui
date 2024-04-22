import { TestBed } from '@angular/core/testing';
import { ResolveFn } from '@angular/router';

import { threadResolver } from './thread.resolver';

describe('threadResolver', () => {
  const executeResolver: ResolveFn<boolean> = (...resolverParameters) => 
      TestBed.runInInjectionContext(() => threadResolver(...resolverParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeResolver).toBeTruthy();
  });
});
