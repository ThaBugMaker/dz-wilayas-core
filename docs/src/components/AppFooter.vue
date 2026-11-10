<script setup lang="ts">
import { Icon } from "@iconify/vue";
</script>

<template>
  <footer class="border-t border-white/10 bg-surface">
    <div
      class="flex flex-col gap-3 px-8 py-6 text-xs text-white/40 sm:flex-row sm:items-center sm:justify-between lg:px-12"
    >
      <p>
        © 2026
        <span class="font-medium text-white/65">ThaBugMaker</span>. Open-source
        under MIT License.
      </p>

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
    </div>
  </footer>
</template>
