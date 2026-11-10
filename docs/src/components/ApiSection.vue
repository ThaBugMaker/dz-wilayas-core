<script setup lang="ts">
import { Icon } from "@iconify/vue";
import { ref } from "vue";

const copied = ref(false);
const aliasCopied = ref(false);

const aliasCode = `import { WilayasStore as AlgeriaData } from "dz-wilayas-core";;

const data = new AlgeriaData();`;
const copyText = async (value: string, state: typeof copied) => {
  try {
    await navigator.clipboard.writeText(value);
    state.value = true;
    window.setTimeout(() => (state.value = false), 1800);
  } catch {
    state.value = false;
  }
};

const copyAliasCode = () => copyText(aliasCode, aliasCopied);
</script>

<template>
  <section id="api" class="w-full scroll-mt-8">
    <!-- WilayasStore -->
    <section id="wilayas-store" class="scroll-mt-8 mt-8">
      <div class="mb-4 flex items-center gap-1.5 text-xs">
        <span class="text-white/40">Docs</span>
        <Icon icon="lucide:chevron-right" class="size-3 text-white/20" />
        <span class="text-white/40">API Reference</span>
        <Icon icon="lucide:chevron-right" class="size-3 text-white/20" />
        <span class="font-medium text-amber">WilayasStore</span>
      </div>

      <h1 class="text-3xl font-bold tracking-tight text-white">WilayasStore</h1>

      <p class="mt-3 max-w-2xl text-sm leading-6 text-white/60">
        The main class exported by
        <code class="text-amber">dz-wilayas-core</code>. It provides methods to
        access, search, and retrieve Algeria's wilayas and baladiyat.
      </p>
      <!-- NOTE -->
      <div
        class="mt-5 rounded-md border-l-2 border-sage/60 bg-sage/4 px-4 py-3"
      >
        <div class="flex items-center gap-2 text-xs font-semibold text-sage">
          <Icon icon="lucide:info" class="size-3.5" />
          NOTE
        </div>

        <p class="mt-2 text-sm leading-6 text-white/60">
          <code class="text-cream">WilayasStore</code> is the exported class
          name, not a required variable name. You can rename the import using
          JavaScript's <code class="text-amber">as</code> syntax.
        </p>

        <div
          class="mt-3 overflow-hidden rounded-md border border-white/8 bg-[#0b100d]"
        >
          <div
            class="flex items-center justify-between border-b border-white/8 px-3 py-2"
          >
            <span class="text-[11px] text-white/35">TypeScript</span>

            <button
              type="button"
              class="inline-flex items-center gap-1.5 text-[11px] text-white/40 transition hover:text-amber"
              @click="copyAliasCode"
            >
              <Icon
                :icon="aliasCopied ? 'lucide:check' : 'lucide:copy'"
                class="size-3"
              />
              {{ aliasCopied ? "Copied" : "Copy" }}
            </button>
          </div>

          <pre
            class="overflow-x-auto p-3 font-mono text-[12px] leading-6"
          ><code><span class="text-purple-400">import</span> { <span class="text-blue-300">WilayasStore</span> <span class="text-purple-400">as</span> <span class="text-blue-300">AlgeriaData</span> } <span class="text-purple-400">from</span> <span class="text-emerald-300">"dz-wilayas-core"</span>;

<span class="text-purple-400">const</span> <span class="text-sky-300">data</span> = <span class="text-purple-400">new</span> <span class="text-blue-300">AlgeriaData</span>();</code></pre>
        </div>
      </div>
      <h2 class="mt-8 text-sm font-semibold tracking-tight text-white/80">
        Initialization
      </h2>

      <p class="mt-2 text-sm leading-6 text-white/55">
        Import <code class="text-cream">WilayasStore</code> and create an
        instance to access the dataset.
      </p>

      <div
        class="mt-4 overflow-hidden rounded-lg border border-white/10 bg-[#0b100d]"
      >
        <div
          class="flex items-center justify-between border-b border-white/8 px-4 py-3"
        >
          <span class="text-xs text-white/40">TypeScript</span>
        </div>

        <pre
          class="overflow-x-auto p-4 text-sm leading-7"
        ><code><span class="text-purple-400">import</span> { <span class="text-blue-300">WilayasStore</span> } <span class="text-purple-400">from</span> <span class="text-emerald-300">"dz-wilayas-core"</span>;

<span class="text-purple-400">const</span> <span class="text-sky-300">store</span> = <span class="text-purple-400">new</span> <span class="text-blue-300">WilayasStore</span>();</code></pre>
      </div>
    </section>

    <!-- Methods -->
    <section id="methods" class="mt-14 scroll-mt-8">
      <h2 class="text-2xl font-bold tracking-tight text-white">Methods</h2>

      <p class="mt-3 text-sm leading-6 text-white/55">
        <code class="text-cream">WilayasStore</code> exposes four methods for
        retrieving and searching administrative data.
      </p>

      <div class="mt-6 space-y-4">
        <article class="rounded-lg border border-white/10 bg-[#0b100d] p-5">
          <code class="text-sm font-semibold text-amber">
            getAllWilayas()
          </code>
          <p class="mt-2 text-sm leading-6 text-white/55">
            Returns the complete list of wilayas.
          </p>
          <div class="mt-4 flex items-center gap-2 text-xs">
            <span class="text-white/35">Returns</span>
            <code class="text-sage">Wilaya[]</code>
          </div>
        </article>

        <article class="rounded-lg border border-white/10 bg-[#0b100d] p-5">
          <code class="text-sm font-semibold text-amber">
            getWilayaByCode(code: string)
          </code>
          <p class="mt-2 text-sm leading-6 text-white/55">
            Finds a wilaya using its administrative code.
          </p>
          <div class="mt-4 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs">
            <span class="text-white/35">
              Parameter:
              <code class="text-sage">code: string</code>
            </span>
            <span class="text-white/35">
              Returns:
              <code class="text-sage">Wilaya | undefined</code>
            </span>
          </div>
        </article>

        <article class="rounded-lg border border-white/10 bg-[#0b100d] p-5">
          <code class="text-sm font-semibold text-amber">
            searchWilayaByName(name: string)
          </code>
          <p class="mt-2 text-sm leading-6 text-white/55">
            Searches wilayas by name. Matching is case-insensitive.
          </p>
          <div class="mt-4 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs">
            <span class="text-white/35">
              Parameter:
              <code class="text-sage">name: string</code>
            </span>
            <span class="text-white/35">
              Returns:
              <code class="text-sage">Wilaya[]</code>
            </span>
          </div>
        </article>

        <article class="rounded-lg border border-white/10 bg-[#0b100d] p-5">
          <code class="text-sm font-semibold text-amber">
            getBaladiyatByWilayaCode(code: string)
          </code>
          <p class="mt-2 text-sm leading-6 text-white/55">
            Returns all baladiyat belonging to the specified wilaya.
          </p>
          <div class="mt-4 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs">
            <span class="text-white/35">
              Parameter:
              <code class="text-sage">code: string</code>
            </span>
            <span class="text-white/35">
              Returns:
              <code class="text-sage">Baladiya[]</code>
            </span>
          </div>
        </article>
      </div>
    </section>

    <!-- Types -->
    <section id="types" class="mt-14 scroll-mt-8">
      <h2 class="text-2xl font-bold tracking-tight text-white">Types</h2>

      <p class="mt-3 text-sm leading-6 text-white/55">
        The package exports TypeScript interfaces for both administrative data
        structures. Import them directly when defining your own types.
      </p>

      <div
        class="mt-5 rounded-md border-l-2 border-sage/60 bg-sage/4 px-4 py-3"
      >
        <div class="flex items-center gap-2 text-xs font-semibold text-sage">
          <Icon icon="lucide:info" class="size-3.5" />
          NOTE
        </div>
        <p class="mt-2 text-sm leading-6 text-white/60">
          Both types are available out of the box and include TypeScript
          declarations for IDE autocompletion.
        </p>
      </div>

      <!-- Wilaya -->
      <div class="mt-7">
        <div class="flex items-center justify-between">
          <h3 class="text-base font-semibold text-white">Wilaya</h3>
        </div>

        <p class="mt-2 text-sm leading-6 text-white/55">
          Represents a wilaya in the administrative dataset.
        </p>

        <div
          class="mt-3 overflow-hidden rounded-lg border border-white/10 bg-[#0b100d]"
        >
          <div class="border-b border-white/8 px-4 py-3">
            <span class="text-xs text-white/40">TypeScript</span>
          </div>
          <pre
            class="overflow-x-auto p-4 text-sm leading-7"
          ><code><span class="text-purple-400">export interface</span> <span class="text-blue-300">Wilaya</span> {
  <span class="text-sky-300">id</span>: <span class="text-emerald-300">string</span>;
  <span class="text-sky-300">code</span>: <span class="text-emerald-300">string</span>;
  <span class="text-sky-300">name</span>: <span class="text-emerald-300">string</span>;
  <span class="text-sky-300">ar_name</span>: <span class="text-emerald-300">string</span>;
}</code></pre>
        </div>
      </div>

      <!-- Baladiya -->
      <div class="mt-8">
        <div class="flex items-center justify-between">
          <h3 class="text-base font-semibold text-white">Baladiya</h3>
        </div>

        <p class="mt-2 text-sm leading-6 text-white/55">
          Represents a baladiya and its relationship to a parent wilaya.
        </p>

        <div
          class="mt-3 overflow-hidden rounded-lg border border-white/10 bg-[#0b100d]"
        >
          <div class="border-b border-white/8 px-4 py-3">
            <span class="text-xs text-white/40">TypeScript</span>
          </div>
          <pre
            class="overflow-x-auto p-4 text-sm leading-7"
          ><code><span class="text-purple-400">export interface</span> <span class="text-blue-300">Baladiya</span> {
  <span class="text-sky-300">id</span>: <span class="text-emerald-300">string</span>;
  <span class="text-sky-300">wilaya_id</span>: <span class="text-emerald-300">string</span>;
  <span class="text-sky-300">name</span>: <span class="text-emerald-300">string</span>;
  <span class="text-sky-300">ar_name</span>: <span class="text-emerald-300">string</span>;
}</code></pre>
        </div>
      </div>

      <div
        class="mt-6 rounded-md border-l-2 border-sage/60 bg-sage/4 px-4 py-3"
      >
        <div class="flex items-center gap-2 text-xs font-semibold text-sage">
          <Icon icon="lucide:info" class="size-3.5" />
          NOTE
        </div>

        <p class="mt-2 text-sm leading-6 text-white/60">
          All administrative data is preloaded from JSON, so the methods access
          the bundled dataset without requiring external API requests.
        </p>
      </div>
    </section>
  </section>
</template>
