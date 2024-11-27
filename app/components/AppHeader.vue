<script setup lang="ts">
import type { NavItem } from "@nuxt/content";

const navigation = inject<NavItem[]>("navigation", []);

const { header } = useAppConfig();
</script>

<template>
  <UHeader>
    <template #logo>
      <div class="flex items-center gap-2">
        <img
          v-if="header.logo"
          :src="header.logo"
          :alt="header.title"
          class="h-10"
        />
        <span v-else>{{ header.title }}</span>
        <UBadge
          v-if="header.titleBadge"
          :label="header.titleBadge"
          variant="subtle"
          class="mb-0.5"
        />
      </div>
    </template>

    <template v-if="header?.search" #center>
      <UContentSearchButton class="hidden lg:flex" />
    </template>

    <template #right>
      <UContentSearchButton
        v-if="header?.search"
        :label="null"
        class="lg:hidden"
      />

      <template v-if="header?.links">
        <UButton
          v-for="(link, index) of header.links"
          :key="index"
          v-bind="{ color: 'gray', variant: 'link', ...link }"
        />
      </template>
    </template>

    <template #panel>
      <UNavigationTree :links="mapContentNavigation(navigation)" />
    </template>
  </UHeader>
</template>
