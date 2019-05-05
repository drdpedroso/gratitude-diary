<template>
  <div class="list-wrapper">
    <card v-for="item in imutableItems" :key="item.id">
      <div v-if="!item.done" class="control">
        <div style="position: absolute; top: 8px; right: 18px;" @click="removeItem(item.id)"><button>X</button></div>
        <textarea v-model="item.text" class="textarea has-fixed-size" placeholder="Type something that your grateful for!" @blur="enableEdit(item, true)" />
      </div>
      <div v-else @click="enableEdit(item, false)">
        <div style="position: absolute; top: 8px; right: 18px;" @click="removeItem(item.id)"><button class="button is-light">X</button></div>
        <i class="fas fa-check" />
        <span class="done-item">{{ item.text }}</span>
      </div>
    </card>
    <div><button class="button is-success" @click="addNewItem">Adicionar</button></div>

  </div>
</template>

<script>
import { generateUUID } from '../utils/uuid'
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
    removeItem(idToRemove) {
      this.imutableItems = this.imutableItems.filter(
        ({ id }) => id !== idToRemove
      )
    },
    addNewItem() {
      const id = generateUUID()
      this.imutableItems = [...this.imutableItems, { id }]
    },
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
