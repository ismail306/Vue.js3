<template>
    <div>
      <h2>{{ foodName }}</h2>
      <h1>{{ foodDescription }}</h1>
    </div>
  </template>
  
  <script>
    export default {
      props: [
        'foodName'
      ]
    }
  </script>
  
  <style></style>