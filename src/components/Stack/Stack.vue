<!-- 栈结构 -->
<template>
  <div class="stack">
    <input type="text" class="exp" v-model="exp">
    <button @click="push" class="op">push</button>
    <button @click="pop" class="op">pop</button>
    <div>
      <ul class="stack-list">
        <transition-group name="stack-list">
          <li v-for="(item,i) of list" :key="i" class="stack-list-item">{{item}}</li>
        </transition-group>
      </ul>
    </div>
    <div class="stack-pop">弹出元素：{{poped}}</div>
  </div>
</template>
<script>
import { Stack } from "./Stack";
export default {
  components: {},
  data() {
    return {
      exp: "",
      poped: "",
      stack: new Stack()
    };
  },
  computed: {
    list() {
      return this.stack.stackList;
    }
  },
  methods: {
    push() {
      this.stack.push(this.exp);
    },
    pop() {
      if (!this.stack.isEmpty()) {
        this.poped = this.stack.pop();
      }
    }
  }
};
</script>
<style lang='scss' scoped>
.stack-list {
  display: inline-block;
  list-style: none;
  padding: 2px 5px;
  height: 34px;
  border: 1px solid #42b983;
  border-radius: 5px 0 0 5px;
  border-right: none;
  &-item {
    display: inline-block;
    border: 1px solid #42b983;
    color: #42b983;
    padding: 5px;
    height: 20px;
    text-align: center;
    line-height: 20px;
    margin-right: 5px;
  }
  &-enter-active {
    transition: all 0.2s ease-out;
  }
  &-leave-active {
    transition: all 0.2s ease-in;
  }

  &-enter,
  &-leave-to {
    opacity: 0;
    transform: translateX(100px) scaleX(0.5) scaleY(1.2);
  }
}
</style>
