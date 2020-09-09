<template>
  <div class="tw-h-12 tw-bg-blue-light tw-text-white tw-flex">
    <nuxt-link to="/course" class="tw-w-10 tw-h-full tw-flex-1 tw-flex tw-justify-center">
      <span
        :class="page.transaction?'tw-text-yellow':'tw-text-white'"
        class="tw-flex tw-flex-col tw-justify-center tw-items-center"
      >
        <span>
          <i class="book icon"></i>
        </span>
        <span>Course</span>
      </span>
    </nuxt-link>
    <nuxt-link to="/youtube" class="tw-w-10 tw-h-full tw-flex-1 tw-flex tw-justify-center">
      <span
        :class="page.history?'tw-text-yellow':'tw-text-white'"
        class="tw-flex tw-flex-col tw-justify-center tw-items-center"
      >
        <span>
          <i class="youtube icon"></i>
        </span>
        <span>Youtube</span>
      </span>
    </nuxt-link>
    <nuxt-link to="/ec_101" class="tw-w-10 tw-h-full tw-flex-1 tw-flex tw-justify-center">
      <span
        :class="page.history?'tw-text-yellow':'tw-text-white'"
        class="tw-flex tw-flex-col tw-justify-center tw-items-center"
      >
        <span>
          <i class="file video icon"></i>
        </span>
        <span>EC101</span>
      </span>
    </nuxt-link>
    <nuxt-link to="/account" class="tw-w-10 tw-h-full tw-flex-1 tw-flex tw-justify-center">
      <span
        :class="page.account?'tw-text-yellow':'tw-text-white'"
        class="tw-flex tw-flex-col tw-justify-center tw-items-center"
      >
        <span>
          <i class="user outline icon"></i>
        </span>
        <span>Account</span>
      </span>
    </nuxt-link>
  </div>
</template>
<script lang="ts">
import { mapState, mapMutations } from "vuex";
import { Vue, Component, Prop } from "vue-property-decorator";
@Component({
  computed: mapState(["page"]),
})
export default class AppTabBar extends Vue {
  page: any;
  constructor() {
    super();
  }

  mounted() {
  }
}
</script>