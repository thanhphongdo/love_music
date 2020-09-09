<template>
  <div class="container">
    <div ref="message">{{message}}</div>
  </div>
</template>

<script lang="ts">
import "jquery";
import { Vue, Component, Prop } from "vue-property-decorator";
import { SongService } from "../services/song.service";

interface User {
  firstName: string;
  lastName: string;
}

@Component
export default class YourComponent extends Vue {
  message: string = "This is a message";
  songService: SongService;
  constructor() {
    super();
    this.songService = new SongService();
  }
  mounted() {
    // this.songService
    //   .searchAllMV("buồn ơi chào mi", 1)
    //   .then((data) => {
    //     console.log(data);
    //     $(this.$refs.message).html((data as any).html);
    //     // this.songService
    //     //   .getMediaInfo("", data.songs[0].keyEncrypt, "")
    //     //   .then((song) => {
    //     //     console.log(song);
    //     //   })
    //     //   .catch((err) => {
    //     //     console.log(err);
    //     //   });
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
  }
}
</script>
