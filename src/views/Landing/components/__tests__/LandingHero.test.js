import { render } from '@testing-library/vue'
import LandingHero from '../LandingHero.vue'

test('it should match the hero page texts', () => {
  
  const { getByText } = render(LandingHero)

  getByText('Freshly Baked Cakes, Delivered to Your Doorstep')
  getByText('Indulge in handcrafted cakes made with love, perfect for every occasion.')
  getByText('Shop Cakes Now')

})
