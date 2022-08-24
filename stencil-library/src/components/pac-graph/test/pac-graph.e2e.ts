import { newE2EPage } from '@stencil/core/testing';

describe('pac-graph', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<pac-graph></pac-graph>');

    const element = await page.find('pac-graph');
    expect(element).toHaveClass('hydrated');
  });
});
