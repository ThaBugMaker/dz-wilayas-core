<script setup lang="ts">
import { Icon } from "@iconify/vue";
</script>

<template>
  <footer class="border-t border-white/10 bg-surface">
    <div
      class="flex flex-col gap-3 px-8 py-4 text-xs text-white/40 sm:flex-row sm:items-center sm:justify-between lg:px-6"
    >
      <a
        href="https://github.com/ThaBugMaker/dz-wilayas-core"
        target="_blank"
        rel="noreferrer"
        class="inline-flex items-center gap-2 transition hover:text-amber"
      >
        <Icon icon="simple-icons:github" class="size-4" />
        Source code
        <Icon icon="lucide:external-link" class="size-3" />
      </a>
      <p>
        © 2025 - {{ new Date().getFullYear() }}
        <span class="font-medium text-white/65">ThaBugMaker</span>. Open-source
        under
        <a
          href="https://dynamic-license.github.io/MIT?year=2025%20-%202026&owner=ThaBugMaker"
          target="_blank"
          rel="noreferrer"
          class="transition underline underline-offset-2 hover:text-amber"
        >
          MIT License.
        </a>
      </p>
    </div>
  </footer>
</template>
