<template>
  <div ref="rating" class="ui huge star rating"></div>
</template>
<script>
export default {
  props: ["options"],
  data() {
    return {
      ref: null
    };
  },
  methods: {
    callFunction(funcName, params) {
      return $(this.$refs.rating).rating(funcName, params);
    },
    setRating(num) {
      this.callFunction("set rating", num);
    },
    setRatingByPercent(percent) {
      let maxRating = this.callFunction("get max rating");
      this.callFunction("set rating", Math.floor((maxRating * percent) / 100));
    }
  },
  mounted() {
    let self = this;
    self.option = self.options || {};
    $(self.$refs.rating).rating(self.options);
  }
};
</script>