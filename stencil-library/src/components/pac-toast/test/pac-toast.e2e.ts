import { newE2EPage } from '@stencil/core/testing';

describe('pac-toast', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<pac-toast></pac-toast>');

    const element = await page.find('pac-toast');
    expect(element).toHaveClass('hydrated');
  });
});
