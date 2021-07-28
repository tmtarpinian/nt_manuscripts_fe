import { createStore } from 'vuex';
import referencesModule from './modules/references';
import textsModule from './modules/texts';

const store = createStore({
  modules: {
    references: referencesModule,
    texts: textsModule,
  },
});
export default store;
