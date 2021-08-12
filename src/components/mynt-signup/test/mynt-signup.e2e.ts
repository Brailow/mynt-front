import { newE2EPage } from '@stencil/core/testing';

describe('mynt-signup', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<mynt-signup></mynt-signup>');

    const element = await page.find('mynt-signup');
    expect(element).toHaveClass('hydrated');
  });
});
