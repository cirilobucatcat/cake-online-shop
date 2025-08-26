import { render, screen, within } from '@testing-library/vue';
import LandingFeatures from '../LandingFeatures.vue';
import { describe, expect, it } from 'vitest';

describe('page section landing featured cakes', () => {
    
  it('should match the feature cake section heading', () => {
    render(LandingFeatures);
    expect(screen.getByText('Featured Cakes')).toBeInTheDocument()
  });

  it('shoud match an item', () => {
    render(LandingFeatures);

    const cakeItems = screen.getAllByTestId('shop-card-item');

    expect(cakeItems[0]).toBeInTheDocument();
    expect(cakeItems[0]).toHaveTextContent('Classic Chocolate Truffle')
    expect(cakeItems[0]).toHaveTextContent('₱100.00')

    const button = within(cakeItems[0]).getByRole('button');
    expect(button).toBeInTheDocument()

  })
});
