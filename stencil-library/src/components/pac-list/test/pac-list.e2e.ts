import { newE2EPage } from '@stencil/core/testing';

describe('pac-list', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<pac-list></pac-list>');

    const element = await page.find('pac-list');
    expect(element).toHaveClass('hydrated');
  });
});
