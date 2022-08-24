import { newE2EPage } from '@stencil/core/testing';

describe('pac-breadcrumbs', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<pac-breadcrumbs></pac-breadcrumbs>');

    const element = await page.find('pac-breadcrumbs');
    expect(element).toHaveClass('hydrated');
  });
});
