<script>
import VideoPlayer from "./VideoPlayer.vue";
export default {
  components: {
    VideoPlayer,
  },
  data() {
    return {
      // setting the video options for the video player
      videoOptions: {
        // autoplay: true,
        controls: true,
        // preload: true,
        // aspectRatio: true,
        // fluid: true,
        sources: [
          {
            src: "../assets/PitchPreliminar.mp4",
            type: "video/mp4",
          },
        ],
      },
    };
  },
};
</script>
<template>
  <div class="section-6">
    <h3>Quer saber mais sobre nós?</h3>
    <div class="video-container"><VideoPlayer /></div>
  </div>
</template>
<style>
.section-6 h3 {
  color: #003b8a;
  margin-left: 2rem;
  margin-bottom: 1rem;
  font-size: 24px;
}
.video-container {
  margin: 0 10%;

  /* height: 400px; */
  display: flex;
  justify-content: center;
  align-items: center;
  /* width: 100px; */
  /* background-color: aqua; */
}
</style>
