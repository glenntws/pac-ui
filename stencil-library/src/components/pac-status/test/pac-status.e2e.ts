import { newE2EPage } from '@stencil/core/testing';

describe('pac-status', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<pac-status></pac-status>');

    const element = await page.find('pac-status');
    expect(element).toHaveClass('hydrated');
  });
});
