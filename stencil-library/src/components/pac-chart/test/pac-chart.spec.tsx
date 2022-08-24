import { newSpecPage } from '@stencil/core/testing';
import { PacChart } from '../pac-chart';

describe('pac-chart', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [PacChart],
      html: `<pac-chart></pac-chart>`,
    });
    expect(page.root).toEqualHtml(`
      <pac-chart>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </pac-chart>
    `);
  });
});
