import mutations from './mutations';
import actions from './actions';
import getters from './getters';

export default {
  namespaced: true,
  state() {
    return {
      texts: [
        {
          id: 10,
          number: 'p9',
          date: 'III',
          textType: 'Alexandrian',
          group: 'papyri',
          library: null,
          photo_link: null,
          wiki_link: null,
          references: [
            {
              id: 7467,
              book: '1-john',
              chapter: 4,
              verse: 11,
            },
            {
              id: 7468,
              book: '1-john',
              chapter: 4,
              verse: 12,
            },
            {
              id: 7470,
              book: '1-john',
              chapter: 4,
              verse: 14,
            },
            {
              id: 7471,
              book: '1-john',
              chapter: 4,
              verse: 15,
            },
            {
              id: 7472,
              book: '1-john',
              chapter: 4,
              verse: 16,
            },
            {
              id: 7473,
              book: '1-john',
              chapter: 4,
              verse: 17,
            },
          ],
        },
        {
          id: 8,
          number: 'p10',
          date: 'IV',
          textType: 'Alexandrian',
          group: 'papyri',
          library: null,
          photo_link: null,
          wiki_link: null,
          references: [
            {
              id: 4785,
              book: 'romans',
              chapter: 1,
              verse: 1,
            },
            {
              id: 4786,
              book: 'romans',
              chapter: 1,
              verse: 2,
            },
            {
              id: 4787,
              book: 'romans',
              chapter: 1,
              verse: 3,
            },
            {
              id: 4788,
              book: 'romans',
              chapter: 1,
              verse: 4,
            },
            {
              id: 4789,
              book: 'romans',
              chapter: 1,
              verse: 5,
            },
            {
              id: 4790,
              book: 'romans',
              chapter: 1,
              verse: 6,
            },
            {
              id: 4791,
              book: 'romans',
              chapter: 1,
              verse: 7,
            },
          ],
        },
      ],
    };
  },
  mutations,
  actions,
  getters,
};
