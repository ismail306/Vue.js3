var app = Vue.createApp({
  data() {
    return {
      manyFoods: [
        "Pizza",
        "Burger",
        "Pasta",
        "Fries",
        "Noodles",
        "Pasta",
        "Fries",
        "Noodles",
        "Pasta",
      ],
    };
  },
  methods: {
    setClass(className) {
      this.activeClass = className;
    },
  },
});
app.mount("#app");
