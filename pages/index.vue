<template>
  <section class="container">
    <h1 class="subtitle">
      Be grateful!
    </h1>
    <list />
  </section>
</template>

<script>
import list from '../components/List'

export default {
  components: {
    list
  }
}
</script>

<style>
.container {
  padding-top: 35px;
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  text-align: center;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}
</style>
