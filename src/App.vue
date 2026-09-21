<script setup lang="ts">
import { Toaster } from "@/components/ui/sonner";
import ScrollThread from "@/components/ScrollThread.vue";
import SiteHeader from "@/components/sections/SiteHeader.vue";
import HeroSection from "@/components/sections/HeroSection.vue";
import WorkSection from "@/components/sections/WorkSection.vue";
import SkillsSection from "@/components/sections/SkillsSection.vue";
import AboutSection from "@/components/sections/AboutSection.vue";
import ResearchSection from "@/components/sections/ResearchSection.vue";
import ContactSection from "@/components/sections/ContactSection.vue";
import SiteFooter from "@/components/sections/SiteFooter.vue";
</script>

<template>
  <a
    href="#work"
    class="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-primary focus:px-4 focus:py-2 focus:text-primary-foreground"
  >
    Skip to content
  </a>

  <SiteHeader />

  <ScrollThread />

  <main>
    <HeroSection />
    <WorkSection />
    <AboutSection />
    <SkillsSection />
    <ResearchSection />
    <ContactSection />
  </main>

  <SiteFooter />

  <Toaster position="bottom-right" rich-colors />
</template>
