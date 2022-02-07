const app = Vue.createApp({
  data() {
    return {
      showBooks: true,
      books: [
        {
          title: 'The Design of EveryDay Things',
          author: 'Don Norman',
        },
        {
          title: 'The Most Human Human',
          author: 'Brian Christian',
        },
        {
          title: 'The Design of Everyday Things',
          author: 'Don Norman',
        },
      ]
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