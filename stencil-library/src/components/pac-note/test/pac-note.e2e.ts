import { newE2EPage } from '@stencil/core/testing';

describe('pac-note', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<pac-note></pac-note>');

    const element = await page.find('pac-note');
    expect(element).toHaveClass('hydrated');
  });
});
