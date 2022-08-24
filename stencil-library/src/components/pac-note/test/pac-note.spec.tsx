import { newSpecPage } from '@stencil/core/testing';
import { PacNote } from '../pac-note';

describe('pac-note', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [PacNote],
      html: `<pac-note></pac-note>`,
    });
    expect(page.root).toEqualHtml(`
      <pac-note>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </pac-note>
    `);
  });
});
