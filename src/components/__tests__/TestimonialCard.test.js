import { render, screen } from '@testing-library/vue'
import TestimonialCard from '../TestimonialCard.vue'
import { describe, expect, it } from 'vitest'
import testImg from '@/assets/images/profile3.png'

describe('component testimonial card', () => {

  it('should match with card details', () => {
    
    render(TestimonialCard, {
        props: {
            name: 'Maria Ozawa',
            position: 'Graphic Artist',
            message: 'We order cakes from MasterCaker for all our staff birthdays. Their consistency and quality are unmatched.',
            img: testImg
        }
    })

    expect(screen.getByText('Maria Ozawa')).toBeInTheDocument();
    expect(screen.getByText('Graphic Artist')).toBeInTheDocument();
    expect(screen.getByText('We order cakes from MasterCaker for all our staff birthdays. Their consistency and quality are unmatched.')).toBeInTheDocument();
    expect(screen.getByAltText("Maria Ozawa's profile picture")).toBeInTheDocument();

  })
})

