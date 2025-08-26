import type { SVGAttributes } from "vue";

export type WaveBlobProps = { 
    svgClass: SVGAttributes['class'] , 
    containerClass: HTMLElement['className']
}

export type Testimonial = {
    name: string,
    position: string,
    message: string,
    img: string,
    containerClass?: string
}