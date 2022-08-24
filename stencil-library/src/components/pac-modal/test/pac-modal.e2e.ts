import { newE2EPage } from '@stencil/core/testing';

describe('pac-modal', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<pac-modal></pac-modal>');

    const element = await page.find('pac-modal');
    expect(element).toHaveClass('hydrated');
  });
});
