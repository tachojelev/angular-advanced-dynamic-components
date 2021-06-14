import { DynamicHostDirective } from './dynamic-host.directive';

describe('DynamicHostDirective', () => {
  it('should create an instance', () => {
    const directive = new DynamicHostDirective(null);
    expect(directive).toBeTruthy();
  });
});
