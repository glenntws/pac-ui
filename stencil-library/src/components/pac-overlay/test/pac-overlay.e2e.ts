import { newE2EPage } from '@stencil/core/testing';

describe('pac-overlay', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<pac-overlay></pac-overlay>');

    const element = await page.find('pac-overlay');
    expect(element).toHaveClass('hydrated');
  });
});
