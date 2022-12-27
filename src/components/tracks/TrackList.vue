<template>
  <TransitionGroup name="list" tag="ul" class="track-list">
    <li v-for="item in items" :key="item.iTunesTrackUrl" class="track-item">
      <TrackCard
        :title="item.title"
        :artist="item.artist"
        album="empty (see README.MD)"
        :duration="item.duration"
        :start-time="item.time"
        :image-url="item.imageUrl"
        :status="item.status"
        :href="item.iTunesTrackUrl"
      />
    </li>
  </TransitionGroup>
</template>

<script setup lang="ts">
import TrackCard from '@/components/tracks/TrackCard.vue';
import type { Track } from '@/types/Track';

defineProps<{
  items: Track[];
}>();
</script>

<style lang="scss" scoped>
.track-list {
  padding: 32px 16px;
}

.track-item {
  margin-bottom: 16px;

  &:last-of-type {
    margin-bottom: 0;
  }
}
</style>
