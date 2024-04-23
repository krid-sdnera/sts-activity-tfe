<script setup lang="ts">
import { makeRandomNumber } from "~/common/utils";
const { sounds } = useSounds();

const props = withDefaults(
  defineProps<{
    label?: string;
    color?: number;
    square?: boolean;
    roundedLeft?: boolean;
    roundedRight?: boolean;
    // Pass "disabled" attribute to make it invisible, it'll automatically be
    // applied to <button> as the <button disabled> attribute
    disabled?: boolean;
    // a "blank" prop means the button doesn't do anything and should play
    // the "deny" beep
    blank?: boolean;
    // OTHER TODO PROPS
    // Blinking (look for examples for interval and transition)
    // Transitioning between two colors
  }>(),
  {
    label: makeRandomNumber(5, false),
    color: Math.floor(Math.random() * 9) + 1,
    square: false,
    roundedLeft: false,
    roundedRight: false,
    disabled: false,
    blank: false,
  }
);

const emit = defineEmits<{
  click: [];
}>();

function handleClick(event) {
  emit("click", event);
  if (props.blank === true && sounds.denyBeep1.playing() === false) {
    sounds.denyBeep1.play();
  }
}
</script>

<template>
  <button
    :class="{
      'button-square': props.square,
      'button-rounded-left': props.roundedLeft,
      'button-rounded-right': props.roundedRight,
      'bgcolor-1': props.color === 1,
      'bgcolor-2': props.color === 2,
      'bgcolor-3': props.color === 3,
      'bgcolor-4': props.color === 4,
      'bgcolor-5': props.color === 5,
      'bgcolor-6': props.color === 6,
      'bgcolor-7': props.color === 7,
      'bgcolor-8': props.color === 8,
      'bgcolor-9': props.color === 9,
    }"
    v-on:click="handleClick"
  >
    {{ props.label }}
  </button>
</template>

<style scoped>
button {
  --button-width: 140px;
  --button-height: 58px;

  /* A minimum value; this can be expanded by flexbox spacing */
  --button-spacing: var(--lcars-block-gap);

  appearance: none;
  width: var(--button-width);
  height: var(--button-height);
  border-radius: calc(var(--button-height) / 2);
  border-width: 0;

  display: flex;
  justify-content: right;
  align-items: flex-end;
  padding: 0.2em 20px;
  margin: var(--button-spacing);

  font-family: "Antonio", sans-serif;
  font-size: 1rem;
}

button[disabled] {
  opacity: 0;
}

.button-square {
  border-radius: 0;
}

.button-rounded-left {
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
}

.button-rounded-right {
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
}
</style>
