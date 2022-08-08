import { newSpecPage } from '@stencil/core/testing';
import { PacStatus } from '../pac-status';

describe('pac-status', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [PacStatus],
      html: `<pac-status></pac-status>`,
    });
    expect(page.root).toEqualHtml(`
      <pac-status>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </pac-status>
    `);
  });
});
