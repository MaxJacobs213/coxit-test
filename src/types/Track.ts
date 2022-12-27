export type Status = 'playing' | 'history';

export interface Track {
  artist: string;
  duration: string;
  iTunesTrackUrl: string;
  imageUrl: string;
  previewUrl: string;
  status: Status;
  time: string;
  title: string;
}
