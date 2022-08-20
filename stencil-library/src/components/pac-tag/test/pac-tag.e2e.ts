import { newE2EPage } from '@stencil/core/testing';

describe('pac-tag', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<pac-tag></pac-tag>');

    const element = await page.find('pac-tag');
    expect(element).toHaveClass('hydrated');
  });
});
