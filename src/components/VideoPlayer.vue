<template>
  <div>
    <video controls ref="videoPlayer" class="video-js">
      <source src="../assets/PitchPreliminar.mp4" type="video/mp4" />
    </video>
  </div>
</template>

<script>
import videojs from "video.js";
import "video.js/dist/video-js.css";

export default {
  name: "VideoPlayer",
  props: {
    options: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  data() {
    return {
      player: null,
    };
  },
  mounted() {
    this.player = videojs(this.$refs.videoPlayer, this.options, () => {
      this.player.log("onPlayerReady", this);
    });
    this.player.controls(true);

    // this.player.aspectRatio("4:3");
    // this.player.fluid(true);
    this.player.fill(true);
    console.log(this.$refs.videoPlayer);

    // this.player.fill(true);
  },
  beforeDestroy() {
    if (this.player) {
      this.player.dispose();
    }
  },
};
</script>
<style>
.video-js {
  width: 300px !important;
  height: 200px !important;
}

@media (min-width: 600px) {
  .video-js {
    width: 400px !important;
    height: 300px !important;
  }
}

@media (min-width: 700px) {
  .video-js {
    width: 700px !important;
    height: 450px !important;
  }
}
</style>
