export default {
  references(state) {
    return state.references;
  },
  reference(state, getters) {
    const id = getters.getCurrentReferenceId;
    return state.references.find((reference) => reference.id === id);
  },
  hasTexts(state) {
    return state.references && state.references.length > 0;
  },
  getCurrentReferenceId(state) {
    return state.currentReference;
  },
};
