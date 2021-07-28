export default {
  findReference(context, data) {
    const referenceData = {
      book: data.book,
      chapter: data.chapter,
      verse: data.verse,
    };
    context.commit('findReference', referenceData);
  },
  //   async loadReferenceById(context, payload) {
  //     const request = await fetch(
  //       `http://localhost/3000/api/v1/references/${referenceId}.json`,
  //     );
  //     const response = await request.json();

  //     if (!response.ok) {
  //       // ..
  //     }
  //   },
  loadReference(context, payload) {
    const requestOptions = {
      method: 'GET',
      redirect: 'follow',
    };

    fetch(`http://localhost:3000/api/v1/reference/?book=${payload.book.toLowerCase()}&chapter=${payload.chapter}&verse=${payload.verse}`, requestOptions)
      .then((response) => response.text())
      .then((result) => {
        console.log(result);
        context.commit('findReference', JSON.parse(result));
      })
      .catch((error) => console.log('error', error));
  },
};
