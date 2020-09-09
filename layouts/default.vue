<template>
  <div class="tw-flex tw-flex-col tw-h-full">
    <div v-show="isWaiting" class="ui segment app-loading">
      <div class="ui active dimmer">
        <div class="ui loader"></div>
      </div>
    </div>
    <Toarst ref="mainToarst" class="tw-w-full" :msg="'ddd'"></Toarst>
    <div class="tw-flex tw-flex-col tw-h-full tw-bg-white">
      <AppActionBar></AppActionBar>
      <div class="tw-flex-1 tw-p-4 tw-overflow-auto">
        <nuxt />
      </div>
      <AppTabBar></AppTabBar>
    </div>
  </div>
</template>
<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import Toarst from "~/components/controls/Toarst.vue";
import ActionBar from "~/components/AppActionBar.vue";
import Logo from "~/components/Logo.vue";
import TabBar from "~/components/AppTabBar.vue";
import { mapState, mapMutations } from "vuex";
@Component({
  computed: {
    ...mapState(["isWaiting"]),
  },
  methods: mapMutations(["showWaiting", "hideWaiting"]),
})
export default class DefaultLayout extends Vue {
  showWaiting: any;
  hideWaiting: any;
  mounted() {
    (window as any).showWaiting = () => {
      this.$store.commit("showWaiting");
    };
    (window as any).hideWaiting = () => {
      this.$store.commit("hideWaiting");
    };
    (EventTarget.prototype as any)["addEventListenerBase"] =
      EventTarget.prototype.addEventListener;
    (EventTarget.prototype as any).addEventListener = function (
      type: any,
      listener: any
    ) {
      if (this !== document.querySelector("body") || type !== "touchmove") {
        this.addEventListenerBase(type, listener);
      }
    };
  }
}
</script>