import { ButtonSharedModule } from './button-shared.module';

describe('ButtonSharedModule', () => {
  let buttonSharedModule: ButtonSharedModule;

  beforeEach(() => {
    buttonSharedModule = new ButtonSharedModule();
  });

  it('should create an instance', () => {
    expect(buttonSharedModule).toBeTruthy();
  });
});
