<template>
  <div ref="progress" class="ui progress">
    <div class="bar" style="min-width: 0px !important"></div>
  </div>
</template>
<script>
export default {
  props: ["options"],
  data() {
    return {
      timer: null
    };
  },
  methods: {
    callFunction(funcName, params) {
      return $(this.$refs.progress).progress(funcName, params);
    },
    setPercent(val) {
      $(this.$refs.progress).progress({
        percent: val
      });
    },
    timeDown(total, step) {
      let self = this;
      if (self.timer) {
        clearInterval(self.timer);
        self.timer = null;
      }
      total -= 300;
      this.callFunction("set total", total);
      this.callFunction("set value", step);
      this.callFunction("set percent", 100);
      let count = 0;
      setTimeout(() => {
        self.timer = setInterval(() => {
          count += step / total;
          if (Math.abs(1 - count) <= 0.001) {
            count = 1;
          }
          self.setPercent(100 - count * 100);
          if (count >= 1) {
            clearInterval(self.timer);
            self.$emit("onTimeout", true);
            self.timer = null;
          }
        }, step);
      }, 300);
    },
    stopTimeDown() {
      if (this.timer) {
        clearInterval(this.timer);
        self.timer = null;
      }
    }
  },
  mounted() {
    let self = this;
    self.option = self.options || {};
    $(self.$refs.progress).progress(self.options);
  }
};
</script>