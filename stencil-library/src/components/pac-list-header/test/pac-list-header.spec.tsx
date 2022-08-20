import { newSpecPage } from '@stencil/core/testing';
import { PacListHeader } from '../pac-list-header';

describe('pac-list-header', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [PacListHeader],
      html: `<pac-list-header></pac-list-header>`,
    });
    expect(page.root).toEqualHtml(`
      <pac-list-header>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </pac-list-header>
    `);
  });
});
