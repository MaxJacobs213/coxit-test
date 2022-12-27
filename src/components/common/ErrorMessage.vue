<template>
  <div class="error-message">
    <slot />
  </div>
</template>

<style lang="scss" scoped>
.error-message {
  text-align: center;
  background-color: var(--color-error);
  padding: 8px;
  border-radius: 4px;
}
</style>
