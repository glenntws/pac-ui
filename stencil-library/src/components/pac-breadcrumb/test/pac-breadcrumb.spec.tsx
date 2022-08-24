import { newSpecPage } from '@stencil/core/testing';
import { PacBreadcrumb } from '../pac-breadcrumb';

describe('pac-breadcrumb', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [PacBreadcrumb],
      html: `<pac-breadcrumb></pac-breadcrumb>`,
    });
    expect(page.root).toEqualHtml(`
      <pac-breadcrumb>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </pac-breadcrumb>
    `);
  });
});
