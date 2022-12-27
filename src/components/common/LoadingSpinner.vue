<template>
  <div class="loading-spinner" />
</template>

<style lang="scss" scoped>
.loading-spinner,
.loading-spinner:before,
.loading-spinner:after {
  background-color: var(--color-secondary);
  width: 1em;
  height: 4em;
  animation: load 1s infinite ease-in-out;
}

.loading-spinner:before,
.loading-spinner:after {
  content: '';
  position: absolute;
  top: 0;
}

.loading-spinner {
  position: relative;
  color: var(--color-secondary);
  text-indent: -9999em;
  margin: 88px auto;
  font-size: 11px;
  transform: translateZ(0);
  animation-delay: -0.16s;
}

.loading-spinner:before {
  left: -1.5em;
  animation-delay: -0.32s;
}

.loading-spinner:after {
  left: 1.5em;
}

@keyframes load {
  0%,
  80%,
  100% {
    box-shadow: 0 0;
    height: 4em;
  }

  40% {
    box-shadow: 0 -2em;
    height: 5em;
  }
}
</style>
