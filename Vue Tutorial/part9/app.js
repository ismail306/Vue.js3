var app = Vue.createApp({
  data() {
    return {
      activeClass: "red",
      name: "Ismail",
    };
  },
  methods: {
    setClass(className) {
      this.activeClass = className;
    },
  },
});
app.mount("#app");
