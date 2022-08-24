import { newE2EPage } from '@stencil/core/testing';

describe('pac-card', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<pac-card></pac-card>');

    const element = await page.find('pac-card');
    expect(element).toHaveClass('hydrated');
  });
});
