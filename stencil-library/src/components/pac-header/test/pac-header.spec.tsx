import { newSpecPage } from '@stencil/core/testing';
import { PacHeader } from '../pac-header';

describe('pac-header', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [PacHeader],
      html: `<pac-header></pac-header>`,
    });
    expect(page.root).toEqualHtml(`
      <pac-header>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </pac-header>
    `);
  });
});
