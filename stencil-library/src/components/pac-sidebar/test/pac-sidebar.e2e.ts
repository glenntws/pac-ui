import { newE2EPage } from '@stencil/core/testing';

describe('pac-sidebar', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<pac-sidebar></pac-sidebar>');

    const element = await page.find('pac-sidebar');
    expect(element).toHaveClass('hydrated');
  });
});
