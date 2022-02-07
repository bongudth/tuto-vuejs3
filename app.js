const app = Vue.createApp({
  data() {
    return {
      showBooks: true,
      books: [
        {
          url: 'assets/book1.jpg',
          title: 'The Design of EveryDay Things',
          author: 'Don Norman',
          isFav: false,
        },
        {
          url: 'assets/book2.jpg',
          title: 'The Most Human Human',
          author: 'Brian Christian',
          isFav: true,
        },
        {
          url: 'assets/book3.png',
          title: 'The Design of Everyday Things',
          author: 'Don Norman',
          isFav: true,
        },
      ],
      url: 'https://www.google.com',
    }
  },
  methods: {
    toggleShowBooks() {
      this.showBooks = !this.showBooks
    },
    handleEvent(e, data) {
      console.log(e.type)
      if (data) {
        console.log(data)
      }
    },
    toggleFav(book) {
      book.isFav = !book.isFav
    }
  }
})

app.mount('#app')