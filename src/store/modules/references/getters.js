export default {
  references(state) {
    return state.referencesList;
  },
  reference(state, getters) {
    const id = getters.getCurrentReferenceId;
    return state.referencesList.find((reference) => reference.id === id);
  },
  hasTexts(state) {
    return state.referencesList && state.referencesList.length > 0;
  },
  getCurrentReferenceId(state) {
    return state.currentReference;
  },
};
