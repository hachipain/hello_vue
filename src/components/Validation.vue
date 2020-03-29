<template>
  <div class="validation">
    <h1>{{title}}</h1>
    <p>{{message}}</p>

    <hr />
    <p>Number: {{num}}</p>
    <p>Val: {{val}}</p>
    <div>
      *2:
      <input type="number" v-model="a" />
    </div>
    <div>
      ^2:
      <input type="number" v-model="b" />
    </div>

    <hr />
    <h1>値の監視</h1>
    <div>
      Value:
      <input type="number" v-model="val" />
    </div>
    <div style="height:10px"></div>
    <table>
      <tr>
        <th>add:</th>
        <td>{{add}}</td>
      </tr>
      <tr>
        <th>sub:</th>
        <td>{{sub}}</td>
      </tr>
      <tr>
        <th>multiple:</th>
        <td>{{mult}}</td>
      </tr>
      <tr>
        <th>divide:</th>
        <td>{{div}}</td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: "Validation",
  props: {
    title: String,
    // num: Number
    num: {
      type: Number,
      default: 100,
      validator: function(value) {
        return value == parseInt(value) && value >= 0 && value <= 100;
      }
    }
  },
  data: function() {
    return {
      message: "バリデーションチェック",
      val: 0,
      add: 0,
      sub: 0,
      mult: 0,
      div: 0
    };
  },
  computed: {
    a: {
      get: function() {
        return this.val * 2;
      },
      set: function(value) {
        this.val = Math.floor(value / 2);
      }
    },
    b: {
      get: function() {
        return this.val * this.val;
      },
      set: function(value) {
        this.val = Math.sqrt(value);
      }
    }
  },
  created: function() {
    this.val = 10;
  },
  watch: {
    val: function(value) {
      this.val = value;
      const val = parseInt(value);
      this.add = Math.floor(val + 2);
      this.sub = Math.floor(val - 2);
      this.mult = Math.floor(val * 2);
      this.div = Math.floor(val / 2);
    }
  }
};
</script>

<style>
</style>