import { render, screen } from '@testing-library/vue'
import LandingTestimonials from '../LandingTestimonials.vue'
import { describe, expect, it } from 'vitest'

describe('page section landing testimonial', () => {

  it('should match the testimonial page texts', () => {
    render(LandingTestimonials)
    
    expect(screen.getByText('Testimonials')).toBeInTheDocument()

    expect(screen.getByText('Emma Rodriguez')).toBeInTheDocument()
    expect(screen.getByText('Event Planner')).toBeInTheDocument()
    expect(screen.getByText('MasterCaker never disappoints. Their cakes are not only visually stunning but absolutely delicious. I recommend them to all my clients.')).toBeInTheDocument()

    expect(screen.getByText('James Kim')).toBeInTheDocument()
    expect(screen.getByText('Restaurant Manager')).toBeInTheDocument()
    expect(screen.getByText('We order cakes from MasterCaker for all our staff birthdays. Their consistency and quality are unmatched.')).toBeInTheDocument()
  })

  test('if the image element is in the page and the source exists', () => {
    render(LandingTestimonials)
    const testAltText = 'Testimonial cake image'
    expect(screen.getByAltText(testAltText)).toBeInTheDocument()
    expect(screen.getByAltText(testAltText)).toBeTruthy()

  })
})

