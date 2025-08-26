import type { Testimonial } from "./types";
import profile1 from '@/assets/images/profile1.png'
import profile2 from '@/assets/images/profile2.png'
import profile3 from '@/assets/images/profile3.png'

export const testimonials: Testimonial[] = [
    {
        name: 'Emma Rodriguez',
        position: 'Event Planner',
        message: 'MasterCaker never disappoints. Their cakes are not only visually stunning but absolutely delicious. I recommend them to all my clients.',
        img: profile1,
        containerClass: 'absolute top-0 left-[30%]'
    },
    {
        name: 'James Kim',
        position: 'Restaurant Manager',
        message: 'We order cakes from MasterCaker for all our staff birthdays. Their consistency and quality are unmatched.',
        img: profile2,
        containerClass: 'absolute top-50 right-[30%]'
    },
    {
        name: 'Sophia Lee',
        position: 'Bride',
        message: 'My wedding cake was a dream come true. Elegant, perfectly moist, and everyone asked where it was from!',
        img: profile3,
        containerClass: 'absolute top-100 left-[30%]'
    },
    {
        name: 'Anna Dela Cruz',
        position:'Mother of Two',
        message: 'I ordered for my son’s birthday, and the cake stole the show! It wasn’t just pretty; it was moist and delicious too. My kids now insist we get all our cakes here.',
        img: profile3,
        containerClass: 'absolute top-150 right-[30%]'
    }
]