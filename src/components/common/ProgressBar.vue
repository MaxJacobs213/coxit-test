<template>
  <div class="progress-bar">
    <div class="filled-progress" :style="{ width: `${percents}%` }" />
  </div>
</template>

<script setup lang="ts">
withDefaults(
  defineProps<{
    percents?: number;
  }>(),
  {
    percents: 0,
  }
);
</script>

<style lang="scss" scoped>
.progress-bar {
  overflow: hidden;
  background-color: var(--color-background);
  height: 3px;
  border-radius: 4px;
}

.filled-progress {
  height: 100%;
  background-color: var(--color-secondary);
  border-radius: 4px;
  transition: width 0.6s linear;
}
</style>
