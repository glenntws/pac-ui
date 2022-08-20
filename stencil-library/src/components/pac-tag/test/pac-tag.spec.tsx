import { newSpecPage } from '@stencil/core/testing';
import { PacTag } from '../pac-tag';

describe('pac-tag', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [PacTag],
      html: `<pac-tag></pac-tag>`,
    });
    expect(page.root).toEqualHtml(`
      <pac-tag>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </pac-tag>
    `);
  });
});
