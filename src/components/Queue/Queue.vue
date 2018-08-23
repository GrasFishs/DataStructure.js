<!-- 队列结构 -->
<template>
  <div class="queue">
    <input type="text" class="exp" v-model="exp">
    <button @click="enqueue" class="op">enqueue</button>
    <button @click="dequeue" class="op">dequeue</button>
    <div>
      <transition-group 
      name="queue-list"
      class="queue-list" 
      tag="ul">
        <li v-for="item of list" :key="item" class="queue-list-item">{{item}}</li>
      </transition-group>
    </div>
    <div class="queue-pop">出队元素：{{deq}}</div>
  </div>
</template>
<script>
import { Queue } from "./Queue";
export default {
  components: {},
  data() {
    return {
      exp: "",
      deq: "",
      queue: new Queue()
    };
  },
  computed: {
    list() {
      return this.queue.queueList;
    }
  },
  methods: {
    enqueue() {
      this.queue.enqueue(this.exp);
    },
    dequeue() {
      if (!this.queue.isEmpty()) {
        this.deq = this.queue.dequeue();
      }
    }
  }
};
</script>
<style lang='scss' scoped>
.queue-list {
  display: inline-block;
  list-style: none;
  padding: 2px 5px;
  height: 34px;
  border: 1px solid #42b983;
  border-right: none;
  border-left: none;
  &-item {
    display: inline-block;
    border: 1px solid #42b983;
    color: #42b983;
    padding: 5px;
    height: 20px;
    text-align: center;
    line-height: 20px;
    margin-right: 5px;
    transition: all 0.2s;
  }

  &-enter {
    opacity: 0;
    transform: translateX(100px) scaleX(0.5) scaleY(1.2);
  }

  &-leave {
    &-active {
      position: absolute;
    }
    &-to {
      opacity: 0;
      transform: translateX(-50px) scaleX(0.5) scaleY(1.2);
    }
  }
}
</style>
