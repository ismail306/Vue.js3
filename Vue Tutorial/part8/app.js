var app = Vue.createApp({
  data() {
    return {
      message: "Ismail",
      num: "",
      result: "",
    };
  },
  methods: {
    // handleInput(event) {
    //   this.num = event.target.value;
    // },
    getSquare() {
      this.result = this.num * this.num;
    },

    getDouble() {
      this.result = this.num * 2;
    },
    reset() {
      this.result = "";
      this.num = "";
    },
  },
});
app.mount("#app");
