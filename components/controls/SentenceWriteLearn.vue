<template>
  <div>
    <div class="tw-flex tw-flex-wrap tw-justify-center">
      <div class="tw-mb-1" style="height: 30px; width: 0px"></div>
      <div
        v-for="(item, index) in words"
        :key="index"
        style="min-width: 30px; height: 30px;"
        class="tw-mb-1"
        :class="{ 'tw-mr-1': index < words.length - 1 }"
      >
        <button
          v-transition="{
            duration: 0.2 * index + 's',
            againOn: 'click',
            againDuration: '0.2s'
          }"
          class="ui blue basic button tw-pt-0 tw-pb-0 tw-pl-2 tw-pr-2 tw-m-0 word-btn"
          style="min-width: 30px; height: 30px; display: none"
          @click="selectWord(item, $event)"
        >
          {{ item }}
        </button>
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
      words: []
    };
  },
  methods: {
    callFunction(funcName, params) {
      return $(this.$refs.accordion).accordion(funcName, params);
    },
    setSentence(sentence) {
      let self = this;
      self.words.splice(0);
      setTimeout(() => {
        self.words.splice(0);
        if (sentence) {
          sentence = sentence.split(" ");
          for (let i = 0; i < sentence.length; i++) {
            self.words.push(sentence[i]);
          }
        }
        util.swapRandomArray(self.words, 100);
      }, 100);
    },
    selectWord(word, event) {
      this.$emit("onSelectWord", word);
      // console.log(event);
      let btnWidth = $(event.target).width();
      console.log(btnWidth);
      $(event.target)
        .parent()
        .width(btnWidth);
    }
  },
  mounted() {}
};
</script>
