<script setup lang="ts">
import { computed, ref } from "vue";
import { Icon } from "@iconify/vue";

const packageManagers = [
  {
    id: "pnpm",
    label: "pnpm",
    command: "pnpm add dz-wilayas-core",
    icon: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' viewBox='0 0 32 32'%3E%3Cpath fill='%23f9ad00' d='M30 10.75h-8.749V2H30Zm-9.626 0h-8.75V2h8.75Zm-9.625 0H2V2h8.749ZM30 20.375h-8.749v-8.75H30Z'/%3E%3Cpath fill='%23fff' d='M20.374 20.375h-8.75v-8.75h8.75Zm0 9.625h-8.75v-8.75h8.75ZM30 30h-8.749v-8.75H30Zm-19.251 0H2v-8.75h8.749Z'/%3E%3C/svg%3E",
  },
  {
    id: "npm",
    label: "npm",
    command: "npm install dz-wilayas-core",
    icon: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' viewBox='0 0 32 32'%3E%3Cpath fill='%23c12127' d='M2 2h28v28H2'/%3E%3Cpath fill='%23fff' d='M7.25 7.25h17.5v17.5h-3.5v-14H16v14H7.25'/%3E%3C/svg%3E",
  },
  {
    id: "yarn",
    label: "yarn",
    command: "yarn add dz-wilayas-core",
    icon: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' viewBox='0 0 32 32'%3E%3Cpath fill='%232188b6' d='M28.208 24.409a10.5 10.5 0 0 0-3.959 1.822a23.7 23.7 0 0 1-5.835 2.642a1.63 1.63 0 0 1-.983.55a62 62 0 0 1-6.447.577c-1.163.009-1.876-.3-2.074-.776a1.573 1.573 0 0 1 .866-2.074a4 4 0 0 1-.514-.379c-.171-.171-.352-.514-.406-.388c-.225.55-.343 1.894-.947 2.5c-.83.839-2.4.559-3.328.072c-1.019-.541.072-1.813.072-1.813a.73.73 0 0 1-.992-.343a4.85 4.85 0 0 1-.667-2.949a5.37 5.37 0 0 1 1.749-2.895a9.3 9.3 0 0 1 .658-4.4a10.45 10.45 0 0 1 3.165-3.661S6.628 10.747 7.35 8.817c.469-1.262.658-1.253.812-1.308a3.6 3.6 0 0 0 1.452-.857a5.27 5.27 0 0 1 4.41-1.7S15.2 1.4 16.277 2.09a18.4 18.4 0 0 1 1.533 2.886s1.281-.748 1.425-.469a11.33 11.33 0 0 1 .523 6.132a14 14 0 0 1-2.6 5.411c-.135.225 1.551.938 2.615 3.887c.983 2.7.108 4.96.262 5.212c.027.045.036.063.036.063s1.127.09 3.391-1.308a8.5 8.5 0 0 1 4.277-1.604a1.081 1.081 0 0 1 .469 2.11Z'/%3E%3C/svg%3E",
  },
] as const;

const packageManager = ref<(typeof packageManagers)[number]["id"]>("pnpm");

const selectedManager = computed(() =>
  packageManagers.find((manager) => manager.id === packageManager.value),
);

const copied = ref(false);

const quickStart = `import { WilayasStore } from "dz-wilayas-core";

const store = new WilayasStore();

// Get all wilayas
const wilayas = store.getAllWilayas();

// Find a wilaya by code
const wilaya = store.getWilayaByCode("16");

// Search wilayas
const results = store.searchWilayaByName("Alger");

// Get baladiyat
const baladiyat = store.getBaladiyatByWilayaCode("16");`;

const copyText = async (value: string, state: typeof copied) => {
  try {
    await navigator.clipboard.writeText(value);
    state.value = true;
    window.setTimeout(() => (state.value = false), 1800);
  } catch {
    state.value = false;
  }
};

const copyCode = () => copyText(quickStart, copied);
</script>

<template>
  <article class="w-full max-w-4xl space-y-12 text-cream">
    <!-- Introduction -->
    <section id="introduction" class="scroll-mt-8">
      <div class="mb-4 flex items-center gap-1.5 text-xs">
        <span class="text-white/40">Docs</span>
        <Icon icon="lucide:chevron-right" class="size-3 text-white/20" />
        <span class="text-white/40">Getting Started</span>
        <Icon icon="lucide:chevron-right" class="size-3 text-white/20" />
        <span class="font-medium text-amber">Introduction</span>
      </div>

      <h1 class="text-3xl font-bold tracking-tight text-white">Introduction</h1>

      <p class="mt-3 max-w-2xl text-sm leading-6 text-white/60">
        <span class="font-semibold text-cream">dz-wilayas-core</span>
        is a lightweight TypeScript library for accessing, searching, and
        querying Algeria's wilayas and baladiyat.
      </p>

      <h2 class="mt-8 text-sm font-semibold tracking-tight text-white/80">
        What you get
      </h2>

      <ul class="mt-4 grid grid-cols-1 gap-x-8 gap-y-3 sm:grid-cols-2">
        <li
          v-for="feature in [
            'Structured wilaya and baladiya data',
            'Lookup by administrative code',
            'Search wilayas by name',
            'Baladiyat by parent wilaya',
          ]"
          :key="feature"
          class="flex items-center gap-2.5 text-sm text-white/65"
        >
          <Icon icon="lucide:check" class="size-4 shrink-0 text-sage" />
          <span>{{ feature }}</span>
        </li>
      </ul>
    </section>

    <!-- Installation -->
    <section id="installation" class="scroll-mt-8">
      <h2 class="text-2xl font-bold tracking-tight">Installation</h2>

      <p class="mt-4 leading-7 text-white/55">
        Install
        <code class="rounded bg-white/5 px-1.5 py-1 text-sm text-sage">
          dz-wilayas-core
        </code>
        using your preferred package manager.
      </p>

      <div
        class="mt-6 overflow-hidden rounded-lg border border-white/10 bg-[#0b100d]"
      >
        <div
          class="flex items-center justify-between border-b border-white/10 px-4"
        >
          <div class="flex gap-5">
            <button
              v-for="manager in packageManagers"
              :key="manager.id"
              @click="packageManager = manager.id"
              class="flex items-center gap-1.5 border-b-2 py-3 text-xs font-medium transition"
              :class="
                packageManager === manager.id
                  ? 'border-amber text-cream'
                  : 'border-transparent text-white/40 hover:text-white/70'
              "
            >
              <img :src="manager.icon" :alt="manager.label" class="size-4" />
              <span>{{ manager.label }}</span>
            </button>
          </div>
          <span class="text-xs text-white/30">Bash</span>
        </div>

        <div class="p-5 font-mono text-sm">
          <span class="mr-3 text-sage">$</span>
          <span>{{ selectedManager?.command }}</span>
        </div>
      </div>
    </section>

    <!-- Quick Start -->
    <section id="quick-start" class="scroll-mt-8">
      <h2 class="text-2xl font-bold tracking-tight">Quick Start</h2>

      <p class="mt-4 leading-7 text-white/55">
        Create a
        <code class="rounded bg-white/5 px-1.5 py-1 text-sm text-sage"
          >WilayasStore</code
        >
        instance to access the available administrative data.
      </p>

      <!-- Usage example -->
      <div
        class="mt-5 overflow-hidden rounded-lg border border-white/10 bg-[#0b100d]"
      >
        <div
          class="flex items-center justify-between border-b border-white/10 px-4 py-3"
        >
          <div class="flex items-center gap-2">
            <span class="text-xs font-medium text-white/65">Usage example</span>
            <span
              class="rounded bg-white/6 px-1.5 py-0.5 text-[10px] text-white/35"
            >
              TypeScript
            </span>
          </div>

          <button
            type="button"
            class="inline-flex items-center gap-1.5 text-xs text-white/40 transition hover:text-amber"
            @click="copyCode"
          >
            <Icon
              :icon="copied ? 'lucide:check' : 'lucide:copy'"
              class="size-3.5"
            />
            {{ copied ? "Copied" : "Copy" }}
          </button>
        </div>

        <pre
          class="overflow-x-auto p-5 font-mono text-[13px] leading-7"
        ><code><span class="text-purple-400">import</span> { <span class="text-blue-300">WilayasStore</span> } <span class="text-purple-400">from</span> <span class="text-emerald-300">"dz-wilayas-core"</span>;

<span class="text-purple-400">const</span> <span class="text-sky-300">store</span> = <span class="text-purple-400">new</span> <span class="text-blue-300">WilayasStore</span>();

<span class="text-white/35">// Get all wilayas</span>
<span class="text-purple-400">const</span> <span class="text-sky-300">wilayas</span> = <span class="text-sky-300">store</span>.<span class="text-amber">getAllWilayas</span>();

<span class="text-white/35">// Find a wilaya by code</span>
<span class="text-purple-400">const</span> <span class="text-sky-300">wilaya</span> = <span class="text-sky-300">store</span>.<span class="text-amber">getWilayaByCode</span>(<span class="text-emerald-300">"16"</span>);

<span class="text-white/35">// Search wilayas</span>
<span class="text-purple-400">const</span> <span class="text-sky-300">results</span> = <span class="text-sky-300">store</span>.<span class="text-amber">searchWilayaByName</span>(<span class="text-emerald-300">"Alger"</span>);

<span class="text-white/35">// Get baladiyat</span>
<span class="text-purple-400">const</span> <span class="text-sky-300">baladiyat</span> = <span class="text-sky-300">store</span>.<span class="text-amber">getBaladiyatByWilayaCode</span>(<span class="text-emerald-300">"16"</span>);</code></pre>
      </div>

      <!-- TIP -->
      <div
        class="mt-5 flex gap-3 rounded-md border-l-2 border-amber/60 bg-amber/4 px-4 py-3"
      >
        <Icon
          icon="lucide:lightbulb"
          class="mt-0.5 size-4 shrink-0 text-amber"
        />
        <div>
          <p class="text-xs font-semibold text-amber">TIP</p>
          <p class="mt-1 text-sm leading-6 text-white/60">
            Wilaya codes are passed as strings in these examples, such as
            <code class="rounded bg-white/6 px-1 text-cream">"16"</code>
            for Algiers.
          </p>
        </div>
      </div>

      <div class="mt-5 flex items-center gap-2 text-sm text-white/45">
        <Icon icon="lucide:arrow-right" class="size-4 shrink-0" />
        <span>
          Need more details?
          <a
            href="#wilayas-store"
            class="font-medium text-sage transition hover:text-amber"
          >
            Explore the API Reference
          </a>
          for methods and types.
        </span>
      </div>
    </section>
  </article>
</template>
