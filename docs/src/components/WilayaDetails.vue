<script setup lang="ts">
import type { Wilaya, Baladiya } from "dz-wilayas-core";

defineProps<{
  wilaya: Wilaya | null;
  baladiyat: Baladiya[];
}>();
</script>

<template>
  <template v-if="wilaya">
    <!-- Wilaya information -->
    <div class="relative overflow-hidden border-b border-white/10 p-6 sm:p-8">
      <div
        class="pointer-events-none absolute -right-16 -top-16 size-64 rounded-full bg-forest-light/20 blur-3xl"
      />

      <div class="relative">
        <div class="flex flex-wrap items-center justify-between gap-3">
          <span
            class="rounded-lg border border-sage/20 bg-forest-light/15 px-3 py-1.5 text-xs font-semibold text-sage"
          >
            Wilaya {{ wilaya.code }}
          </span>

          <span class="text-xs text-white/35">
            {{ baladiyat.length }} baladiyat
          </span>
        </div>

        <div class="mt-6 flex flex-wrap items-end justify-between gap-5">
          <div>
            <h3 class="text-3xl font-semibold tracking-tight text-cream">
              {{ wilaya.name }}
            </h3>

            <p class="mt-2 text-xl text-white/55" dir="rtl">
              {{ wilaya.ar_name }}
            </p>
          </div>

          <div class="flex items-center gap-3">
            <div
              class="flex size-10 items-center justify-center rounded-lg bg-forest-light/30 text-sage"
            >
              <span class="text-lg">⌖</span>
            </div>

            <div>
              <p class="text-xs text-white/35">Administrative division</p>
              <p class="mt-1 text-sm font-medium text-white/75">
                People's Democratic Republic of Algeria
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Baladiyat -->
    <div class="p-6 sm:p-8">
      <div class="mb-5 flex flex-wrap items-center justify-between gap-3">
        <div>
          <h4 class="font-semibold text-white">Baladiyat</h4>
          <p class="mt-1 text-xs text-white/40">
            Municipalities within {{ wilaya.name }}
          </p>
        </div>

        <span class="text-xs font-medium text-sage">
          {{ baladiyat.length }} entries
        </span>
      </div>

      <div
        v-if="baladiyat.length"
        class="grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-4 2xl:grid-cols-5"
      >
        <div
          v-for="baladiya in baladiyat"
          :key="baladiya.id"
          class="flex min-w-0 flex-col gap-1.5 rounded-lg border border-white/6 bg-white/2 px-4 py-3 transition hover:border-white/15 hover:bg-white/4"
        >
          <span class="truncate text-sm font-medium text-white/75">
            {{ baladiya.name }}
          </span>

          <span class="truncate text-xs text-white/40" dir="rtl">
            {{ baladiya.ar_name }}
          </span>
        </div>
      </div>

      <div
        v-else
        class="rounded-xl border border-dashed border-white/10 py-10 text-center"
      >
        <p class="text-sm text-white/45">No baladiya records available.</p>
      </div>
    </div>
  </template>

  <div
    v-else
    class="flex min-h-72 flex-col items-center justify-center px-6 text-center"
  >
    <div
      class="flex size-14 items-center justify-center rounded-2xl bg-white/5 text-2xl text-white/30"
    >
      ⌕
    </div>

    <h3 class="mt-5 font-medium text-white/75">No wilaya selected</h3>

    <p class="mt-2 max-w-xs text-sm leading-6 text-white/40">
      Search for a wilaya above to explore its municipalities.
    </p>
  </div>
</template>
