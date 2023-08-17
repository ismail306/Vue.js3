var app = Vue.createApp({
  data() {
    return {
      opacityVal: "0.8",
    };
  },
  methods: {
    setClass(className) {
      this.activeClass = className;
    },
  },
});
app.mount("#app");
