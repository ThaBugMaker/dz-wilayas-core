<script setup lang="ts">
import { Icon } from "@iconify/vue";
import { onMounted, ref } from "vue";

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
    class="sticky top-0 z-50 flex h-16 shrink-0 items-center justify-between border-b border-white/10 bg-surface px-6"
  >
    <a
      href="#introduction"
      class="text-base font-bold tracking-tight text-cream"
    >
      DZ Wilayas <span class="text-amber">Core</span>
      <span class="ml-2 text-xs font-normal text-white/40">Docs</span>
    </a>

    <div class="flex items-center gap-3">
      <a
        href="https://github.com/ThaBugMaker/dz-wilayas-core"
        target="_blank"
        rel="noreferrer"
        class="inline-flex items-center gap-2 rounded-md border border-white/10 px-3 py-2 text-xs text-white/75 transition hover:border-amber/50 hover:text-amber"
      >
        <Icon icon="lucide:star" class="size-3.5" />
        Star
        <span class="rounded bg-white/10 px-1.5 py-0.5 text-amber">
          {{ githubStars?.toLocaleString() ?? "—" }}
        </span>
      </a>

      <a
        href="https://www.npmjs.com/package/dz-wilayas-core"
        target="_blank"
        rel="noreferrer"
        class="inline-flex items-center gap-2 rounded-md border border-white/10 px-3 py-2 text-xs text-white/75 transition hover:border-amber/50 hover:text-amber"
      >
        <Icon icon="simple-icons:npm" class="size-4" />
        npm
        <span class="rounded bg-white/10 px-1.5 py-0.5 text-amber">
          {{ npmDownloads?.toLocaleString() ?? "—" }}
        </span>
        <Icon icon="lucide:external-link" class="size-3" />
      </a>
    </div>
  </header>
</template>
