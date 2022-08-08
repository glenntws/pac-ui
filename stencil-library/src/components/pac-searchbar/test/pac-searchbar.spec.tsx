import { newSpecPage } from '@stencil/core/testing';
import { PacSearchbar } from '../pac-searchbar';

describe('pac-searchbar', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [PacSearchbar],
      html: `<pac-searchbar></pac-searchbar>`,
    });
    expect(page.root).toEqualHtml(`
      <pac-searchbar>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </pac-searchbar>
    `);
  });
});
