<script setup lang="ts">
import { AppBreadcrumb } from "~/common/breadcrumb";

const store = useStore();

const breadcrumbs = computed((): AppBreadcrumb[] => {
  const crumbs = store.getters.breadcrumbs.value;

  return crumbs.length > 0
    ? crumbs
    : [
        new AppBreadcrumb({
          to: null,
          label: "Home",
        }),
      ];
});
</script>

<template>
  <v-container>
    <v-row>
      <v-col class="pb-0">
        <v-card>
          <v-card-text class="d-flex flex-row justify-space-between">
            <!-- Breadcrumbs -->
            <ol class="breadcrumbs pl-0">
              <li
                class="d-inline"
                v-for="(breadcrumb, i) in breadcrumbs"
                v-bind:key="breadcrumb.label"
              >
                <nuxt-link
                  v-if="breadcrumb.to !== null"
                  :to="breadcrumb.to"
                  class="text--primary"
                >
                  {{ breadcrumb.label }}
                </nuxt-link>
                <span v-else class="text--secondary">
                  {{ breadcrumb.label }}
                </span>
                <template v-if="i !== breadcrumbs.length - 1"> / </template>
              </li>
            </ol>

            <v-spacer></v-spacer>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<style lang="css" scoped>
.v-card__text {
  font-size: 1.2rem;
}
.breadcrumbs ol {
  list-style-type: none;
}
.breadcrumbs ol li a {
  text-decoration: none;
}
.breadcrumbs ol li a:hover {
  text-decoration: underline !important;
}
.v-btn--icon.v-size--small,
.v-btn--icon.v-size--small .v-icon {
  /* Reduce the height from 24px so the elements
     do not push container in the vertical axis */
  height: 22px;
  width: 22px;
  font-size: 22px;
}
.v-btn--active::before {
  /* Remove circular opacity when the link is active */
  opacity: 0;
}
</style>
