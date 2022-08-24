import { newSpecPage } from '@stencil/core/testing';
import { PacTextarea } from '../pac-textarea';

describe('pac-textarea', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [PacTextarea],
      html: `<pac-textarea></pac-textarea>`,
    });
    expect(page.root).toEqualHtml(`
      <pac-textarea>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </pac-textarea>
    `);
  });
});
