import { newSpecPage } from '@stencil/core/testing';
import { PacSidebar } from '../pac-sidebar';

describe('pac-sidebar', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [PacSidebar],
      html: `<pac-sidebar></pac-sidebar>`,
    });
    expect(page.root).toEqualHtml(`
      <pac-sidebar>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </pac-sidebar>
    `);
  });
});
