import { newE2EPage } from '@stencil/core/testing';

describe('pac-label', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<pac-label></pac-label>');

    const element = await page.find('pac-label');
    expect(element).toHaveClass('hydrated');
  });
});
