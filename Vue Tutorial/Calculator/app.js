var app = Vue.createApp({
  data() {
    return {
      title: "VueJs Calculator",
      display: "",
      displayValue: "0",
      buttons: [
        { label: "7", type: "number" },
        { label: "8", type: "number" },
        { label: "9", type: "number" },
        { label: "+", type: "operator" },
        { label: "4", type: "number" },
        { label: "5", type: "number" },
        { label: "6", type: "number" },
        { label: "-", type: "operator" },
        { label: "1", type: "number" },
        { label: "2", type: "number" },
        { label: "3", type: "number" },
        { label: "*", type: "operator" },
        { label: "0", type: "number" },
        { label: "/", type: "operator" },
      ],
    };
  },
  methods: {
    handleButtonClick(button) {
      if (button.type === "number") {
        this.displayValue += button.label;
      } else if (button.type === "operator") {
        this.displayValue += " " + button.label + " ";
      }
    },
    clearDisplay() {
      this.displayValue = "";
    },
    calculate() {
      this.displayValue = eval(this.displayValue);
    },
  },
});
app.mount("#app");
