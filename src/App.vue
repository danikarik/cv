<script setup lang="ts">
import { watchEffect } from "vue"

import ExperienceJob from "./components/ExperienceJob.vue"
import { cv } from "./cv/data"
import { langs } from "./cv/types"
import { label, lang, t } from "./i18n"
import { theme, type Theme } from "./theme"

const themeOptions = [
  { value: "system", label: "themeSystem" },
  { value: "light", label: "themeLight" },
  { value: "dark", label: "themeDark" }
] as const satisfies { value: Theme; label: Parameters<typeof label>[0] }[]

watchEffect(() => {
  document.title = `${t(cv.name)} — CV`
})

function print() {
  window.print()
}
</script>

<template>
  <nav class="toolbar">
    <div class="segmented" role="group" :aria-label="label('switchLang')">
      <button
        v-for="code in langs"
        :key="code"
        type="button"
        :aria-pressed="lang === code"
        @click="lang = code"
      >
        {{ code.toUpperCase() }}
      </button>
    </div>

    <div class="segmented" role="group" :aria-label="label('theme')">
      <button
        v-for="option in themeOptions"
        :key="option.value"
        type="button"
        class="icon"
        :aria-pressed="theme === option.value"
        :aria-label="label(option.label)"
        :title="label(option.label)"
        @click="theme = option.value"
      >
        <svg
          viewBox="0 0 24 24"
          aria-hidden="true"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <template v-if="option.value === 'system'">
            <rect x="3" y="4" width="18" height="12" rx="2" />
            <path d="M8 20h8M12 16v4" />
          </template>
          <template v-else-if="option.value === 'light'">
            <circle cx="12" cy="12" r="4" />
            <path
              d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"
            />
          </template>
          <path v-else d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z" />
        </svg>
      </button>
    </div>

    <button type="button" class="print" @click="print">{{ label("print") }}</button>
  </nav>

  <main class="page">
    <header class="head">
      <h1>{{ t(cv.name) }}</h1>
      <p class="title">{{ t(cv.title) }}</p>
      <ul class="meta">
        <li>{{ t(cv.location) }}</li>
        <li v-for="contact in cv.contacts" :key="contact.href">
          <a :href="contact.href">{{ contact.text }}</a>
        </li>
      </ul>
    </header>

    <section>
      <h2>{{ label("summary") }}</h2>
      <p v-for="(paragraph, i) in cv.summary" :key="i" class="summary">{{ t(paragraph) }}</p>
    </section>

    <section>
      <h2>{{ label("skills") }}</h2>
      <dl class="skills">
        <template v-for="group in cv.skills" :key="group.title.en">
          <dt>{{ t(group.title) }}</dt>
          <dd>{{ group.items.map(t).join(", ") }}</dd>
        </template>
      </dl>
    </section>

    <section>
      <h2>{{ label("leadership") }}</h2>
      <ul class="leadership">
        <li v-for="(item, i) in cv.leadership" :key="i">{{ t(item) }}</li>
      </ul>
    </section>

    <section>
      <h2>{{ label("experience") }}</h2>
      <ExperienceJob v-for="job in cv.experience" :key="job.start" :job="job" />
    </section>

    <section>
      <h2>{{ label("education") }}</h2>
      <p v-for="item in cv.education" :key="item.start" class="education">
        <span
          ><strong>{{ t(item.degree) }}</strong> · {{ t(item.school) }}</span
        >
        <span class="period">{{ item.start }} – {{ item.end }}</span>
      </p>
    </section>
  </main>
</template>

<style scoped>
.toolbar {
  display: flex;
  justify-content: flex-end;
  gap: 8px;
  max-width: var(--page-width);
  margin: 0 auto 12px;
}

.segmented {
  display: inline-flex;
  border: 1px solid var(--border);
  border-radius: 8px;
  overflow: hidden;
  background: var(--paper);
}

button {
  font: inherit;
  font-size: 13px;
  padding: 6px 12px;
  border: 0;
  background: var(--paper);
  color: var(--text);
  cursor: pointer;
}

.segmented button + button {
  border-left: 1px solid var(--border);
}

.segmented button[aria-pressed="true"] {
  background: var(--accent);
  color: var(--on-accent);
}

.icon {
  display: inline-grid;
  place-items: center;
  padding: 6px 9px;
}

.icon svg {
  width: 16px;
  height: 16px;
}

.print {
  border: 1px solid var(--border);
  border-radius: 8px;
}

button:focus-visible {
  outline: 2px solid var(--accent);
  outline-offset: 2px;
}

.page {
  max-width: var(--page-width);
  margin: 0 auto;
  padding: 14mm 16mm;
  background: var(--paper);
  box-shadow: var(--shadow);
}

.head {
  padding-bottom: 0.8em;
  border-bottom: 2px solid var(--accent);
}

h1 {
  margin: 0;
  font-size: 2em;
  line-height: 1.15;
  font-weight: 700;
  letter-spacing: -0.02em;
  color: var(--text-strong);
}

.title {
  margin: 0.15em 0 0;
  font-size: 1.1em;
  font-weight: 500;
  color: var(--accent);
}

.meta {
  display: flex;
  flex-wrap: wrap;
  gap: 0.2em 1.2em;
  margin: 0.5em 0 0;
  padding: 0;
  list-style: none;
  color: var(--muted);
}

section {
  margin-top: 1.2em;
}

h2 {
  margin: 0 0 0.5em;
  font-size: 0.8em;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--accent);
  break-after: avoid;
}

.summary {
  margin: 0;
}

.summary + .summary {
  margin-top: 0.4em;
}

.skills {
  display: grid;
  grid-template-columns: max-content 1fr;
  gap: 0.25em 1.2em;
  margin: 0;
}

.skills dt {
  font-weight: 600;
  color: var(--text-strong);
}

.skills dd {
  margin: 0;
}

.leadership {
  margin: 0;
  padding-left: 1.1em;
}

.leadership li + li {
  margin-top: 0.2em;
}

.leadership li::marker {
  color: var(--accent);
}

.education {
  display: grid;
  grid-template-columns: 1fr auto;
  align-items: baseline;
  gap: 0 1em;
  margin: 0;
}

.education + .education {
  margin-top: 0.25em;
}

.education .period {
  font-size: 0.9em;
  color: var(--muted);
  white-space: nowrap;
  font-variant-numeric: tabular-nums;
}

.education strong {
  font-weight: 600;
  color: var(--text-strong);
}

@media (max-width: 640px) {
  .toolbar {
    padding: 0 16px;
  }

  .page {
    padding: 20px 16px;
    box-shadow: none;
  }

  .skills {
    grid-template-columns: 1fr;
    gap: 0;
  }

  .skills dd + dt {
    margin-top: 0.5em;
  }
}

@media print {
  .toolbar {
    display: none;
  }

  .page {
    max-width: none;
    padding: 0;
    box-shadow: none;
  }

  section {
    margin-top: 1em;
  }
}
</style>
