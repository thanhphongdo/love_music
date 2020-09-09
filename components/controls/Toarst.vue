<template>
  <div
    ref="message"
    class="tw-fixed tw-pin-b tw-w-full tw-text-center tw-z-50"
    style="margin-bottom: 4rem; display: none"
  >
    <span
      class="tw-pt-1 tw-pb-1 tw-pl-2 tw-pr-2 tw-rounded-lg tw-text-white tw-bg-tr-black-7"
    >{{ msg }}</span>
  </div>
</template>
<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
@Component
export default class Toarst extends Vue {
  @Prop(Number) readonly time: number | undefined;

  @Prop(String) msg: string | undefined;

  mounted() {}

  showMessage(msg: string) {
    let self = this;
    this.msg = msg;
    ($(this.$refs.message) as any).transition({
      animation: "fade",
      duration: "1s",
    });
    setTimeout(() => {
      ($(this.$refs.message) as any).transition({
        animation: "fade",
        duration: "1s",
      });
    }, parseInt((this.time as any) || 1000));
  }
  hide() {
    ($(this.$refs.message) as any).transition({
      animation: "fade",
      duration: "1s",
    });
  }
}
// export default {
//   props: ["time"],
//   data() {
//     return {
//       msg: null,
//       show: false
//     };
//   },
//   methods: {
//     showMessage(msg) {
//       let self = this;
//       this.msg = msg;
//       $(this.$refs.message).transition({
//         animation: "fade",
//         duration: "1s"
//       });
//       setTimeout(() => {
//         $(self.$refs.message).transition({
//           animation: "fade",
//           duration: "1s"
//         });
//       }, parseInt(this.time || 1000));
//     },
//     hide() {
//       $(this.$refs.message).transition({
//         animation: "fade",
//         duration: "1s"
//       });
//     }
//   },
//   mounted() {}
// };
</script>