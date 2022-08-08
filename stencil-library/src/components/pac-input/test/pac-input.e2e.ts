import { newE2EPage } from '@stencil/core/testing';

describe('pac-input', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<pac-input></pac-input>');

    const element = await page.find('pac-input');
    expect(element).toHaveClass('hydrated');
  });
});
