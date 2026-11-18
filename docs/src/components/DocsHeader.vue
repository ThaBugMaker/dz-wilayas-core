<script setup lang="ts">
import { Icon } from "@iconify/vue";
import { onMounted, ref } from "vue";

defineProps<{
  appVersion?: string;
}>();

const githubStars = ref<number | null>(null);
const npmDownloads = ref<number | null>(null);

const CACHE_TTL = 24 * 60 * 60 * 1000;

function getCache(key: string) {
  try {
    const cached = localStorage.getItem(key);
    if (!cached) return null;

    const data = JSON.parse(cached);

    return {
      value: data.value as number,
      fresh: Date.now() < data.expiresAt,
    };
  } catch {
    return null;
  }
}

function setCache(key: string, value: number) {
  try {
    localStorage.setItem(
      key,
      JSON.stringify({
        value,
        expiresAt: Date.now() + CACHE_TTL,
      }),
    );
  } catch {
    // Storage unavailable; API values still work.
  }
}

async function loadMetric(
  key: string,
  url: string,
  extract: (data: any) => number,
  target: typeof githubStars,
) {
  const cached = getCache(key);

  if (cached) {
    target.value = cached.value;

    if (cached.fresh) return;
  }

  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error("API request failed");

    const data = await response.json();
    const value = extract(data);

    if (!Number.isFinite(value)) throw new Error("Invalid API response");

    target.value = value;
    setCache(key, value);
  } catch {
    // Keep cached value as fallback.
  }
}

onMounted(() => {
  loadMetric(
    "dz-wilayas-github-stars",
    "https://api.github.com/repos/ThaBugMaker/dz-wilayas-core/stargazers/count",
    (data) => data.count,
    githubStars,
  );

  loadMetric(
    "dz-wilayas-npm-downloads",
    "https://api.npmjs.org/downloads/point/last-month/dz-wilayas-core",
    (data) => data.downloads,
    npmDownloads,
  );
});
</script>

<template>
  <header
    class="sticky top-0 z-50 flex h-16 shrink-0 items-center justify-between gap-2 border-b border-white/10 bg-surface px-3 sm:px-6 scroll-mt-12"
  >
    <a
      href="/"
      class="min-w-0 text-sm font-bold tracking-tight text-cream sm:text-base"
    >
      DZ Wilayas <span class="text-amber">Core</span>
      <span class="hidden text-xs font-normal text-white/40 sm:inline"
        >Docs</span
      >
      <span
        class="ml-1 text-xs font-normal tracking-wider text-white/40 sm:ml-2 sm:text-sm"
      >
        · v{{ appVersion ?? "1.1.0" }}
      </span>
    </a>

    <div class="flex shrink-0 items-center gap-2 sm:gap-3">
      <a
        href="https://github.com/ThaBugMaker/dz-wilayas-core"
        target="_blank"
        rel="noreferrer"
        aria-label="Star on GitHub"
        class="inline-flex items-center gap-1.5 rounded-md border border-white/10 px-2 py-2 text-xs text-white/75 transition hover:border-amber/50 hover:text-amber sm:gap-2 sm:px-3"
      >
        <Icon icon="lucide:star" class="size-3.5" />
        <span class="hidden sm:inline">Star</span>
        <span class="rounded bg-white/10 px-1.5 py-0.5 text-amber">
          {{ githubStars?.toLocaleString() ?? "—" }}
        </span>
      </a>

      <a
        href="https://www.npmjs.com/package/dz-wilayas-core"
        target="_blank"
        rel="noreferrer"
        aria-label="View package on npm"
        class="inline-flex items-center gap-1.5 rounded-md border border-white/10 px-2 py-2 text-xs text-white/75 transition hover:border-amber/50 hover:text-amber sm:gap-2 sm:px-3"
      >
        <Icon icon="simple-icons:npm" class="size-4" />
        <span class="hidden sm:inline">npm</span>
        <span class="rounded bg-white/10 px-1.5 py-0.5 text-amber">
          {{ npmDownloads?.toLocaleString() ?? "—" }}
        </span>
        <Icon icon="lucide:external-link" class="hidden size-3 sm:block" />
      </a>
    </div>
  </header>
</template>
