import createPersistedState from "vuex-persistedstate";

export default ({ store }) => {
  createPersistedState({
    key: "sts-2022",
    paths: ["accessCode", "uiShowVideo"],
  })(store);
};
