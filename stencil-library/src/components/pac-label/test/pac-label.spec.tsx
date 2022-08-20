import { newSpecPage } from '@stencil/core/testing';
import { PacLabel } from '../pac-label';

describe('pac-label', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [PacLabel],
      html: `<pac-label></pac-label>`,
    });
    expect(page.root).toEqualHtml(`
      <pac-label>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </pac-label>
    `);
  });
});
