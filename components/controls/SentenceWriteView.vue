<template>
  <div>
    <div class="tw-flex tw-flex-wrap tw-justify-center">
      <div class="tw-mb-1" style="height: 30px; width: 0px"></div>
      <span v-for="(item, index) in words" :key="index">
        <span class="tw-ml-1 tw-mr-1" v-show="item">{{ item }}</span>
        <span v-show="!item" style="margin: 0px 1px">___</span>
      </span>
    </div>
  </div>
</template>
<script>
import UtilService from "~/services/util.service";
const util = new UtilService();
export default {
  props: {},
  data() {
    return {
      words: [],
      sentence: "",
      count: 0
    };
  },
  methods: {
    setSentence(sentence) {
      let self = this;
      self.words.splice(0);
      self.count = 0;
      self.sentence = sentence;
      sentence = sentence.split(" ");
      for (let i = 0; i < sentence.length; i++) {
        self.words.push(null);
      }
      this.$emit("onCheck", this.checkSentence());
      this.$emit("onCheckFinished", this.checkSentenceFinished());
    },
    addWord(word) {
      this.words[this.count] = word;
      this.count++;
      this.words.__ob__.dep.notify();
      this.$emit("onCheck", this.checkSentence());
      this.$emit("onCheckFinished", this.checkSentenceFinished());
    },
    checkSentence() {
      console.log('-------------');
      console.log(this.sentence.toLowerCase());
      console.log(this.words.join(" ").toLowerCase());
      if (this.sentence.toLowerCase() == this.words.join(" ").toLowerCase()) {
        console.log('--------CHECK TRUE----------');
        return true;
      }
      return false;
    },
    checkSentenceFinished() {
      if (this.sentence.toLowerCase() == this.words.join(" ").toLowerCase()) {
        return 1;
      } else {
        let wordNotNull = this.words.filter(item => {
          return item != null;
        });
        if (wordNotNull.length == this.words.length) {
          return 0;
        }
        return 2;
      }
    }
  },
  mounted() {}
};
</script>
