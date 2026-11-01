<script setup lang="ts">
import type { Job } from "../cv/types"
import { formatPeriod, label, t } from "../i18n"

defineProps<{ job: Job }>()
</script>

<template>
  <article class="job">
    <header class="job-head">
      <h3>
        <span class="company">{{ t(job.company) }}</span>
        <span class="role">{{ t(job.role) }}</span>
      </h3>
      <span class="period">{{ formatPeriod(job.start, job.end) }}</span>
    </header>

    <section v-for="(project, i) in job.projects" :key="i" class="project">
      <p class="about">
        <strong v-if="project.name">{{ project.name }}. </strong>{{ t(project.about) }}
      </p>
      <ul>
        <li v-for="(item, j) in project.highlights" :key="j">{{ t(item) }}</li>
      </ul>
      <p class="stack">
        <span class="stack-label">{{ label("stack") }}:</span> {{ project.stack.join(", ") }}
      </p>
    </section>
  </article>
</template>

<style scoped>
.job + .job {
  margin-top: 1.1em;
}

.job-head {
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
  justify-content: space-between;
  gap: 0 1em;
  break-after: avoid;
}

h3 {
  margin: 0;
  font-size: 1.05em;
  font-weight: 600;
  color: var(--text-strong);
}

.role {
  font-weight: 500;
  color: var(--text);
}

.role::before {
  content: " · ";
  color: var(--muted);
}

.period {
  font-size: 0.9em;
  color: var(--muted);
  white-space: nowrap;
  font-variant-numeric: tabular-nums;
}

.project {
  margin-top: 0.35em;
}

.project + .project {
  margin-top: 0.7em;
}

.about {
  margin: 0;
  color: var(--muted);
}

.about strong {
  color: var(--text-strong);
  font-weight: 600;
}

ul {
  margin: 0.35em 0 0;
  padding-left: 1.1em;
}

li {
  margin-top: 0.2em;
  break-inside: avoid;
}

li::marker {
  color: var(--accent);
}

.stack {
  break-before: avoid;
  margin: 0.35em 0 0;
  font-size: 0.88em;
  color: var(--muted);
}

.stack-label {
  font-weight: 600;
  color: var(--text);
}
</style>
