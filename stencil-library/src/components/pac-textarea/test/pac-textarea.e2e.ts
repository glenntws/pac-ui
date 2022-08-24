import { newE2EPage } from '@stencil/core/testing';

describe('pac-textarea', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<pac-textarea></pac-textarea>');

    const element = await page.find('pac-textarea');
    expect(element).toHaveClass('hydrated');
  });
});
