import { newSpecPage } from '@stencil/core/testing';
import { PacGraph } from '../pac-graph';

describe('pac-graph', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [PacGraph],
      html: `<pac-graph></pac-graph>`,
    });
    expect(page.root).toEqualHtml(`
      <pac-graph>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </pac-graph>
    `);
  });
});
