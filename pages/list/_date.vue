<template>
  <section class="container">
    <div class="title-container">
      <h6 class="subtitle">
        Write something that you're grateful for, at this second - {{ formattedDate }}
      </h6>
      <button class="button is-light" @click="goBack">
        Back
      </button>
    </div>
    <hr>
    <list :items="items" @set="handleSetItem" />
  </section>
</template>

<script>
import { format } from 'date-fns'
import get from 'lodash/get'
import list from '../../components/List'

export default {
  name: 'List',
  components: {
    list
  },
  data() {
    return {
      date: this.$route.params.date
    }
  },
  computed: {
    formattedDate: function() {
      return format(new Date(this.date), 'DD/MM/YYYY')
    },
    items: function() {
      return get(
        JSON.parse(
          localStorage.getItem(format(new Date(this.date), 'YYYY-MM-DD'))
        ),
        'items',
        [{ id: 1 }, { id: 2 }, { id: 3 }]
      )
    }
  },
  methods: {
    handleSetItem(data) {
      return localStorage.setItem(
        format(new Date(this.date), 'YYYY-MM-DD'),
        JSON.stringify(data)
      )
    },
    goBack() {
      this.$router.push('/')
    }
  }
}
</script>

<style scoped>
.title-container {
  display: flex;
  flex-direction: row;
}
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
  flex: 1;
}
</style>
