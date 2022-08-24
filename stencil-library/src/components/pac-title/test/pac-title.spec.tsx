import { newSpecPage } from '@stencil/core/testing';
import { PacTitle } from '../pac-title';

describe('pac-title', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [PacTitle],
      html: `<pac-title></pac-title>`,
    });
    expect(page.root).toEqualHtml(`
      <pac-title>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </pac-title>
    `);
  });
});
