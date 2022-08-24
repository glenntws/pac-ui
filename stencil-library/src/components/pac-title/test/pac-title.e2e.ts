import { newE2EPage } from '@stencil/core/testing';

describe('pac-title', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<pac-title></pac-title>');

    const element = await page.find('pac-title');
    expect(element).toHaveClass('hydrated');
  });
});
