<template>
  <div class="current-page">
    <div>
      <button red block @click="genStory()">[New story plz testing]</button>
      <button red block @click="storyProgression = storyProgression + 1">
        [Next Line]
      </button>
      <p>{{ nextMessageAt | duration }}</p>
    </div>

    <div>
      <p v-for="line in story" :key="line">{{ line }}</p>
    </div>
  </div>
</template>

<script lang="ts">
import { DateTime, Duration, Interval } from "luxon";

function get_random(list) {
  return list[Math.floor(Math.random() * list.length)];
}

export default {
  data() {
    return {
      nextMessageAt: null,
      storyLines: [],
      storyProgression: 0,
      storyParts: [
        [
          ["Our", "Starfleet Command's"],
          ["long range sensors", "interplanetary sensors"],
          ["have picked up", "have identified"],
          ["#mineral# signals"],
          ["."],
        ],
        [
          [
            "We thought",
            "Starfleet Command thought",
            "Starfleet Inteligence thought",
          ],
          ["the planet was", "the star system was"],
          ["uninhabited", "too hostile for life"],
          ["."],
        ],
        [
          [
            "Our Captin has ordered",
            "It has been agreed that",
            "It's in our best interests to send",
          ],
          ["a landing party", "a landing mission"],
          ["is despached to", "departs for", "gets beemed downto "],
          ["the planets surface"],
          ["."],
        ],
        [["The landing party has reached the planet's surface."]],
        [
          [
            "Establish Communicate with the landing party to identify things that are arond them.",
          ],
          ["Do they see a"],
          ["cave", "forest", "ravine"],
          ["?"],
        ],
        [
          ["Ask the landing party to check they have their tricorders"],
          ["Give them 5 minutes to follow the faint #mineral# signals"],
        ],
        [
          [
            "they might find a door with a lock on it, with a riddle next to the door,",
          ],
        ],
        [["Get them to solve the puzzle with you, the commanding officer"]],
        // [["find a beeping thing,  find a borg in a vault"]],
        // [["finds signs of cumbustion on the planet to we landed there"]],
      ],
    };
  },
  computed: {
    story() {
      return this.storyLines.slice(0, this.storyProgression);
    },
  },
  mounted() {
    // this.$setBreadcrumbs([{ to: null, label: "Home" }]);
    this.genStory();
    setInterval(this.processInterval, 5000);
  },
  methods: {
    genStory() {
      this.storyProgression = 0;
      const mineral = "Durium Alloy";

      const story = this.storyParts.flatMap((line) => {
        const outLine = line.map((lineSegment) => {
          return get_random(lineSegment).replace("#mineral#", mineral);
        });
        return outLine.join(" ");
      });

      this.storyLines = story;
    },
    processInterval() {
      this.storyProgression = this.storyProgression + 1;

      // const now = DateTime.now();
      // const nextTime = now.plus({ minutes: 1 });
      // this.nextMessageAt = now;

      // if (Interval.before(now, this.nextMessageAt)) {
      //   this.nextMessageAt = now;
      //   this.storyProgression = this.storyProgression + 1;
      // } else {
      //   this.nextMessageAt = this.nextMessageAt;
      // }
    },
  },
};
</script>

<style scoped>
.current-page {
  height: 100%;
  width: 100%;
  color: white;
}
</style>
