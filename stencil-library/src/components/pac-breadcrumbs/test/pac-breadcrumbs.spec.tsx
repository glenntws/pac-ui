import { newSpecPage } from '@stencil/core/testing';
import { PacBreadcrumbs } from '../pac-breadcrumbs';

describe('pac-breadcrumbs', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [PacBreadcrumbs],
      html: `<pac-breadcrumbs></pac-breadcrumbs>`,
    });
    expect(page.root).toEqualHtml(`
      <pac-breadcrumbs>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </pac-breadcrumbs>
    `);
  });
});
