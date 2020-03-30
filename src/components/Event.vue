<template>
  <div class="Event">
    <h1>{{ title }}</h1>
    <pre @click="clear">{{message}}</pre>
    <hr />
    <div id="out" class="out" @click.self="a_event">
      A
      <div id="mid" class="mid" @click="b_event">
        B
        <div id="in" class="in" @click.stop="c_event">C</div>
      </div>
    </div>
    <hr />
    <div>
      <input type="text" @keydown="type" />
    </div>
  </div>
</template>

<script>
export default {
  name: "Event",
  props: {
    title: String
  },
  data: function() {
    return {
      message: ""
    };
  },
  methods: {
    a_event: function(event) {
      this.message +=
        "A-Event [" + event.target.id + "→" + event.currentTarget.id + "]\n";
    },
    b_event: function(event) {
      this.message +=
        "B-Event [" + event.target.id + "→" + event.currentTarget.id + "]\n";
    },
    c_event: function(event) {
      this.message +=
        "C-Event [" + event.target.id + "→" + event.currentTarget.id + "]\n";
    },
    clear: function() {
      this.message = "";
    },
    type: function(event) {
      this.message += event.key + " ";
      if (event.key == "Escape") {
        this.message = "";
      }
      event.target.value = "";
    }
  }
};
</script>

<style>
pre {
  font-size: 14pt;
  line-height: 1.25;
}
div.out {
  padding: 5px 0px;
  background-color: #eee;
  width: 300px;
  height: 200px;
}
div.mid {
  padding: 5px 0px;
  background-color: #ddd;
  width: 200px;
  height: 175px;
}
div.in {
  padding: 5px 0px;
  background-color: #ccc;
  width: 100px;
  height: 150px;
}
</style>