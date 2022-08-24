import { newSpecPage } from '@stencil/core/testing';
import { PacModal } from '../pac-modal';

describe('pac-modal', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [PacModal],
      html: `<pac-modal></pac-modal>`,
    });
    expect(page.root).toEqualHtml(`
      <pac-modal>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </pac-modal>
    `);
  });
});
