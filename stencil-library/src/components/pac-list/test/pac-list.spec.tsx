import { newSpecPage } from '@stencil/core/testing';
import { PacList } from '../pac-list';

describe('pac-list', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [PacList],
      html: `<pac-list></pac-list>`,
    });
    expect(page.root).toEqualHtml(`
      <pac-list>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </pac-list>
    `);
  });
});
