export default {
  findReference(state, payload) {
    state.referencesList.push(payload);
    state.currentReference = payload.id;
  },
  fetchReference(state, payload) {
    state.referencesList.push(payload);
  },
  setCurrentReference(state, payload) {
    state.currentReference = payload;
  },
};
