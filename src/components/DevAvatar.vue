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
    email: {
      type: String,
      default() {
        return "";
      },
    },
    git: {
      type: String,
      default() {
        return "";
      },
    },
  },
};
</script>
<template>
  <div class="dev-card">
    <div class="dev-info">
      <div class="dev-img">
        <div>
          <img :src="this.src" alt="" />
        </div>
      </div>
      <p class="name">{{ this.name }}</p>
      <p class="email">{{ this.email }}</p>
      <div class="footer">
        <span>Fullstack</span>
        <a target="_blank" :href="this.git"><GithubIcon class="gitIcon" /></a>
      </div>
    </div>
  </div>
</template>
<style>
.dev-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: fit-content;
}

.dev-img {
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

.dev-img img {
  /* width: 100px;
  height: 100px; */
  max-width: 120px;
  /* border-radius: 50%; */
}

.dev-info {
  background-color: white;
  border-radius: 10px;
  padding: 0.8rem 1.25rem;
  line-height: 1rem;
  color: rgb(26, 21, 21);
}

.dev-info .name {
  margin-bottom: 0.25rem;
  color: #7b95f9;
  font-weight: 500;
}

.dev-info div {
  margin-top: 1rem;
}

.gitIcon {
  width: 30px;
}
.email {
  font-size: 14px;
}
.footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
