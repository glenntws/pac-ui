import { newE2EPage } from '@stencil/core/testing';

describe('pac-chart', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<pac-chart></pac-chart>');

    const element = await page.find('pac-chart');
    expect(element).toHaveClass('hydrated');
  });
});
