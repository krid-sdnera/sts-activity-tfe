import { sounds } from "~/common/utils/sounds";

export default (_, inject) => {
  inject("sounds", () => {
    return sounds;
  });
};

declare module "vue/types/vue" {
  interface Vue {
    $sounds: () => typeof sounds;
  }
}
