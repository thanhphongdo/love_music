<template>
  <div ref="carousel" class="carousel">
    <div class="body">
      <slot></slot>
    </div>
    <div class="action prev">
      <span @click="prev" v-show="index > 0">
        <i class="chevron left icon"></i>
      </span>
    </div>
    <div class="action next" v-show="index < countIndex - 1">
      <span @click="next">
        <i class="chevron right icon"></i>
      </span>
    </div>
  </div>
</template>
<style>
.carousel {
  position: relative;
  z-index: 0;
}
.body {
  height: 100%;
  position: relative;
}
.body > div {
  position: absolute;
  display: none;
}
.body .show {
  display: block;
}
.action {
  position: absolute;
  padding: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 50%;
  margin-top: -7px;
}
.action > span {
  z-index: 2;
  padding: 5px;
  background: rgba(0, 0, 0, 0.3);
  color: white;
  position: absolute;
}
.action > span > i {
  margin: 0px;
}
.prev {
  left: 5px;
}
.next {
  right: 5px;
}
</style>
<script>
export default {
  props: ["activeIndex"],
  data() {
    return {
      ref: null,
      countIndex: 0,
      index: this.activeIndex || 0
    };
  },
  methods: {
    goTo(index) {
      if (index < 0) index = 0;
      if (index >= this.countIndex) index = this.countIndex - 1;
      this.index = index;
      $(this.$refs.carousel)
        .find(".body > div")
        .removeClass("show");
      $(this.$refs.carousel)
        .find(".body > div")
        .eq(this.index)
        .addClass("show");
    },
    next() {
      this.goTo(++this.index);
    },
    prev() {
      this.goTo(--this.index);
    }
  },
  mounted() {
    this.countIndex = $(this.$refs.carousel).find(".body > div").length;
    this.goTo(this.index);
  }
};
</script>