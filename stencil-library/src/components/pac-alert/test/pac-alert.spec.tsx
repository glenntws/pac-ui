import { newSpecPage } from '@stencil/core/testing';
import { PacAlert } from '../pac-alert';

describe('pac-alert', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [PacAlert],
      html: `<pac-alert></pac-alert>`,
    });
    expect(page.root).toEqualHtml(`
      <pac-alert>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </pac-alert>
    `);
  });
});
