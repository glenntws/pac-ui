import { newE2EPage } from '@stencil/core/testing';

describe('pac-graph-entity', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<pac-graph-entity></pac-graph-entity>');

    const element = await page.find('pac-graph-entity');
    expect(element).toHaveClass('hydrated');
  });
});
