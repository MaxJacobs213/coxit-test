import httpClient from '@/common/http';
import type { GetTracksResponse } from '@/types/GetTracksResponse';
import type { Track } from '@/types/Track';

export async function getTracks(): Promise<Track[]> {
  const {
    data: { nowplaying: tracks },
  } = await httpClient.get<GetTracksResponse>(
    `onair.json&?nocache=${Date.now()}`
  );

  return tracks;
}
