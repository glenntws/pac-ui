import { newE2EPage } from '@stencil/core/testing';

describe('pac-header', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<pac-header></pac-header>');

    const element = await page.find('pac-header');
    expect(element).toHaveClass('hydrated');
  });
});
