import { newE2EPage } from '@stencil/core/testing';

describe('pac-container', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<pac-container></pac-container>');

    const element = await page.find('pac-container');
    expect(element).toHaveClass('hydrated');
  });
});
