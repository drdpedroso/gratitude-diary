<template>
  <div class="list-wrapper">
    <card v-for="item in items" :key="item.id">
      <div v-if="!item.done" class="control">
        <textarea v-model="item.text" class="textarea has-fixed-size" placeholder="Type something that your grateful for!" @blur="enableEdit(item, true)" />
      </div>
      <div v-else @click="enableEdit(item, false)">
        <i class="fas fa-check" />
        <span class="done-item">{{ item.text }}</span>
      </div>
    </card>
  </div>
</template>

<script>
import card from './Card'

export default {
  name: 'List',
  components: {
    card
  },
  data() {
    return {
      items: [
        {
          id: 1,
          text: 'Something grateful and stuff',
          done: true,
          content: '<i class="v-icon material-icons">directions_run</i>'
        },
        { id: 2, text: 'Something grateful and another stuff', done: false },
        { id: 3, text: 'Something another stuff', done: false }
      ]
    }
  },
  methods: {
    enableEdit(item, isDone) {
      this.items = this.items.map(task => {
        if (task.id === item.id) {
          return { ...task, done: isDone }
        }
        return task
      })
      this.$emit('set', { items: this.items })
    }
  }
}
</script>

<style scoped>
.list-wrapper {
  display: flex;
  text-space: 10px;
  flex-direction: column;
}

.list-wrapper > div {
  padding: 40px;
}

.done-item {
  font-size: 20px;
}
</style>
