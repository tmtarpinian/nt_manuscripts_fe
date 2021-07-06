import { createStore } from 'vuex';
import referencesModule from './modules/references';

const store = createStore({
  modules: {
    references: referencesModule,
    // texts: textsModule,
  },
});
export default store;
