<script setup lang="ts">
import { Icon } from "@iconify/vue";
defineProps<{
  activeSection: string;
}>();
</script>

<template>
  <aside
    class="flex h-full w-56 shrink-0 flex-col border-r border-white/10 bg-surface"
  >
    <nav class="flex-1 overflow-y-auto px-3 py-6">
      <div class="mb-7">
        <p
          class="mb-3 px-3 text-[11px] font-semibold uppercase tracking-wider text-white/35"
        >
          Getting Started
        </p>

        <div class="space-y-1">
          <a
            href="#introduction"
            class="flex items-center gap-2 rounded-md px-3 py-2 text-sm transition"
            :class="
              activeSection === 'introduction'
                ? 'bg-forest-light/20 text-sage'
                : 'text-white/60 hover:bg-white/5 hover:text-cream'
            "
          >
            <Icon icon="lucide:book-open" class="size-4" />
            Introduction
          </a>

          <a
            href="#installation"
            class="flex items-center gap-2 rounded-md px-3 py-2 text-sm transition"
            :class="
              activeSection === 'installation'
                ? 'bg-forest-light/20 text-sage'
                : 'text-white/60 hover:bg-white/5 hover:text-cream'
            "
          >
            <Icon icon="lucide:download" class="size-4" />
            Installation
          </a>

          <a
            href="#quick-start"
            class="flex items-center gap-2 rounded-md px-3 py-2 text-sm transition"
            :class="
              activeSection === 'quick-start'
                ? 'bg-forest-light/20 text-sage'
                : 'text-white/60 hover:bg-white/5 hover:text-cream'
            "
          >
            <Icon icon="lucide:zap" class="size-4" />
            Quick Start
          </a>
        </div>
      </div>

      <div class="mb-7">
        <p
          class="mb-3 px-3 text-[11px] font-semibold uppercase tracking-wider text-white/35"
        >
          API Reference
        </p>

        <div class="space-y-1">
          <a
            href="#wilayas-store"
            class="flex items-center gap-2 rounded-md px-3 py-2 text-sm transition"
            :class="
              activeSection === 'wilayas-store'
                ? 'bg-forest-light/20 text-sage'
                : 'text-white/60 hover:bg-white/5 hover:text-cream'
            "
          >
            <Icon icon="lucide:database" class="size-4" />
            WilayasStore
          </a>

          <a
            href="#methods"
            class="flex items-center gap-2 rounded-md px-3 py-2 text-sm transition"
            :class="
              activeSection === 'methods'
                ? 'bg-forest-light/20 text-sage'
                : 'text-white/60 hover:bg-white/5 hover:text-cream'
            "
          >
            <Icon icon="lucide:code" class="size-4" />
            Methods
          </a>

          <a
            href="#types"
            class="flex items-center gap-2 rounded-md px-3 py-2 text-sm transition"
            :class="
              activeSection === 'types'
                ? 'bg-forest-light/20 text-sage'
                : 'text-white/60 hover:bg-white/5 hover:text-cream'
            "
          >
            <Icon icon="lucide:braces" class="size-4" />
            Types
          </a>
        </div>
      </div>

      <div>
        <p
          class="mb-3 px-3 text-[11px] font-semibold uppercase tracking-wider text-white/35"
        >
          Playground
        </p>

        <a
          href="#explorer"
          class="flex items-center gap-2 rounded-md px-3 py-2 text-sm transition"
          :class="
            activeSection === 'explorer'
              ? 'bg-forest-light/20 text-sage'
              : 'text-white/60 hover:bg-white/5 hover:text-cream'
          "
        >
          <Icon icon="lucide:map" class="size-4" />
          Explorer
        </a>
      </div>
    </nav>
  </aside>
</template>
