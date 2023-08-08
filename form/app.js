var app = Vue.createApp({
  data() {
    return {
      itemName: "",
      itemQuantity: "",
      allItems: [{ name: "Banana", quantity: 10 }],
    };
  },
  methods: {
    addItem(){
      this.allItems.push({name: this.itemName, quantity: this.itemQuantity})
      this.itemName = ""
      this.itemQuantity = ""
  }
  },
});
app.mount("#app");
