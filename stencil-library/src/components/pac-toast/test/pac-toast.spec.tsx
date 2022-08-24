import { newSpecPage } from '@stencil/core/testing';
import { PacToast } from '../pac-toast';

describe('pac-toast', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [PacToast],
      html: `<pac-toast></pac-toast>`,
    });
    expect(page.root).toEqualHtml(`
      <pac-toast>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </pac-toast>
    `);
  });
});
