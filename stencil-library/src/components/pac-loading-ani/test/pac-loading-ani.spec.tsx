import { newSpecPage } from '@stencil/core/testing';
import { PacLoadingAni } from '../pac-loading-ani';

describe('pac-loading-ani', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [PacLoadingAni],
      html: `<pac-loading-ani></pac-loading-ani>`,
    });
    expect(page.root).toEqualHtml(`
      <pac-loading-ani>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </pac-loading-ani>
    `);
  });
});
