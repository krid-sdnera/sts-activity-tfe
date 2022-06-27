const lcarsColourOptions = [
  "--lcars-color-a1",
  "--lcars-color-a2",
  "--lcars-color-a3",
  "--lcars-color-a4",
  "--lcars-color-a5",
  "--lcars-color-a6",
  "--lcars-color-a7",
  "--lcars-color-a8",
  "--lcars-color-a9",
];
export default (_, inject) => {
  inject("lcarsColour", () => {
    const colour =
      lcarsColourOptions[
        Math.floor(Math.random() * lcarsColourOptions.length) + 1
      ];
    return `var(${colour})`;
  });
};

declare module "vue/types/vue" {
  interface Vue {
    $lcarsColour: () => string;
  }
}
