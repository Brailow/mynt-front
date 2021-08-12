import { newE2EPage } from '@stencil/core/testing';

describe('create-coin', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<create-coin></create-coin>');

    const element = await page.find('create-coin');
    expect(element).toHaveClass('hydrated');
  });
});
