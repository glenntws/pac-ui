import { newSpecPage } from '@stencil/core/testing';
import { PacListItem } from '../pac-list-item';

describe('pac-list-item', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [PacListItem],
      html: `<pac-list-item></pac-list-item>`,
    });
    expect(page.root).toEqualHtml(`
      <pac-list-item>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </pac-list-item>
    `);
  });
});
