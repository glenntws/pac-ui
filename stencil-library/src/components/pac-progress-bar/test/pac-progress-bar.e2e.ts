import { newE2EPage } from '@stencil/core/testing';

describe('pac-progress-bar', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<pac-progress-bar></pac-progress-bar>');

    const element = await page.find('pac-progress-bar');
    expect(element).toHaveClass('hydrated');
  });
});
