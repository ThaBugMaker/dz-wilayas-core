<script setup lang="ts">
import { computed, onMounted, onBeforeUnmount, nextTick, ref } from "vue";
import { WilayasStore, type Wilaya } from "dz-wilayas-core";
import { Icon } from "@iconify/vue";
import WilayaDetails from "./WilayaDetails.vue";

const store = new WilayasStore();
const wilayas = store.getAllWilayas();

const searchQuery = ref("");
const searchInput = ref<HTMLInputElement | null>(null);
const selectedCode = ref(wilayas[0]?.code ?? "");

const filteredWilayas = computed(() => {
  const query = searchQuery.value.trim().toLowerCase();

  if (!query) return [];

  return wilayas.filter((wilaya) =>
    [wilaya.code, wilaya.name, wilaya.ar_name].some((value) =>
      value.toLowerCase().includes(query),
    ),
  );
});

const selectedWilaya = computed(
  () => wilayas.find((wilaya) => wilaya.code === selectedCode.value) ?? null,
);

const selectedBaladiyat = computed(() =>
  selectedWilaya.value
    ? store.getBaladiyatByWilayaCode(selectedWilaya.value.code)
    : [],
);

const totalBaladiyat = computed(() =>
  wilayas.reduce(
    (total, wilaya) =>
      total + store.getBaladiyatByWilayaCode(wilaya.code).length,
    0,
  ),
);

function selectWilaya(wilaya: Wilaya) {
  selectedCode.value = wilaya.code;
  searchQuery.value = "";
}

function clearSearch() {
  searchQuery.value = "";
  searchInput.value?.focus();
}

async function handleKeyboardShortcut(event: KeyboardEvent) {
  if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === "k") {
    event.preventDefault();

    await nextTick();
    searchInput.value?.focus();
    searchInput.value?.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
  }

  if (event.key === "Escape" && document.activeElement === searchInput.value) {
    searchQuery.value = "";
    searchInput.value?.blur();
  }
}

onMounted(() => {
  window.addEventListener("keydown", handleKeyboardShortcut);
});

onBeforeUnmount(() => {
  window.removeEventListener("keydown", handleKeyboardShortcut);
});
</script>

<template>
  <section id="explorer" class="w-full scroll-mt-8 space-y-8">
    <!-- Breadcrumb -->
    <nav class="mb-4 mt-8 flex items-center gap-1.5 text-xs">
      <span class="text-white/40">Docs</span>
      <Icon icon="lucide:chevron-right" class="size-3 text-white/20" />
      <span class="text-white/40">Playground</span>
      <Icon icon="lucide:chevron-right" class="size-3 text-white/20" />
      <span class="font-medium text-amber">Explorer</span>
    </nav>

    <!-- Heading -->
    <div>
      <h2 class="text-2xl font-semibold tracking-tight text-cream">Explorer</h2>
      <p class="mt-2 text-sm leading-6 text-white/50">
        Browse Algeria's wilayas and explore their administrative data.
      </p>
    </div>

    <!-- Unified explorer panel -->
    <div class="relative rounded-2xl border border-white/10 bg-surface">
      <!-- Search -->
      <div class="relative z-20 border-b border-white/10 p-5 sm:p-6">
        <div class="mb-4 flex flex-wrap items-center justify-between gap-3">
          <div>
            <h3 class="text-sm font-semibold text-cream">Find a Wilaya</h3>
            <p class="mt-1 text-xs text-white/40">
              Search by name, Arabic name or wilaya code.
            </p>
          </div>

          <span class="text-xs text-white/40">
            {{ wilayas.length }} wilayas · {{ totalBaladiyat }} baladiyat
          </span>
        </div>

        <div class="relative">
          <Icon
            icon="lucide:search"
            class="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-white/30"
          />

          <input
            ref="searchInput"
            v-model="searchQuery"
            type="text"
            placeholder="Search wilayas..."
            autocomplete="off"
            class="w-full rounded-lg border border-white/10 bg-white/3 py-3 pl-10 pr-24 text-sm text-cream outline-none transition placeholder:text-white/30 focus:border-sage/50"
          />

          <button
            v-if="searchQuery"
            type="button"
            @click="clearSearch"
            class="absolute right-3 top-1/2 -translate-y-1/2 text-white/40 transition hover:text-cream"
          >
            <Icon icon="lucide:x" class="size-4" />
          </button>

          <span
            v-else
            class="absolute right-3 top-1/2 flex -translate-y-1/2 items-center gap-1.5 rounded border border-white/10 bg-white/4 px-2 py-1 text-[10px] text-white/40"
          >
            <kbd class="text-white/50">Ctrl + K</kbd>
            <span class="text-white/20">/</span>
            <icon icon="lucide:command" class="size-3" />
            <kbd class="text-white/50">K</kbd>
          </span>

          <!-- Search results -->
          <div
            v-if="searchQuery.trim()"
            class="absolute inset-x-0 top-full z-30 mt-2 overflow-hidden rounded-xl border border-white/10 bg-surface shadow-2xl"
          >
            <div
              class="flex items-center justify-between border-b border-white/10 px-4 py-3"
            >
              <span class="text-xs text-white/45"> Search results </span>
              <span class="text-xs text-sage">
                {{ filteredWilayas.length }} found
              </span>
            </div>

            <div class="max-h-64 overflow-y-auto p-2">
              <button
                v-for="wilaya in filteredWilayas"
                :key="wilaya.code"
                type="button"
                class="flex w-full items-center gap-3 rounded-lg p-3 text-left transition"
                :class="
                  selectedCode === wilaya.code
                    ? 'bg-forest-light/20'
                    : 'hover:bg-white/5'
                "
                @click="selectWilaya(wilaya)"
              >
                <span
                  class="flex size-10 shrink-0 items-center justify-center rounded-lg text-sm font-semibold"
                  :class="
                    selectedCode === wilaya.code
                      ? 'bg-forest-light text-white'
                      : 'bg-white/6 text-white/55'
                  "
                >
                  {{ wilaya.code }}
                </span>

                <span class="min-w-0 flex-1">
                  <span class="block truncate text-sm font-medium text-white">
                    {{ wilaya.name }}
                  </span>
                  <span
                    class="mt-1 block truncate text-xs text-white/40"
                    dir="rtl"
                  >
                    {{ wilaya.ar_name }}
                  </span>
                </span>

                <Icon
                  v-if="selectedCode === wilaya.code"
                  icon="lucide:check"
                  class="size-4 shrink-0 text-sage"
                />
              </button>

              <p
                v-if="filteredWilayas.length === 0"
                class="py-8 text-center text-sm text-white/40"
              >
                No wilayas found.
              </p>
            </div>
          </div>
        </div>
      </div>

      <!-- Selected wilaya and municipalities -->
      <WilayaDetails :wilaya="selectedWilaya" :baladiyat="selectedBaladiyat" />
    </div>
    <!-- TIP -->
    <div
      class="mt-5 flex gap-3 rounded-md border-l-2 border-amber/60 bg-amber/4 px-4 py-3"
    >
      <Icon icon="lucide:lightbulb" class="mt-0.5 size-4 shrink-0 text-amber" />
      <div>
        <p class="text-xs font-semibold text-amber">TIP</p>
        <p class="mt-1 text-sm leading-6 text-white/60">
          Press
          <code class="rounded bg-white/6 px-1 text-cream">Ctrl + K</code>
          (or
          <code class="rounded bg-white/6 px-1 text-cream">⌘ + K</code>
          on Mac) to quickly focus the search field.
        </p>
      </div>
    </div>
  </section>
</template>
