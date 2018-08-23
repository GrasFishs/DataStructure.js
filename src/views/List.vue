<template>
  <div class="list">
    <div class="list-item">
      <div class="name">多项式求和</div>
      <polynomial/>
    </div>
    <div class="list-item">
      <div class="name">栈</div>
      <stack/>
    </div>
    <div class="list-item">
      <div class="name">队列</div>
      <queue/>
    </div>
  </div>
</template>

<script>
const Polynomial = () => import("@/components/Polynomial/Polynomial.vue");
const Stack = () => import("@/components/Stack/Stack.vue");
const Queue = () => import("@/components/Queue/Queue.vue");
export default {
  components: { Polynomial, Stack, Queue }
};
</script>

<style lang="scss">
.list {
  .list-item {
    margin: 20px 10px;
    padding: 10px 20px 20px;
    box-shadow: 0 0 5px #42b983;
    border-radius: 10px;
    transition: 0.2s all ease;
    min-width: 200px;
  }
  .name {
    margin-bottom: 10px;
    font-size: 1.2rem;
    font-weight: 700;
  }
  input.exp {
    $input_color: #add8e6;
    box-sizing: border-box;
    font-family: "Courier New", Courier, monospace;
    outline: none;
    border: 1px solid $input_color;
    padding: 5px;
    border-radius: 4px;
    transition: 0.3s all ease;
    &:focus {
      border: 1px solid transparent;
      box-shadow: 0 0 10px $input_color;
    }
  }
  button.op {
    $button_bg: #42b983;
    box-sizing: border-box;
    font-family: "Courier New", Courier, monospace;
    outline: none;
    border: 1px solid $button_bg;
    background: $button_bg;
    color: white;
    padding: 5px;
    border-radius: 4px;
    transition: 0.3s all ease;
    margin: 0 10px;
    &:focus {
      border: 1px solid transparent;
      box-shadow: 0 0 10px $button_bg;
    }
  }
}
</style>
