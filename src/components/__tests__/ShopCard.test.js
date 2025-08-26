import { render, screen } from '@testing-library/vue'
import ShopCard from '../ShopCard.vue'
import { describe, expect, it } from 'vitest'
import cake2 from '@/assets/images/cake2.png'


describe('component shop card', () => {

  it('should match with shop card details', () => {
    
    render(ShopCard, {
        props: {
            title: 'Banana Cake Tower',
            img: cake2,
            price: 100_000
        }
    })

    expect(screen.getByText('Banana Cake Tower')).toBeInTheDocument();
    expect(screen.getByAltText('Image for Banana Cake Tower')).toBeInTheDocument();
    expect(screen.getByTestId('test-price')).toHaveTextContent('₱100,000.00');
    expect(screen.getByTestId('link-more-details')).toBeInTheDocument()
  })
})

