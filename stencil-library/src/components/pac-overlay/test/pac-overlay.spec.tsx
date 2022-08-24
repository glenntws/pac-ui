import { newSpecPage } from '@stencil/core/testing';
import { PacOverlay } from '../pac-overlay';

describe('pac-overlay', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [PacOverlay],
      html: `<pac-overlay></pac-overlay>`,
    });
    expect(page.root).toEqualHtml(`
      <pac-overlay>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </pac-overlay>
    `);
  });
});
