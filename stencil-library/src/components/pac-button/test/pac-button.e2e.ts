import { newE2EPage } from '@stencil/core/testing';

describe('pac-button', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<pac-button></pac-button>');

    const element = await page.find('pac-button');
    expect(element).toHaveClass('hydrated');
  });
});
