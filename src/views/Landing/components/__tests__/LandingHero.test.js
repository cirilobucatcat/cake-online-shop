import { render, screen } from '@testing-library/vue'
import LandingHero from '../LandingHero.vue'
import { describe, it } from 'vitest'

// @vitest-environment happy-dom

describe('component landing hero', () => {

  it('should match the hero page texts', () => {
    const { getByText } = render(LandingHero)
  
    getByText('Freshly Baked Cakes')
    getByText('Delivered to Your Doorstep')
    getByText('Indulge in handcrafted cakes made with love, perfect for every occasion.')
  })

  test('if the image element is in the page', () => {
    
    const { getByAltText } = render(LandingHero)
  
    getByAltText('Hero Master Caker')
  })
  
  test('if the image element source exists', () => {
    
    render(LandingHero)
  
    const image = screen.getByAltText('Hero Master Caker')
    expect(image).toBeTruthy();
  })
})

