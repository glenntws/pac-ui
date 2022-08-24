import { newE2EPage } from '@stencil/core/testing';

describe('pac-breadcrumb', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<pac-breadcrumb></pac-breadcrumb>');

    const element = await page.find('pac-breadcrumb');
    expect(element).toHaveClass('hydrated');
  });
});
