<template>
  <div ref="menu" class="ui menu">
    <slot></slot>
  </div>
</template>
<script>
export default {
  props: ["options", "name"],
  data() {
    return {
      ref: null
    };
  },
  methods: {
    callFunction(funcName, params) {
      return $(this.$refs.menu).menu(funcName, params);
    },
    show() {
      $(this.$refs.menu).menu("show");
    },
    hide() {
      $(this.$refs.menu).menu("hide");
    },
    setting(key, value) {
      $(this.$refs.menu).menu("setting", key, value);
    }
  },
  mounted() {
    let self = this;
    self.menuOptions = self.options || {};
    // $(self.$refs.menu).menu(self.menuOptions);
  }
};
</script>