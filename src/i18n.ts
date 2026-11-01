import { ref, watchEffect } from "vue"

import { langs, type Lang, type Text, type YearMonth } from "./cv/types"

const ui = {
  summary: { en: "Summary", ru: "О себе" },
  skills: { en: "Skills", ru: "Навыки" },
  leadership: { en: "Leadership", ru: "Руководство" },
  experience: { en: "Experience", ru: "Опыт работы" },
  education: { en: "Education", ru: "Образование" },
  stack: { en: "Stack", ru: "Стек" },
  present: { en: "Present", ru: "н. в." },
  switchLang: { en: "Switch language", ru: "Сменить язык" },
  print: { en: "Print / Save PDF", ru: "Печать / PDF" },
  theme: { en: "Color theme", ru: "Цветовая тема" },
  themeSystem: { en: "System theme", ru: "Как в системе" },
  themeLight: { en: "Light theme", ru: "Светлая тема" },
  themeDark: { en: "Dark theme", ru: "Тёмная тема" }
} satisfies Record<string, Text>

const months: Record<Lang, string[]> = {
  en: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
  ru: [
    "янв.",
    "февр.",
    "март",
    "апр.",
    "май",
    "июнь",
    "июль",
    "авг.",
    "сент.",
    "окт.",
    "нояб.",
    "дек."
  ]
}

function isLang(value: string | null): value is Lang {
  return langs.some((lang) => lang === value)
}

const defaultLang: Lang = "ru"

/** `?lang=` wins, otherwise Russian. */
function initialLang(): Lang {
  const param = new URLSearchParams(location.search).get("lang")
  return isLang(param) ? param : defaultLang
}

export const lang = ref<Lang>(initialLang())

watchEffect(() => {
  document.documentElement.lang = lang.value
  const url = new URL(location.href)
  if (lang.value === defaultLang) url.searchParams.delete("lang")
  else url.searchParams.set("lang", lang.value)
  history.replaceState(null, "", url)
})

export function t(text: Text | string): string {
  return typeof text === "string" ? text : text[lang.value]
}

export function label(key: keyof typeof ui): string {
  return t(ui[key])
}

function formatMonth(value: YearMonth): string {
  const [year, month] = value.split("-").map(Number)
  return `${months[lang.value][month - 1]} ${year}`
}

export function formatPeriod(start: YearMonth, end?: YearMonth): string {
  return `${formatMonth(start)} – ${end ? formatMonth(end) : label("present")}`
}
