<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png" /> -->
    <HelloWorld :title="message" @result-event="appActionByChild" />
    <hr />
    <button @click="doChangeTitle">Change title</button>
    <hr />
    <p>{{ result }}</p>
    <hr />
    <hr />
    <Validation title="Validation" :num="num"></Validation>
    <hr />
    <hr />
    <Event title="Event"></Event>
    <!-- <hr />
    <hr />
    <SlotComponent title="Slot">
      <p class="etc">Begin!</p>
      <p slot="a" class="inner">*** First message ***</p>
      <p class="etc">Middle...</p>
      <p slot="b" class="inner">*** Second message ***</p>
      <p class="etc">End.</p>
      <p slot="c" class="inner">*** Third message ***</p>
    </SlotComponent>-->
    <hr />
    <hr />
    <SlotComponent title="Solt2">
      <li v-for="obj in slotobjs" :key="obj.name">
        {{ obj.name }} ({{ obj.mail }})
      </li>
    </SlotComponent>
    <hr />
    <hr />
    <Render title="JSX?"></Render>
    <hr />
    <hr />
    <Anime title="Transition"></Anime>
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import Validation from "./components/Validation.vue";
import Event from "./components/Event.vue";
import SlotComponent from "./components/SlotComponent.vue";
import Render from "./components/Render.vue";
import Anime from "./components/Anime.vue";

export default {
  name: "App",
  components: {
    HelloWorld,
    Validation,
    Event,
    SlotComponent,
    Render,
    Anime
  },
  data: function() {
    return {
      message: "HELLO!!!",
      result: "no event",
      num: 101, // validation error
      slotobjs: [
        { name: "Taro", mail: "taro@yamada" },
        { name: "Hanako", mail: "hanako@flower" },
        { name: "Sachiko", mail: "sachiko@happy" }
      ]
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
