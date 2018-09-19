import { CustomMaterialModule } from './material.module';

describe('MaterialModule', () => {
  let materialModule: CustomMaterialModule;

  beforeEach(() => {
    materialModule = new CustomMaterialModule();
  });

  it('should create an instance', () => {
    expect(materialModule).toBeTruthy();
  });
});
