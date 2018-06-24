import { DinamicComponentsModule } from './dinamic-components.module';

describe('DinamicComponentsModule', () => {
  let dinamicComponentsModule: DinamicComponentsModule;

  beforeEach(() => {
    dinamicComponentsModule = new DinamicComponentsModule();
  });

  it('should create an instance', () => {
    expect(dinamicComponentsModule).toBeTruthy();
  });
});
