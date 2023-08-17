<template>
  <h1>Food</h1>
  <food-item 
  v-for="x in foods"
:food-name="x"
  />

 
</template>

<script>

export default{
  data(){
    return {
      foods :["Apple","Mango","Banana",]
    };

  },

}

</script>

<style>
  #app > div {
    border: dashed black 1px;
    display: inline-block;
    margin: 10px;
    padding: 10px;
    background-color: lightgreen;
    cursor: pointer;
  }
</style>