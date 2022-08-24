import { newSpecPage } from '@stencil/core/testing';
import { PacProgressBar } from '../pac-progress-bar';

describe('pac-progress-bar', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [PacProgressBar],
      html: `<pac-progress-bar></pac-progress-bar>`,
    });
    expect(page.root).toEqualHtml(`
      <pac-progress-bar>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </pac-progress-bar>
    `);
  });
});
