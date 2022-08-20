import { newE2EPage } from '@stencil/core/testing';

describe('pac-list-item', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<pac-list-item></pac-list-item>');

    const element = await page.find('pac-list-item');
    expect(element).toHaveClass('hydrated');
  });
});
