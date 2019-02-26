<template>
  <section class="container">
    <h1 class="title">
      Gratitude Diary
    </h1>
    <hr>
    <VueCal
      :events="events"
      :disable-views="['years', 'year', 'day', 'week', 'month']"
      default-view="month"
      class="calendar-container"
      @day-focus="test"
    >
      <div slot="cellHasEvents" @click="test">
        0
      </div>
    </VueCal>
  </section>
</template>

<script>
import VueCal from 'vue-cal'
import 'vue-cal/dist/vuecal.css'

export default {
  components: {
    VueCal
  },
  data() {
    return {
      events: [
        {
          start: '2019-02-21 12:00',
          end: '2019-02-21 13:00'
        },
        {
          start: '2019-02-22 12:00',
          end: '2019-02-22 13:00'
        }
      ]
    }
  },
  methods: {
    test(e) {
      console.log(e)
    }
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

.calendar-container {
  padding: 20px;
  margin-bottom: 55px;
  min-height: 60vh;
}

.vuecal__cell--has-events {
  background-color: rgba(136, 255, 50, 0.5);
}

.vuecal__cell-events-count {
  display: none;
}
</style>
