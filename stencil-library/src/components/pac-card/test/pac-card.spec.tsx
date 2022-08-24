import { newSpecPage } from '@stencil/core/testing';
import { PacCard } from '../pac-card';

describe('pac-card', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [PacCard],
      html: `<pac-card></pac-card>`,
    });
    expect(page.root).toEqualHtml(`
      <pac-card>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </pac-card>
    `);
  });
});
