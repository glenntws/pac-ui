import { newSpecPage } from '@stencil/core/testing';
import { PacToggle } from '../pac-toggle';

describe('pac-toggle', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [PacToggle],
      html: `<pac-toggle></pac-toggle>`,
    });
    expect(page.root).toEqualHtml(`
      <pac-toggle>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </pac-toggle>
    `);
  });
});
