<template>
  <div class="list-wrapper">
    <card v-for="item in imutableItems" :key="item.id">
      <div v-if="!item.done || item.text === ''" class="control">
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
  props: ['items'],
  data() {
    return {
      imutableItems: [...this.items]
    }
  },
  methods: {
    enableEdit(item, isDone) {
      this.imutableItems = this.imutableItems.map(task => {
        if (task.id === item.id) {
          return { ...task, done: isDone }
        }
        return task
      })
      this.$emit('set', { items: this.imutableItems })
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
