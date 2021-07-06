export default {
  references(state) {
    return state.references;
  },
  hasReferences(state) {
    return state.references && state.references.length > 0;
  },
};
