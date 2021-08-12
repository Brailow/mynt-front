import { newSpecPage } from '@stencil/core/testing';
import { CreateCoin } from '../create-coin';

describe('create-coin', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [CreateCoin],
      html: `<create-coin></create-coin>`,
    });
    expect(page.root).toEqualHtml(`
      <create-coin>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </create-coin>
    `);
  });
});
