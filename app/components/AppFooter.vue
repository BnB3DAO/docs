<script setup lang="ts">
const { footer } = useAppConfig()
</script>

<template>
  <UFooter>
    <template #left>
      Copyright © {{ new Date().getFullYear() }}. All rights reserved.
    </template>

    <template #right>
      <UButton
        to="https://t.me/+SHSXIUyxXWwxYWVl"
        target="_blank"
        icon="i-simple-icons-telegram"
        aria-label="Telegram"
        color="gray"
        variant="ghost"
      />
      <UButton
        to="https://discord.gg/ewJcxe2TUG"
        target="_blank"
        icon="i-simple-icons-discord"
        aria-label="Discord"
        color="gray"
        variant="ghost"
      />
      <UButton
        to="https://x.com/HelloRWA"
        target="_blank"
        icon="i-simple-icons-x"
        aria-label="X"
        color="gray"
        variant="ghost"
      />
      <UButton
        to="https://github.com/BnB3DAO"
        target="_blank"
        icon="i-simple-icons-github"
        aria-label="GitHub"
        color="gray"
        variant="ghost"
      />
      <UColorModeButton size="sm" />
    </template>
  </UFooter>
</template>
