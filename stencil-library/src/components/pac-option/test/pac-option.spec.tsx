import { newSpecPage } from '@stencil/core/testing';
import { PacOption } from '../pac-option';

describe('pac-option', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [PacOption],
      html: `<pac-option></pac-option>`,
    });
    expect(page.root).toEqualHtml(`
      <pac-option>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </pac-option>
    `);
  });
});
