import { newSpecPage } from '@stencil/core/testing';
import { PacGraphEntity } from '../pac-graph-entity';

describe('pac-graph-entity', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [PacGraphEntity],
      html: `<pac-graph-entity></pac-graph-entity>`,
    });
    expect(page.root).toEqualHtml(`
      <pac-graph-entity>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </pac-graph-entity>
    `);
  });
});
