<template>
  <div id="anime">
    <h1>{{ title }}</h1>
    <p>{{ message }}</p>
    <hr />
    <button @click="doAction">{{ btn }}</button>
    <transition
      name="transit"
      @before-enter="startAction"
      @before-leave="startAction"
      @after-enter="endAction"
      @after-leave="endAction"
    >
      <p v-if="flg" class="trans">Transition!</p>
    </transition>
    <hr />
    <button @click="doTranslate">{{ translateBtn }}</button>
    <br /><br />
    <transition name="translate-area">
      <p v-if="translateFlg" class="trans">Translate!</p>
    </transition>
  </div>
</template>

<script>
export default {
  name: "Anime",
  props: {
    title: String
  },
  data: function() {
    return {
      message: "Transition Sample!",
      flg: true,
      btn: "Show/Hide",
      translateFlg: true,
      translateBtn: "Show/Hide"
    };
  },
  methods: {
    doAction: function() {
      this.flg = !this.flg;
    },
    startAction: function() {
      if (this.flg) {
        this.message = "現れます...";
      } else {
        this.message = "消えます...";
      }
    },
    endAction: function() {
      if (this.flg) {
        this.btn = "Hide";
        this.message = "現れました。";
      } else {
        this.btn = "Show";
        this.message = "消えました。";
      }
    },
    doTranslate: function() {
      this.translateFlg = !this.translateFlg;
    }
  }
};
</script>

<style scoped>
.trans {
  width: 300px;
  background-color: #ddf;
  padding: 10px;
  font-size: 20pt;
}
/* フェードイン・フェードアウト */
.transit-enter-active {
  transition: opacity 0.5s;
}
.transit-enter {
  opacity: 0;
}
.transit-enter-to {
  opacity: 1;
}

.transit-leave-active {
  transition: opacity 2s;
}

.transit-leave {
  opacity: 1;
}
.transit-leave-to {
  opacity: 0;
}
/* トランスレート */
/* .translate-area-enter-active {
  transition: 1s;
}
.translate-area-leave-active {
  transition: 1s;
}
.translate-area-enter,
.translate-area-leave-to {
  transform: translateX(200px) translateY(-200px) scale(2) rotateZ(360deg);
  opacity: 0.1;
} */

/* キーフレーム */
.translate-area-enter-active {
  animation: anim 2.5s reverse;
}
.translate-area-leave-active {
  animation: anim 5s;
}
@keyframes anim {
  0% {
    transform: translateX(0px) translateY(0px) rotateZ(0deg);
    opacity: 1;
    background-color: #ddf;
  }
  25% {
    transform: translateX(250px) translateY(0px) rotateZ(0deg);
    opacity: 1;
    background-color: #fdd;
  }
  50% {
    transform: translateX(0px) translateY(-100px) rotateZ(540deg);
    opacity: 1;
    background-color: #dfd;
  }
  75% {
    transform: translateX(250px) translateY(-100px) rotateZ(540deg);
    opacity: 1;
    background-color: #fdf;
  }
  100% {
    transform: translateX(0px) translateY(-200px) rotateZ(1080deg);
    opacity: 0;
    background-color: #ffd;
  }
}
</style>
