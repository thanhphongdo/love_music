<template>
  <div ref="modal" class="ui modal">
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
      return $(this.$refs.modal).modal(funcName, params);
    },
    show() {
      $(this.$refs.modal).modal("show");
    },
    hide() {
      $(this.$refs.modal).modal("hide");
    },
    setting(key, value) {
      $(this.$refs.modal).modal("setting", key, value);
    }
  },
  mounted() {
    let self = this;
    self.modalOptions = self.options || {};
    $(self.$refs.modal).modal(self.modalOptions);
  }
};
</script>