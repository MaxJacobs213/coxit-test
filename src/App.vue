<template>
  <div class="wrapper">
    <Transition name="fade">
      <div v-if="isError && !tracks.length" class="error-box">
        <ErrorMessage>
          Something went wrong. Please check README.MD file for detailed
          information
        </ErrorMessage>
      </div>

      <TrackList v-else-if="isLoaded" :items="tracks" />
      <LoadingOverlay v-else />
    </Transition>
  </div>
</template>

<script setup lang="ts">
import TrackList from '@/components/tracks/TrackList.vue';
import LoadingOverlay from '@/components/common/LoadingOverlay.vue';
import ErrorMessage from '@/components/common/ErrorMessage.vue';
import { ref } from 'vue';
import { getTracks } from '@/services/TrackService';
import { useIntervalFn } from '@vueuse/core';
import type { Track } from '@/types/Track';

const tracks = ref<Track[]>([]);
const isLoaded = ref(false);
const isError = ref(false);

const loadTracks = async () => {
  try {
    tracks.value = await getTracks();
    isError.value = false;
    isLoaded.value = true;
  } catch (error) {
    isError.value = true;
    console.error(error);
  }
};

useIntervalFn(loadTracks, 2000, { immediateCallback: true });
</script>

<style lang="scss" scoped>
.wrapper {
  width: 100%;
  max-width: 500px;
  margin: 0 auto;
}

.error-box {
  padding-top: 50px;
}
</style>
