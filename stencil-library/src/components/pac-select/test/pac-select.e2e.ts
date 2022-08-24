import { newE2EPage } from '@stencil/core/testing';

describe('pac-select', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<pac-select></pac-select>');

    const element = await page.find('pac-select');
    expect(element).toHaveClass('hydrated');
  });
});
