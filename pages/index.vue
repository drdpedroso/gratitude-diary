<template>
  <section class="container">
    <h1 class="title">
      Gratitude Diary
    </h1>
    <h6 class="subtitle">
      Write something that you're grateful at this second
    </h6>
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

.title {
  font-weight: 300;
  font-size: 40px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.subtitle {
  font-weight: 200;
  font-size: 29px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}
</style>
