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
      @cell-click="goToList"
    />
  </section>
</template>

<script>
import VueCal from 'vue-cal'
import 'vue-cal/dist/vuecal.css'

export default {
  components: {
    VueCal
  },
  computed: {
    events() {
      return Object.keys(localStorage)
        .filter(
          date => JSON.parse(localStorage.getItem(date)).items.length !== 0
        )
        .map(date => {
          console.log(date)
          return { start: date, end: date }
        })
    }
  },
  mounted() {
    this.$ga.page('/')
  },
  methods: {
    goToList(date) {
      this.$router.push(`/list/${date}`)
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
  /*flex: 1;*/
}

.title-container {
  display: flex;
  flex-direction: row;
}

.calendar-container {
  padding: 20px;
  margin-bottom: 55px;
  min-height: 60vh;
}

.vuecal__cell--has-events {
  background-color: rgba(136, 255, 50, 0.5);
}

.vuecal__cell.today,
.vuecal__cell.current {
  background-color: rgba(248, 255, 0, 0.4);
}

.vuecal__cell-events-count {
  display: none;
}
</style>
