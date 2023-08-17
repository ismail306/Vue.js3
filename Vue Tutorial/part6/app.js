var app = Vue.createApp({
  data() {
    return {
      name: "Mehedi",
      counter: 0,
    };
  },
  methods: {
    changeName() {
      return "Mehedi Hasan Khan";
    },
    increaseCounter(amount) {
      this.counter += amount;
    },
    decreaseCounter(amount) {
      this.counter -= amount;
    },
  },
});
app.mount("#app");
