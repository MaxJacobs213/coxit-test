<template>
  <component
    :is="href ? 'a' : 'div'"
    class="track-card"
    v-bind="additionalAttrs"
  >
    <div>
      <div><strong>Title:</strong> {{ title }}</div>
      <div><strong>Artist:</strong> {{ artist }}</div>
      <div><strong>Album:</strong> {{ album }}</div>
      <div><strong>Duration:</strong> {{ duration }}</div>
      <div><strong>Started at</strong> {{ formattedStartTime }}</div>

      <ProgressBar
        v-if="props.status === 'playing'"
        class="playing-progress-bar"
        :percents="progressPercents"
      />
    </div>

    <div class="img-box">
      <img :src="imageUrl" :alt="title" />
    </div>
  </component>
</template>

<script setup lang="ts">
import ProgressBar from '@/components/common/ProgressBar.vue';
import type { Status } from '@/types/Track';
import { computed, ref, watchEffect } from 'vue';
import { useIntervalFn } from '@vueuse/core';
import { getEndDate, getStartFromEndDatesPercents } from '@/helpers/date';

interface Props {
  title?: string;
  artist?: string;
  album?: string;
  duration?: string;
  startTime: string;
  imageUrl?: string;
  status?: Status;
  href?: string;
}

const props = withDefaults(defineProps<Props>(), {
  duration: '00:00:00',
  imageUrl: 'images/track-no-cover.jpg',
  status: 'history',
});

const additionalAttrs = computed(() =>
  props.href
    ? {
        href: props.href,
        target: '_blank',
      }
    : {}
);

const formattedStartTime = computed(() =>
  new Date(props.startTime).toLocaleTimeString()
);

const progressPercents = ref(0);
let clearProgressInterval = () => {};
const setProgressPercents = () => {
  const percents = getStartFromEndDatesPercents(
    props.startTime,
    getEndDate(props.startTime, props.duration)
  );

  progressPercents.value = percents;

  if (percents >= 100) {
    return clearProgressInterval();
  }
};

watchEffect(() => {
  if (props.status === 'playing') {
    clearProgressInterval = useIntervalFn(setProgressPercents, 1000, {
      immediateCallback: true,
    }).pause;
  } else {
    clearProgressInterval();
  }
});
</script>

<style lang="scss" scoped>
.track-card {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 32px;
  line-height: 1.7;
  background-color: var(--color-primary);
  border-radius: 8px;
  transition: 0.2s linear box-shadow;

  &:hover {
    box-shadow: rgba(0, 0, 0, 0.65) 0 5px 15px;
  }
}

.img-box {
  width: 150px;
  height: 150px;
  margin-left: 32px;
  flex-shrink: 0;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 16px;
  }
}

.playing-progress-bar {
  width: 150px;
  margin-top: 12px;
}
</style>
