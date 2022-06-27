import Vue from "vue";
import { ActionTree, GetterTree, MutationTree } from "vuex";
import { AppAlert } from "../common/alert";
import { AppBreadcrumb } from "../common/breadcrumb";

export const state = () => ({
  // UI
  alerts: [] as AppAlert[],
  breadcrumbs: [] as AppBreadcrumb[],
  // Lcars

  accessCode: null as string | null,
  uiShowVideo: false as boolean,
});

export type RootState = ReturnType<typeof state>;

export const getters: GetterTree<RootState, RootState> = {
  // Util getters
  alerts: (state) => state.alerts,
  breadcrumbs: (state) => state.breadcrumbs,
  // Lcars
  accessCode: (state) => state.accessCode,
  uiShowVideo: (state) => state.uiShowVideo,
};

export const mutations: MutationTree<RootState> = {
  addAlert: (state, appAlert: AppAlert) => {
    Vue.set(state.alerts, state.alerts.length, appAlert);
  },
  removeAlert: (state, appAlert: AppAlert) => {
    state.alerts.splice(state.alerts.indexOf(appAlert), 1);
  },
  setAlertTimeoutWrapper: (
    _state,
    opts: {
      appAlert: AppAlert;
      callback: (alert: AppAlert) => void;
      millis: number;
    }
  ) => {
    // This setTimeout function needs to be wrapped by a mutation for VueX reasons.
    opts.appAlert.setTimeout(opts.callback, opts.millis);
  },
  setBreadcrumbs: (state, breadcrumbs: AppBreadcrumb[]) => {
    Vue.set(state, "breadcrumbs", breadcrumbs);
  },
  resetApp: (state) => {
    Vue.set(state, "accessCode", null);
    Vue.set(state, "uiShowVideo", false);
  },
  registerLogin: (state, accessCode: string) => {
    Vue.set(state, "accessCode", accessCode);
  },
  setUiShowVideo: (state, value: boolean) => {
    Vue.set(state, "uiShowVideo", value);
  },
};

export const actions: ActionTree<RootState, RootState> = {
  async nuxtServerInit({ dispatch }) {},
  async addAlert({ commit }, appAlert: AppAlert) {
    commit("addAlert", appAlert);
  },
  async resetApp({ commit }) {
    commit("resetApp");
  },
  async registerLogin({ commit }, accessCode: string) {
    commit("registerLogin", accessCode);
  },
  async setUiShowVideo({ commit }, value: boolean) {
    commit("setUiShowVideo", value);
  },
};
