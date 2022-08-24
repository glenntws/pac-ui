import { newE2EPage } from '@stencil/core/testing';

describe('pac-alert', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<pac-alert></pac-alert>');

    const element = await page.find('pac-alert');
    expect(element).toHaveClass('hydrated');
  });
});
