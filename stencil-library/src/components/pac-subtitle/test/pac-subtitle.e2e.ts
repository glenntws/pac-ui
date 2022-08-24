import { newE2EPage } from '@stencil/core/testing';

describe('pac-subtitle', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<pac-subtitle></pac-subtitle>');

    const element = await page.find('pac-subtitle');
    expect(element).toHaveClass('hydrated');
  });
});
