<script setup lang="ts">
import { onMounted, onBeforeUnmount, ref } from "vue";
import DocsHeader from "./components/DocsHeader.vue";
import DocsSidebar from "./components/DocsSidebar.vue";
import GettingStarted from "./components/GettingStarted.vue";
import ExplorerSection from "./components/ExplorerSection.vue";
import ApiSection from "./components/ApiSection.vue";
import AppFooter from "./components/AppFooter.vue";

const sectionIds = [
  "introduction",
  "installation",
  "quick-start",
  "wilayas-store",
  "methods",
  "types",
  "explorer",
] as const;

type SectionId = (typeof sectionIds)[number];

const activeSection = ref<SectionId>("introduction");
const mainContent = ref<HTMLElement | null>(null);

let observer: IntersectionObserver | null = null;
let sectionElements: HTMLElement[] = [];
let pendingSection: SectionId | null = null;
let pendingDirection: "up" | "down" | null = null;
function handleNavigationClick(event: MouseEvent) {
  const link = (event.target as HTMLElement).closest<HTMLAnchorElement>(
    'a[href^="#"]',
  );

  const id = link?.hash.slice(1) as SectionId | undefined;
  const main = mainContent.value;

  if (!id || !sectionIds.includes(id) || !main) return;

  const target = main.querySelector<HTMLElement>(`#${id}`);
  if (!target) return;

  const activationPoint =
    main.getBoundingClientRect().top + main.clientHeight * 0.2;

  pendingDirection =
    target.getBoundingClientRect().top > activationPoint ? "down" : "up";

  pendingSection = id;
  activeSection.value = id;
}
function updateActiveSection() {
  const main = mainContent.value;
  if (!main || !sectionElements.length) return;

  const activationPoint =
    main.getBoundingClientRect().top + main.clientHeight * 0.2;

  if (pendingSection && pendingDirection) {
    const target = main.querySelector<HTMLElement>(`#${pendingSection}`);

    if (target) {
      const targetTop = target.getBoundingClientRect().top;

      if (
        (pendingDirection === "down" && targetTop > activationPoint) ||
        (pendingDirection === "up" && targetTop < activationPoint)
      ) {
        return;
      }
    }

    pendingSection = null;
    pendingDirection = null;
  }
  const currentSection =
    [...sectionElements]
      .reverse()
      .find(
        (section) => section.getBoundingClientRect().top <= activationPoint,
      ) ?? sectionElements[0];

  if (!currentSection) return;

  const id = currentSection.id as SectionId;
  activeSection.value = id;

  const nextUrl = `${window.location.pathname}${window.location.search}#${id}`;

  if (window.location.hash !== `#${id}`) {
    window.history.replaceState(window.history.state, "", nextUrl);
  }
}

function handleHashChange() {
  const id = window.location.hash.slice(1) as SectionId;

  if (sectionIds.includes(id)) {
    activeSection.value = id;
  }
}

onMounted(() => {
  const main = mainContent.value;
  if (!main) return;

  sectionElements = sectionIds
    .map((id) => main.querySelector<HTMLElement>(`#${id}`))
    .filter((section): section is HTMLElement => section !== null);

  observer = new IntersectionObserver(() => updateActiveSection(), {
    root: main,
    rootMargin: "0px 0px -80% 0px",
    threshold: 0,
  });

  sectionElements.forEach((section) => observer?.observe(section));

  window.addEventListener("hashchange", handleHashChange);
  document.addEventListener("click", handleNavigationClick, true);
  const initialHash = window.location.hash.slice(1) as SectionId;

  if (sectionIds.includes(initialHash)) {
    main.querySelector<HTMLElement>(`#${initialHash}`)?.scrollIntoView({
      block: "start",
    });
    activeSection.value = initialHash;
  } else {
    updateActiveSection();
  }
});

onBeforeUnmount(() => {
  observer?.disconnect();
  window.removeEventListener("hashchange", handleHashChange);
  document.addEventListener("click", handleNavigationClick, true);
});
</script>

<template>
  <div class="flex h-screen flex-col overflow-hidden bg-surface">
    <DocsHeader />

    <div class="flex min-h-0 flex-1">
      <DocsSidebar :active-section="activeSection" />

      <main
        ref="mainContent"
        class="min-w-0 flex-1 overflow-y-auto scroll-smooth"
      >
        <div class="w-full px-8 py-10 lg:px-10">
          <GettingStarted />
          <ApiSection />
          <ExplorerSection />
        </div>
      </main>
    </div>

    <AppFooter />
  </div>
</template>
