<script setup lang="ts">
import { Icon } from "@iconify/vue";
</script>

<template>
  <footer class="border-t z-40 border-white/10 bg-surface">
    <div
      class="flex gap-2 px-6 py-5 text-[0.48rem] sm:text-xs text-white/40 items-center justify-between"
    >
      <a
        href="https://github.com/ThaBugMaker/dz-wilayas-core"
        target="_blank"
        rel="noreferrer"
        class="inline-flex w-fit items-center gap-2 transition hover:text-amber"
      >
        <Icon icon="simple-icons:github" class="size-3 sm:size-4 shrink-0" />
        Source code
        <Icon icon="lucide:external-link" class="size-3 shrink-0" />
      </a>

      <p class="leading-relaxed sm:text-right">
        © 2025 - {{ new Date().getFullYear() }}
        <span class="font-medium text-white/65">ThaBugMaker</span>. Open-source
        under
        <a
          href="https://dynamic-license.github.io/MIT?year=2025%20-%202026&owner=ThaBugMaker"
          target="_blank"
          rel="noreferrer"
          class="underline underline-offset-2 transition hover:text-amber"
        >
          MIT License.
        </a>
      </p>
    </div>
  </footer>
</template>
