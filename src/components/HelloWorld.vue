<template>
  <!-- a comment -->
  <div v-nothing class="container">
    <ul class="members">
      <li v-for="item in data"
        :key="item"
      >{{item}}</li>
    </ul>
  </div>
</template>

<script setup="props">
import { defineComponent, onMounted, toRef, ref, watchEffect, computed } from "vue";

export default defineComponent({
  name: 'HelloWorld'
})


export const data = ref(undefined)
onMounted(() => {
  setTimeout(() => {
    data.value = [1, 2]
  }, 1000)
})

export const active = ref('')
</script>

<style scoped>
.container {
  padding: 40px 20px 15px 10px;
  display: flex;
}
.members {
  list-style: none;
  display: flex;
  padding-left: 65px;
  flex-wrap: wrap;
  flex: 1 0 auto;
  width: 0;
}
.members li {
  border-radius: 3px;
  transition: all 0.3s;
  background: rgba(3, 105, 176, 0.9);
  color: #fff;
  width: 150px;
  height: 70px;
  line-height: 70px;
  text-align: center;
  margin-right: 18px;
  margin-bottom: 10px;
  cursor: pointer;
}
.members li.active {
  background: #4fd9fc;
  color: #1f35a0;
  cursor: initial;
}
</style>
