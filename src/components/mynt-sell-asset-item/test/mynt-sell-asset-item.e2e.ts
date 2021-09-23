import { newE2EPage } from '@stencil/core/testing';

describe('mynt-sell-asset-item', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<mynt-sell-asset-item></mynt-sell-asset-item>');

    const element = await page.find('mynt-sell-asset-item');
    expect(element).toHaveClass('hydrated');
  });
});
