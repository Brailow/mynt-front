import { newSpecPage } from '@stencil/core/testing';
import { MyntSellAssetItem } from '../mynt-sell-asset-item';

describe('mynt-sell-asset-item', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [MyntSellAssetItem],
      html: `<mynt-sell-asset-item></mynt-sell-asset-item>`,
    });
    expect(page.root).toEqualHtml(`
      <mynt-sell-asset-item>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </mynt-sell-asset-item>
    `);
  });
});
