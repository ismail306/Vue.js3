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
  },
});
app.mount("#app");
