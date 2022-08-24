import { newSpecPage } from '@stencil/core/testing';
import { PacContainer } from '../pac-container';

describe('pac-container', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [PacContainer],
      html: `<pac-container></pac-container>`,
    });
    expect(page.root).toEqualHtml(`
      <pac-container>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </pac-container>
    `);
  });
});
