import { newE2EPage } from '@stencil/core/testing';

describe('pac-option', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<pac-option></pac-option>');

    const element = await page.find('pac-option');
    expect(element).toHaveClass('hydrated');
  });
});
