import Vue from "vue";
// import { ActionTreeGetterTreeMutationTree } from "vuex";
import { AppAlert, type AppAlertOptions } from "../common/alert";
import { AppBreadcrumb } from "../common/breadcrumb";

import { useStorage } from "@vueuse/core";

interface Mission {
  name: string;
}

// UI
const alerts = ref<AppAlert[]>([]);
const breadcrumbs = ref<AppBreadcrumb[]>([]);
// Lcars

const accessCode = useAccess().accessCode;
const uiShowVideo = useStorage<boolean>("uiShowVideo", false);
const dialogStatus = ref<Record<string, boolean>>({});

// Mission
const mission = useStorage<Mission | null>("mission", null);

export const getters = {
  // Util getters
  alerts: alerts,
  breadcrumbs: breadcrumbs,

  // Lcars
  accessCode: accessCode,
  uiShowVideo: uiShowVideo,
  anyDialogOpen: computed(() =>
    Object.values(dialogStatus).some((status) => status)
  ),

  // Mission
  missionStarted: !!mission,
  mission: mission,

  missions: [{ name: "the-cave" }, { name: "the-lake" }],
} as const;

export const mutations = {
  addAlert: (appAlert: AppAlert) => {
    alerts.value.push(appAlert);
  },
  createAlert: (options: AppAlertOptions) => {
    mutations.addAlert(new AppAlert(options));
  },
  removeAlert: (appAlert: AppAlert) => {
    alerts.value.splice(alerts.value.indexOf(appAlert), 1);
  },
  setAlertTimeoutWrapper: (opts: {
    appAlert: AppAlert;
    callback: (alert: AppAlert) => void;
    millis: number;
  }) => {
    // This setTimeout function needs to be wrapped by a mutation for VueX reasons.
    opts.appAlert.setTimeout(opts.callback, opts.millis);
  },
  setBreadcrumbs: (bcrumbs: AppBreadcrumb[]) => {
    breadcrumbs.value = bcrumbs;
  },
  resetApp: () => {
    accessCode.value = null;
    uiShowVideo.value = false;
    mission.value = null;
  },
  registerLogin: (newAccessCode: string) => {
    accessCode.value = newAccessCode;
  },
  setUiShowVideo: (value: boolean) => {
    uiShowVideo.value = value;
  },
  setDialogStatus: (value: Record<string, boolean>) => {
    Object.entries(value).forEach(
      ([name, status]) => (dialogStatus.value[name] = status)
    );
  },
  setMission: (newMission: Mission) => {
    mission.value = newMission;
  },
} as const;

export const actions = {
  async nuxtServerInit() {},
  async addAlert(appAlert: AppAlert) {
    mutations.addAlert(appAlert);
  },
  async resetApp() {
    mutations.resetApp();
  },
  async registerLogin(accessCode: string) {
    mutations.registerLogin(accessCode);
  },
  async setUiShowVideo(value: boolean) {
    mutations.setUiShowVideo(value);
  },
  async setDialogStatus(value: Record<string, boolean>) {
    mutations.setDialogStatus(value);
  },
  async pickMission() {
    const missions = ["the-cave", "the-lake"];

    const mission: Mission = {
      name: missions[Math.floor(Math.random() * missions.length)],
    };
    mutations.setMission(mission);
  },
} as const;

export function useStore(): Store {
  return {
    getters,
    mutations,
    actions,
  };
}

export interface Store {
  getters: typeof getters;
  mutations: typeof mutations;
  actions: typeof actions;
}
