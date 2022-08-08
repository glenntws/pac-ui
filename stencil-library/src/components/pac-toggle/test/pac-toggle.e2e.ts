import { newE2EPage } from '@stencil/core/testing';

describe('pac-toggle', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<pac-toggle></pac-toggle>');

    const element = await page.find('pac-toggle');
    expect(element).toHaveClass('hydrated');
  });
});
