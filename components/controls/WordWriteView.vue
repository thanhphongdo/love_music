<template>
  <div>
    <div class="tw-flex tw-flex-wrap tw-justify-center">
      <div class="tw-mb-1" style="height: 30px; width: 0px"></div>
      <span v-for="(item, index) in chars" :key="index">
        <span v-show="item">{{ item }}</span>
        <span v-show="!item" style="margin: 0px 1px">_</span>
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
      chars: [],
      words: [],
      word: "",
      count: 0
    };
  },
  methods: {
    setWord(word) {
      let self = this;
      self.chars.splice(0);
      self.count = 0;
      self.word = word;
      for (let i = 0; i < word.length; i++) {
        self.chars.push(null);
      }
      this.$emit("onCheck", this.checkWord());
      this.$emit("onCheckFinished", this.checkWordFinished());
    },
    addChar(char) {
      this.chars[this.count] = char;
      this.count++;
      this.chars.__ob__.dep.notify();
      this.$emit("onCheck", this.checkWord());
      this.$emit("onCheckFinished", this.checkWordFinished());
    },
    checkWord() {
      if (this.word == this.chars.join("")) {
        return true;
      }
      return false;
    },
    checkWordFinished() {
      if (this.word == this.chars.join("")) {
        return 1;
      } else {
        let charNotNull = this.chars.filter(item => {
          return item != null;
        });
        if (charNotNull.length == this.word.length) {
          return 0;
        }
        return 2;
      }
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