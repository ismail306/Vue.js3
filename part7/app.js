var app = Vue.createApp({
  data() {
    return {
      title: "",
    };
  },
  methods: {
    handlekeyup(event) {
      console.log(event.target.value);
      this.title = event.target.value;
    },
    handleFormSubmit(event) {
      console.log(event.target.value);
      event.preventDefault();
    },
  },
});

app.mount("#app");
