import { newE2EPage } from '@stencil/core/testing';

describe('pac-loading-ani', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<pac-loading-ani></pac-loading-ani>');

    const element = await page.find('pac-loading-ani');
    expect(element).toHaveClass('hydrated');
  });
});
