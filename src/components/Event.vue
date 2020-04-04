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
      <input
        type="text"
        @keypress="type"
        @keydown.delete="clear"
        @keydown.space="space"
        @keydown.enter="enter"
      />
    </div>
    <hr />
    <div
      class="area"
      @click.exact="exact"
      @click.shift="shift"
      @click.ctrl="ctrl"
      @click.alt="alt"
      @click.meta="meta"
    >click here!!!</div>
    <div
      class="area"
      @click.left.prevent="left"
      @click.right.prevent="right"
      @click.middle="middle"
    >click here!!!</div>
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
      if (event.key == "Enter") {
        return;
      }
      this.message += event.key + " ";
      // if (event.key == "Escape") {
      //   this.message = "";
      // }
      event.target.value = "";
    },
    space: function() {
      this.message += "_ ";
    },
    enter: function(event) {
      const res = this.message.split(" ").join("");
      this.message = res.split("_").join(" ");
      event.target.value = "";
    },
    click: function() {
      this.message = "click ";
    },
    exact: function() {
      this.message += "**no any key**";
    },
    shift: function() {
      this.message += "[shift]";
    },
    ctrl: function() {
      this.message += "[ctrl]";
    },
    alt: function() {
      this.message += "[alt]";
    },
    meta: function() {
      this.message += "[meta]";
    },
    left: function() {
      this.message = "[left button]";
    },
    right: function() {
      this.message = "[right button]";
    },
    middle: function() {
      this.message = "[middle button]";
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
.area {
  width: 300px;
  height: 100px;
  background-color: #ddd;
  padding: 10px;
  font-size: 20pt;
}
</style>