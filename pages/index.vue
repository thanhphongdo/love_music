<template>
  <div class="container">
    <div ref="message">{{message}}</div>
  </div>
</template>

<script lang="ts">
import "jquery";
import { Vue, Component, Prop } from "vue-property-decorator";

interface User {
  firstName: string;
  lastName: string;
}

@Component
export default class YourComponent extends Vue {
  message: string = "This is a message";

  mounted() {}
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
