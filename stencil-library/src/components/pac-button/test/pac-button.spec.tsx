import { newSpecPage } from '@stencil/core/testing';
import { PacButton } from '../pac-button';

describe('pac-button', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [PacButton],
      html: `<pac-button></pac-button>`,
    });
    expect(page.root).toEqualHtml(`
      <pac-button>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </pac-button>
    `);
  });
});
