import { newSpecPage } from '@stencil/core/testing';
import { PacInput } from '../pac-input';

describe('pac-input', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [PacInput],
      html: `<pac-input></pac-input>`,
    });
    expect(page.root).toEqualHtml(`
      <pac-input>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </pac-input>
    `);
  });
});
