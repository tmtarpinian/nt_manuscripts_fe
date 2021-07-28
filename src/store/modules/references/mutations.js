export default {
  findReference(state, payload) {
    state.references.push(payload);
    state.currentReference = payload.id;
  },
  fetchReference(state, payload) {
    state.references.push(payload);
  },
};
