<template>
  <div class="poly-group">
    <div class="polynomial">
      <input v-model="e1" class="exp" :style="`width:${inputWidth(e1)}`"/>
      <!-- <div v-if="poly(e1)" v-html="poly(e1).toString()" class="poly"></div> -->
    </div>
    <div class="polynomial">+</div>
    <div class="polynomial">
      <input v-model="e2" class="exp" :style="`width:${inputWidth(e2)}`"/>
      <!-- <div v-if="poly(e2)" v-html="poly(e2).toString()" class="poly"></div> -->
    </div>
    <div class="polynomial">=</div>
    <div class="polynomial">
      <div class="poly" v-html="polyPlus"></div>
    </div>
  </div>
</template>

<script>
import { Polynomial } from "./Polynomial.js";
// 分割表达式
const REG = /(-|\+)?\d+(\.\d+)?(x(\^-?\d+)?)?/gi;
export default {
  data() {
    return {
      e1: "",
      e2: "",
      result: ""
    };
  },
  computed: {
    poly() {
      return function(e) {
        if (REG.test(e)) {
          const exp = e.match(REG).map(this.exp2Obj);
          const sortedExp = exp.sort((a, b) => b.expn - a.expn);
          return new Polynomial(sortedExp);
        } else {
          return null;
        }
      };
    },
    polyPlus() {
      const p1 = this.poly(this.e1);
      const p2 = this.poly(this.e2);
      if (p1 && p2) {
        return p1.plus(p2).toString();
      } else {
        return "";
      }
    },
    inputWidth() {
      return function(e) {
        return e.length > 15 ? 100 + e.length * 7 + "px" : "150px";
      };
    }
  },
  methods: {
    exp2Obj(exp) {
      const sp = exp.split("^");
      let obj = { coef: 0, expn: 0 };
      // 含有指数
      if (sp.length > 1) {
        obj.coef = Number(sp[0].replace(/x/i, ""));
        obj.expn = Number(sp[1]);
      } else {
        obj.coef = Number(sp[0].replace(/x/i, ""));
        if (sp[0].includes("x") || sp[0].includes("X")) {
          obj.expn = 1;
        } else {
          obj.expn = 0;
        }
      }
      return obj;
    },
    plus() {
      this.result = this.poly(this.e1).plus(this.poly(this.e2));
    }
  }
};
</script>
<style lang="scss">
.poly-group {
  display: flex;
  .polynomial {
    margin-right: 10px;
  }
}
.poly {
  font-size: 1.5rem;
  span {
    display: inline-block;
    font-weight: bold;
    &.op {
      margin: 0 5px;
    }
    &.x {
      font-family: "Courier New", Courier, monospace;
    }
    &.expn {
      vertical-align: super;
      font-size: 0.8rem;
    }
  }
}
</style>
