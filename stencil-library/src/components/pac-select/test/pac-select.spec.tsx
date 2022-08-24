import { newSpecPage } from '@stencil/core/testing';
import { PacSelect } from '../pac-select';

describe('pac-select', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [PacSelect],
      html: `<pac-select></pac-select>`,
    });
    expect(page.root).toEqualHtml(`
      <pac-select>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </pac-select>
    `);
  });
});
