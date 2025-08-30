import { ref } from "vue"
import { useEventListener } from "./event";

export function useScroll() {

    const scrollX = ref(0);
    const scrollY = ref(0);

    useEventListener(window, 'scroll', () => {
        scrollX.value = window.scrollX;
        scrollY.value = window.scrollY;
    })

    return {
        scrollX,
        scrollY
    }
}