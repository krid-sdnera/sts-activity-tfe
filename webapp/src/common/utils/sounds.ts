import { Howl } from "howler";

interface SoundsType {
  denyBeep1: Howl;
  panelBeep03: Howl;
  panelBeep08: Howl;
  panelBeep13: Howl;
  panelBeep14: Howl;
  deny: () => void;
  playRandom: () => void;
}

// Global pool of sounds
// As opposed to loading sounds per-component
export const sounds: SoundsType = {} as SoundsType;

export function initSounds() {
  sounds.denyBeep1 = new Howl({
    src: ["/sounds/deny_beep_01.ogg"],
    volume: 0.2,
  });
  // Three beeps in quick succession
  sounds.panelBeep03 = new Howl({
    src: ["/sounds/panel_beep_03.ogg"],
    volume: 0.1,
  });
  sounds.panelBeep08 = new Howl({
    src: ["/sounds/panel_beep_08.ogg"],
    volume: 0.2,
  });
  sounds.panelBeep13 = new Howl({
    src: ["/sounds/panel_beep_13.ogg"],
    volume: 0.2,
  });
  // Two beeps, short silent gap in between
  sounds.panelBeep14 = new Howl({
    src: ["/sounds/panel_beep_14.ogg"],
    volume: 0.1,
  });

  sounds.deny = function () {
    sounds.denyBeep1.play();
  };

  sounds.playRandom = function () {
    switch (Math.floor(Math.random() * 4) + 1) {
      case 1:
        sounds.panelBeep03.play();
        break;
      case 2:
        sounds.panelBeep08.play();
        break;
      case 3:
        sounds.panelBeep13.play();
        break;
      case 4:
        sounds.panelBeep14.play();
        break;
    }
  };
}
