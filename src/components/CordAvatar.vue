<script>
import GithubIcon from "./GithubIcon.vue";
export default {
  components: {
    GithubIcon,
  },
  props: {
    src: {
      type: String,
      default() {
        return "";
      },
    },
    name: {
      type: String,
      default() {
        return "";
      },
    },
  },
};
</script>
<template>
  <div class="cord-card">
    <div class="cord-img">
      <div>
        <img :src="this.src" alt="" />
      </div>
    </div>
    <div class="cord-info">
      <p class="name">{{ this.name }}</p>
    </div>
  </div>
</template>
<style>
.cord-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: fit-content;
  background-color: white;
  border-radius: 10px;
  /* height: 200px; */
  /* background-color: white; */
}

.cord-img {
  width: 150px;
  height: 150px;
  /* border-radius: 50%; */
  border-radius: 10px;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 1rem;
}

.cord-img img {
  max-width: 120px;
}

.cord-info {
  background-color: white;
  border-radius: 10px;
  padding: 0.8rem 1.25rem;
}

.cord-info .name {
  max-width: 20ch;
  text-align: center;
  color: #7b95f9;
  font-weight: 500;
}
</style>
