import mutations from './mutations';
import actions from './actions';
import getters from './getters';

export default {
  namespaced: true,
  state() {
    return {
      references: // [
        {
          id: 3971,
          book: 'acts-of-the-apostles',
          chapter: 6,
          verse: 14,
          texts: [
            {
              id: 9,
              number: 'p8',
              date: 'IV',
              text_type: 'Alexandrian',
              group: 'papyri',
              library: null,
              photo_link: null,
              wiki_link: null,
            },
            {
              id: 45,
              number: 'p45',
              date: 'III',
              text_type: 'Alexandrian',
              group: 'papyri',
              library: null,
              photo_link: null,
              wiki_link: null,
            },
            {
              id: 6,
              number: 'fake western',
              date: 'VI',
              text_type: 'Western',
              group: 'uncials',
              library: null,
              photo_link: null,
              wiki_link: null,
            },
            {
              id: 4587,
              number: 'fake Byzantine',
              date: 'XI',
              text_type: 'Byzantine',
              group: 'minuscules',
              library: null,
              photo_link: null,
              wiki_link: null,
            },
          ],
        },
      // {
      //   id: 3972,
      //   book: 'acts-of-the-apostles',
      //   chapter: 6,
      //   verse: 15,
      // },
      // {
      //   id: 5303,
      //   book: '1-corinthians',
      //   chapter: 4,
      //   verse: 16,
      // },
      // {
      //   id: 5304,
      //   book: '1-corinthians',
      //   chapter: 4,
      //   verse: 17,
      // },
      // {
      //   id: 6290,
      //   book: 'philippians',
      //   chapter: 3,
      //   verse: 16,
      // },
      // {
      //   id: 6291,
      //   book: 'philippians',
      //   chapter: 3,
      //   verse: 17,
      // },
      // ],
    };
  },
  mutations,
  actions,
  getters,
};
