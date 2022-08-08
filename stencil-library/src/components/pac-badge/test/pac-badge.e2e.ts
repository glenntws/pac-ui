import { newE2EPage } from '@stencil/core/testing';

describe('pac-badge', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<pac-badge></pac-badge>');

    const element = await page.find('pac-badge');
    expect(element).toHaveClass('hydrated');
  });
});
