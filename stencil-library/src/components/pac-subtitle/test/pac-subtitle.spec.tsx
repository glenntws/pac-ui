import { newSpecPage } from '@stencil/core/testing';
import { PacSubtitle } from '../pac-subtitle';

describe('pac-subtitle', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [PacSubtitle],
      html: `<pac-subtitle></pac-subtitle>`,
    });
    expect(page.root).toEqualHtml(`
      <pac-subtitle>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </pac-subtitle>
    `);
  });
});
