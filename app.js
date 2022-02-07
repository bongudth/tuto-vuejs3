const app = Vue.createApp({
  data() {
    return {
      showBooks: true,
      books: [
        {
          url: 'assets/book1.jpg',
          title: 'The Design of EveryDay Things',
          author: 'Don Norman',
        },
        {
          url: 'assets/book2.jpg',
          title: 'The Most Human Human',
          author: 'Brian Christian',
        },
        {
          url: 'assets/book3.png',
          title: 'The Design of Everyday Things',
          author: 'Don Norman',
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
    handleMouseMove(e) {
      this.x = e.offsetX
      this.y = e.offsetY
    }
  }
})

app.mount('#app')