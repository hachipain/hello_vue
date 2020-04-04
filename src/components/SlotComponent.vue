<template>
  <div class="slot">
    <h1>{{ title }}</h1>
    <p>{{ message }}</p>
    <hr />
    <!-- <ul>
      <li>
        <slot name="a" />
      </li>
      <li>
        <slot name="b" />
      </li>
      <li>
        <slot name="c" />
      </li>
    </ul>
    <hr />
    <div>
      <slot />
    </div>-->
    <ol>
      <slot />
    </ol>
  </div>
</template>

<script>
export default {
  name: "SlotComponent",
  props: {
    title: String
  },
  data: function() {
    return {
      message: "This is message"
    };
  }
};
</script>

<style>
.inner {
  color: red;
  font-size: 14pt;
}
.etc {
  color: green;
  background-color: #eee;
  font-size: 12pt;
  padding: 5px;
}
</style>