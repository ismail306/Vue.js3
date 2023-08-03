var app = Vue.createApp({
  data() {
    return {
      name: "Ismail Khan Emon",
      obj1: {
        name: "Ismail Khan Emon",
        age: 25,
        github: "//github.com/ismail306",
      },
    };
  },
  methods: {
    changeName() {
      return (this.name = "Mehedi Hasan Khan");
    },
  },
});
app.mount("#app");
