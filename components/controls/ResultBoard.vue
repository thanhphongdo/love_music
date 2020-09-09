<template>
  <div>
    <div class="tw-pl-8 tw-pr-8 tw-pb-8">
      <div
        class="tw-p-4 tw-mb-4 tw-border-blue-light tw-rounded-lg tw-border tw-border-solid tw-text-center tw-relative"
      >
        <div class="tw-text-4xl tw-text-center">
          <span :style="{ color: scoreColor }">{{ runScore }}</span>
          <span class="tw-text-blue">/{{ maxScore }}</span>
        </div>
        <div>
          <slot></slot>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState, mapMutations } from "vuex";
import UtilService from "~/services/util.service";
const util = new UtilService();
export default {
  components: {},
  computed: {},
  data() {
    return {
      runScore: 0,
      score: 0,
      maxScore: 0,
      scoreColor: "rgba(52,144,220,0.5)"
    };
  },
  methods: {
    showScore(score, maxScore) {
      let self = this;
      let color = "rgba(52,144,220,{0})";
      this.runScore = 0;
      this.score = score;
      this.maxScore = maxScore;
      let timer = setInterval(() => {
        if (self.runScore == self.score) {
          clearInterval(timer);
          return;
        }
        let step = self.runScore * (0.5 / maxScore);
        self.scoreColor = util.stringBuilder(color, 0.5 + step);
        self.runScore++;
      }, 150);
    }
  },
  mounted() {}
};
</script>
