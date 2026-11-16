function say() { console.log(this.title); }

say.call({ title: 'Book' }); // Book
say.apply({ title: 'Movie' }); // Movie

const bound = say.bind({ title: 'Bound' });
bound(); // Bound
