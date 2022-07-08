import Vue from "vue";
import { ActionTree, GetterTree, MutationTree } from "vuex";
import { AppAlert } from "../common/alert";
import { AppBreadcrumb } from "../common/breadcrumb";

interface Mission {
  name: string;
}

export const state = () => ({
  // UI
  alerts: [] as AppAlert[],
  breadcrumbs: [] as AppBreadcrumb[],
  // Lcars

  accessCode: null as string | null,
  uiShowVideo: false as boolean,
  dialogStatus: {} as Record<string, boolean>,

  // Mission
  mission: null as Mission | null,
});

export type RootState = ReturnType<typeof state>;

export const getters: GetterTree<RootState, RootState> = {
  // Util getters
  alerts: (state) => state.alerts,
  breadcrumbs: (state) => state.breadcrumbs,
  // Lcars
  accessCode: (state) => state.accessCode,
  uiShowVideo: (state) => state.uiShowVideo,
  anyDialogOpen: (state) =>
    Object.values(state.dialogStatus).some((status) => status),

  // Mission
  missionStarted: (state) => !!state.mission,
  mission: (state) => state.mission,
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
    Vue.set(state, "mission", false);
  },
  registerLogin: (state, accessCode: string) => {
    Vue.set(state, "accessCode", accessCode);
  },
  setUiShowVideo: (state, value: boolean) => {
    Vue.set(state, "uiShowVideo", value);
  },
  setDialogStatus: (state, value: boolean) => {
    Object.entries(value).forEach(([name, status]) =>
      Vue.set(state.dialogStatus, name, status)
    );
  },
  setMission: (state, mission: Mission) => {
    Vue.set(state, "mission", mission);
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
  async setDialogStatus({ commit }, value: Record<string, boolean>) {
    commit("setDialogStatus", value);
  },
  async pickMission({ commit }) {
    const missions = ["the-cave", "the-lake"];

    const mission: Mission = {
      name: missions[Math.floor(Math.random() * missions.length)],
    };
    commit("setMission", mission);
  },
};
