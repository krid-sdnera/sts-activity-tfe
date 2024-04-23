import { initSounds, sounds } from "~/common/utils/sounds";

export function useSounds() {
  if (Object.keys(sounds).length === 0) {
    initSounds();
  }

  return { sounds, initSounds };
}
