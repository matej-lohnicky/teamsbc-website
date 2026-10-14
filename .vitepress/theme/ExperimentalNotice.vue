<script setup>
import { computed, onBeforeUnmount, onMounted, ref } from 'vue'
import { useData } from 'vitepress'

const { lang } = useData()
const messages = {
  en: {
    label: 'Experimental software notice',
    text: 'TeamSBC Linux is experimental and not ready for general usage.'
  },
  nl: {
    label: 'Waarschuwing over experimentele software',
    text: 'TeamSBC Linux is experimenteel en nog niet klaar voor algemeen gebruik.'
  },
  ru: {
    label: 'Предупреждение об экспериментальном ПО',
    text: 'TeamSBC Linux — экспериментальная система, ещё не готовая для широкого использования.'
  }
}
const message = computed(() => messages[lang.value] || messages.en)

const notice = ref(null)
let observer

onMounted(() => {
  const updateHeight = () => {
    document.documentElement.style.setProperty(
      '--vp-layout-top-height',
      `${notice.value.getBoundingClientRect().height}px`
    )
  }

  updateHeight()
  observer = new ResizeObserver(updateHeight)
  observer.observe(notice.value)
})

onBeforeUnmount(() => {
  observer?.disconnect()
  document.documentElement.style.removeProperty('--vp-layout-top-height')
})
</script>

<template>
  <aside
    ref="notice"
    class="experimental-notice"
    :aria-label="message.label"
  >
    {{ message.text }}
  </aside>
</template>

<style scoped>
/* Reserve space before hydration; ResizeObserver keeps wrapped text in sync. */
:global(:root) {
  --vp-layout-top-height: 64px;
}

@media (min-width: 768px) {
  :global(:root) {
    --vp-layout-top-height: 40px;
  }
}

.experimental-notice {
  position: fixed;
  top: 0;
  left: 0;
  z-index: var(--vp-z-index-layout-top);
  width: 100%;
  padding: 8px 24px;
  background: #fef08a;
  color: #422006;
  font-size: 14px;
  font-weight: 500;
  line-height: 24px;
  text-align: center;
}
</style>
