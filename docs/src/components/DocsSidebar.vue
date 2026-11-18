<script setup lang="ts">
import { Icon } from "@iconify/vue";
defineProps<{
  activeSection: string;
}>();

import { ref } from "vue";

const isExpanded = ref(false);

const closeSidebar = () => {
  isExpanded.value = false;
};
</script>

<template>
  <!-- Mobile backdrop -->
  <button
    v-if="isExpanded"
    type="button"
    aria-label="Close navigation"
    class="absolute inset-y-0 left-0 z-40 w-screen bg-black/60 md:hidden"
    @click="closeSidebar"
  />
  <aside class="relative z-40 h-full min-h-0 w-14 shrink-0 md:w-48 lg:w-52">
    <nav
      class="flex h-full flex-col overflow-hidden border-r border-white/10 bg-surface px-2 py-4 transition-all duration-200 md:px-3 md:py-6"
      :class="
        isExpanded
          ? 'absolute inset-y-0 left-0 z-50 w-64 shadow-2xl'
          : 'relative w-14 md:w-full'
      "
    >
      <!-- Toggle -->
      <button
        type="button"
        aria-label="Toggle navigation"
        :aria-expanded="isExpanded"
        class="mb-6 flex size-9 shrink-0 items-center justify-center self-center rounded-md text-white/60 transition hover:bg-white/5 hover:text-cream md:hidden"
        @click="isExpanded = !isExpanded"
      >
        <Icon :icon="isExpanded ? 'lucide:x' : 'lucide:menu'" class="size-5" />
      </button>

      <!-- Getting Started -->
      <div class="mb-7">
        <p
          class="mb-3 px-3 text-[11px] font-semibold uppercase tracking-wider text-white/35"
          :class="isExpanded ? 'block' : 'hidden md:block'"
        >
          Getting Started
        </p>

        <div class="space-y-1">
          <a
            href="#introduction"
            title="Introduction"
            class="flex items-center gap-2 rounded-md px-3 py-2 text-sm transition"
            :class="[
              activeSection === 'introduction'
                ? 'bg-forest-light/20 text-sage'
                : 'text-white/60 hover:bg-white/5 hover:text-cream',
              isExpanded ? 'justify-start' : 'justify-center md:justify-start',
            ]"
            @click="closeSidebar"
          >
            <Icon icon="lucide:book-open" class="size-4 shrink-0" />
            <span :class="isExpanded ? 'inline' : 'hidden md:inline'"
              >Introduction</span
            >
          </a>

          <a
            href="#installation"
            title="Installation"
            class="flex items-center gap-2 rounded-md px-3 py-2 text-sm transition"
            :class="[
              activeSection === 'installation'
                ? 'bg-forest-light/20 text-sage'
                : 'text-white/60 hover:bg-white/5 hover:text-cream',
              isExpanded ? 'justify-start' : 'justify-center md:justify-start',
            ]"
            @click="closeSidebar"
          >
            <Icon icon="lucide:download" class="size-4 shrink-0" />
            <span :class="isExpanded ? 'inline' : 'hidden md:inline'"
              >Installation</span
            >
          </a>

          <a
            href="#quick-start"
            title="Quick Start"
            class="flex items-center gap-2 rounded-md px-3 py-2 text-sm transition"
            :class="[
              activeSection === 'quick-start'
                ? 'bg-forest-light/20 text-sage'
                : 'text-white/60 hover:bg-white/5 hover:text-cream',
              isExpanded ? 'justify-start' : 'justify-center md:justify-start',
            ]"
            @click="closeSidebar"
          >
            <Icon icon="lucide:zap" class="size-4 shrink-0" />
            <span :class="isExpanded ? 'inline' : 'hidden md:inline'"
              >Quick Start</span
            >
          </a>
        </div>
      </div>

      <!-- API Reference -->
      <div class="mb-7">
        <p
          class="mb-3 px-3 text-[11px] font-semibold uppercase tracking-wider text-white/35"
          :class="isExpanded ? 'block' : 'hidden md:block'"
        >
          API Reference
        </p>

        <div class="space-y-1">
          <a
            href="#wilayas-store"
            title="WilayasStore"
            class="flex items-center gap-2 rounded-md px-3 py-2 text-sm transition"
            :class="[
              activeSection === 'wilayas-store'
                ? 'bg-forest-light/20 text-sage'
                : 'text-white/60 hover:bg-white/5 hover:text-cream',
              isExpanded ? 'justify-start' : 'justify-center md:justify-start',
            ]"
            @click="closeSidebar"
          >
            <Icon icon="lucide:database" class="size-4 shrink-0" />
            <span :class="isExpanded ? 'inline' : 'hidden md:inline'"
              >WilayasStore</span
            >
          </a>

          <a
            href="#methods"
            title="Methods"
            class="flex items-center gap-2 rounded-md px-3 py-2 text-sm transition"
            :class="[
              activeSection === 'methods'
                ? 'bg-forest-light/20 text-sage'
                : 'text-white/60 hover:bg-white/5 hover:text-cream',
              isExpanded ? 'justify-start' : 'justify-center md:justify-start',
            ]"
            @click="closeSidebar"
          >
            <Icon icon="lucide:code" class="size-4 shrink-0" />
            <span :class="isExpanded ? 'inline' : 'hidden md:inline'"
              >Methods</span
            >
          </a>

          <a
            href="#types"
            title="Types"
            class="flex items-center gap-2 rounded-md px-3 py-2 text-sm transition"
            :class="[
              activeSection === 'types'
                ? 'bg-forest-light/20 text-sage'
                : 'text-white/60 hover:bg-white/5 hover:text-cream',
              isExpanded ? 'justify-start' : 'justify-center md:justify-start',
            ]"
            @click="closeSidebar"
          >
            <Icon icon="lucide:braces" class="size-4 shrink-0" />
            <span :class="isExpanded ? 'inline' : 'hidden md:inline'"
              >Types</span
            >
          </a>
        </div>
      </div>

      <!-- Playground -->
      <div>
        <p
          class="mb-3 px-3 text-[11px] font-semibold uppercase tracking-wider text-white/35"
          :class="isExpanded ? 'block' : 'hidden md:block'"
        >
          Playground
        </p>

        <a
          href="#explorer"
          title="Explorer"
          class="flex items-center gap-2 rounded-md px-3 py-2 text-sm transition"
          :class="[
            activeSection === 'explorer'
              ? 'bg-forest-light/20 text-sage'
              : 'text-white/60 hover:bg-white/5 hover:text-cream',
            isExpanded ? 'justify-start' : 'justify-center md:justify-start',
          ]"
          @click="closeSidebar"
        >
          <Icon icon="lucide:map" class="size-4 shrink-0" />
          <span :class="isExpanded ? 'inline' : 'hidden md:inline'"
            >Explorer</span
          >
        </a>
      </div>
    </nav>
  </aside>
</template>
