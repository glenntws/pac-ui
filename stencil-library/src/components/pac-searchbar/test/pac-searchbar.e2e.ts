import { newE2EPage } from '@stencil/core/testing';

describe('pac-searchbar', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<pac-searchbar></pac-searchbar>');

    const element = await page.find('pac-searchbar');
    expect(element).toHaveClass('hydrated');
  });
});
