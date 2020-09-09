<template>
  <div>
    <div class="tw-flex tw-flex-wrap tw-justify-center">
      <div class="tw-mb-1" style="height: 30px; width: 0px"></div>
      <div
        v-for="(item, index) in chars"
        :key="index"
        style="width: 30px; height: 30px;"
        class="tw-mb-1"
        :class="{'tw-mr-1': index < chars.length - 1}"
      >
        <button
          v-transition="{duration: (0.2 * index) + 's', againOn: 'click', againDuration: '0.2s'}"
          class="ui blue basic button tw-p-0 tw-m-0"
          style="width: 30px; height: 30px; display: none"
          @click="selectChar(item)"
        >{{ item }}</button>
      </div>
    </div>
  </div>
</template>
<script>
import UtilService from "~/services/util.service";
const util = new UtilService();
export default {
  data() {
    return {
      chars: [],
      words: []
    };
  },
  methods: {
    callFunction(funcName, params) {
      return $(this.$refs.accordion).accordion(funcName, params);
    },
    setWord(word) {
      let self = this;
      self.chars.splice(0);
      setTimeout(() => {
        self.chars.splice(0);
        if (word) {
          for (let i = 0; i < word.length; i++) {
            self.chars.push(word[i]);
          }
        }
        util.swapRandomArray(self.chars, 100);
      }, 100);
    },
    selectChar(char) {
      this.$emit("onSelectChar", char);
    }
  },
  mounted() {
    // if (this.sentence) {
    //   let sentenceSplit = this.sentence.split(" ");
    //   for (let i = 0; i < sentenceSplit.length; i++) {
    //     this.words.push(sentenceSplit[i]);
    //   }
    // }
  }
};
</script>