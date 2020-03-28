<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png" /> -->
    <HelloWorld :title="message" @result-event="appActionByChild" />
    <hr />
    <button @click="doChangeTitle">Change title</button>
    <hr />
    <p>{{ result }}</p>
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";

export default {
  name: "App",
  components: {
    HelloWorld
  },
  data: function() {
    return {
      message: "HELLO!!!",
      result: "no event"
    };
  },
  methods: {
    doChangeTitle: function() {
      const input = prompt("new title");
      this.message = input;
    },
    appActionByChild: function(message) {
      this.result = '(*** you send:"' + message + '". ***)';
    }
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  margin-top: 60px;
}
</style>
