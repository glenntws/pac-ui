import { newSpecPage } from '@stencil/core/testing';
import { PacBadge } from '../pac-badge';

describe('pac-badge', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [PacBadge],
      html: `<pac-badge></pac-badge>`,
    });
    expect(page.root).toEqualHtml(`
      <pac-badge>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </pac-badge>
    `);
  });
});
