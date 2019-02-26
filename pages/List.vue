<template>
  <section class="container">
    <h6 class="subtitle">
      Write something that you're grateful at this second
    </h6>
    <hr>
    <list />
  </section>
</template>

<script>
import list from '../components/List'
export default {
  name: 'List',
  components: {
    list
  }
}
</script>

<style scoped>
.container {
  padding-top: 35px;
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  text-align: center;
}

.subtitle {
  font-weight: 200;
  font-size: 29px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}
</style>
