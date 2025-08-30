import { onMounted, onUnmounted } from "vue";


export function useEventListener(target: Window, event: keyof WindowEventMap, callback: (ev: Event) => void) {
    onMounted(() => target.addEventListener(event, callback))
    onUnmounted(() => target.removeEventListener(event, callback))
}