import { newE2EPage } from '@stencil/core/testing';

describe('pac-list-header', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<pac-list-header></pac-list-header>');

    const element = await page.find('pac-list-header');
    expect(element).toHaveClass('hydrated');
  });
});
