import { ref, watchEffect } from "vue"

export const themes = ["system", "light", "dark"] as const

export type Theme = (typeof themes)[number]

// Keep in sync with the inline script in index.html, which applies the
// saved theme before the app mounts to avoid a flash of the wrong colors.
const storageKey = "theme"

function isTheme(value: string | null): value is Theme {
  return themes.some((theme) => theme === value)
}

function savedTheme(): Theme {
  try {
    const value = localStorage.getItem(storageKey)
    return isTheme(value) ? value : "system"
  } catch {
    return "system"
  }
}

export const theme = ref<Theme>(savedTheme())

watchEffect(() => {
  const root = document.documentElement
  if (theme.value === "system") delete root.dataset.theme
  else root.dataset.theme = theme.value

  try {
    if (theme.value === "system") localStorage.removeItem(storageKey)
    else localStorage.setItem(storageKey, theme.value)
  } catch {
    // Storage can be blocked (private mode); the theme still applies for this visit.
  }
})
