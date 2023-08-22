<script setup>
import Card from "primevue/card";
import GithubIcon from "./components/GithubIcon.vue";
import MagnGlassIcon from "./components/icons/MagnGlassIcon.vue";
import ClipboardIcon from "./components/icons/ClipboardIcon.vue";
import GearsIcon from "./components/icons/GearsIcon.vue";
import CheckedIcon from "./components/icons/CheckedIcon.vue";
import ListcheckIcon from "./components/icons/ListcheckIcon.vue";
import CsuIcon from "./components/icons/CsuIcon.vue";
</script>

<template>
  <div class="container">
    <header><img src="./assets/SispiLogo.png" />Sisgpi</header>
    <!-- Primeira Seção -->
    <div class="section-1">
      <h1>Sisgpi</h1>
      <h2>Engenharia de Requisitos</h2>
      <p>
        O Sisgpi - Engenharia de Requisitos facilita a gestão do software,
        concentrando as informações me um só lugar, melhora a comunicação entre
        testadores e desenvolvedores, além de facilitar os teste dos caso de uso
        do sistema.
      </p>
    </div>

    <!-- Segunda Seção -->
    <div class="section-2">
      <div class="video">
        <!-- <video src="./assets/PitchPreliminar.mkv" type="video/mp4" controls>
        <source src="./assets/PitchPreliminar.mkv" type="video/mp4" />
      </video> -->
        <!-- <vue-core-video-player
        src="./assets/PitchPreliminar.mkv"
      ></vue-core-video-player> -->
      </div>
    </div>
    <!-- Terceira Seção -->
    <div class="section-3">
      <h3>Funcionalidades</h3>
      <div class="wrapper">
        <div class="function-card">
          <GearsIcon class="function-icons" />
          <p>Gestão de Requisitos</p>
        </div>
        <div class="function-card">
          <ClipboardIcon class="function-icons" />
          <p>Gestão de Charters</p>
        </div>
        <div class="function-card">
          <CsuIcon class="function-icons" />
          <p>Gestão de Casos de Uso</p>
        </div>
        <div class="function-card">
          <CheckedIcon class="function-icons" />
          <p>Acompanhamento de testes</p>
        </div>
        <div class="function-card">
          <MagnGlassIcon class="function-icons" />
          <p>Rastreabilidade</p>
        </div>
        <div class="function-card">
          <ListcheckIcon class="function-icons" />
          <p>Controle de dependencias</p>
        </div>
      </div>
    </div>
    <!-- Quarta seção -->
    <div class="section-4">
      <!-- <GithubIcon class="gitIcon" /> -->
      <h3>Equipe de Desenvolvimento</h3>
      <div class="wrapper">
        <div class="dev-card">
          <p>Guilherme</p>
          <a href=""><GithubIcon class="gitIcon" /></a>
        </div>
        <div class="dev-card">
          <p>João Pedro</p>
          <a href=""><GithubIcon class="gitIcon" /></a>
        </div>
        <div class="dev-card">
          <p>José Gabriel</p>
          <a href=""><GithubIcon class="gitIcon" /></a>
        </div>
        <div class="dev-card">
          <p>Leandro</p>
          <a href=""><GithubIcon class="gitIcon" /></a>
        </div>
        <div class="dev-card">
          <p>Tiago</p>
          <a href=""><GithubIcon class="gitIcon" /></a>
        </div>
      </div>
      <div></div>
    </div>
    <footer>
      <div>Contato</div>
      Sispi@dcomp.ufs.br
    </footer>
  </div>
</template>

<style scoped>
.section-1,
.section-2,
.section-3,
.section-4,
footer {
  padding: 2rem;
}
p {
  max-width: 80ch;
  text-align: left;
}
.section-1 {
  /* color: white; */
  min-height: 400px;
  /* background: url("https://images.unsplash.com/photo-1532619675605-1ede6c2ed2b0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"); */
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-family: "Roboto", sans-serif;
}

.section-1 h1 {
  font-size: 40px;
  font-weight: bold;
  margin-bottom: 0;
  padding-bottom: 0;
}
.section-1 p {
  margin-top: 0.8rem;
  font-weight: 400;
}

.section-2 {
  padding: 0;
}
.video {
  width: 100%;
  display: flex;
  justify-content: center;
  /* background-color: #204887; */
}

.video video {
  height: 400px;
}

.dev-card {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 0.5rem;
  padding: 1rem;
  border-radius: 5px;
  box-shadow: 0 2px 1px -1px rgba(0, 0, 0, 0.2), 0 1px 1px 0 rgba(0, 0, 0, 0.14),
    0 1px 3px 0 rgba(0, 0, 0, 0.12);
  width: 200px;
}

.section-3 .wrapper {
  display: grid;
  grid-template-columns: 1fr;
}

.section-4 .wrapper {
  display: flex;
  gap: 0.8rem;
  flex-wrap: wrap;
}

@media (min-width: 400px) {
  .section-3 .wrapper {
    grid-template-columns: 1fr 1fr;
    gap: 0.8rem;
  }
}

@media (min-width: 800px) {
  .section-3 .wrapper {
    padding-left: 4rem;
    padding-right: 4rem;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 0.8rem;
  }
}
.function-card {
  display: flex;
  flex-direction: row;
  gap: 0.4rem;
  align-items: center;
  margin-top: 0.5rem;
  padding: 1rem;
  border-radius: 5px;
  box-shadow: 0 2px 1px -1px rgba(0, 0, 0, 0.2), 0 1px 1px 0 rgba(0, 0, 0, 0.14),
    0 1px 3px 0 rgba(0, 0, 0, 0.12);
}

@media (min-width: 800px) {
  .function-card {
    flex-direction: column;
  }

  .function-icons {
    height: 24px;
  }
}

.gitIcon {
  width: 20px;
}

@media (max-width: 365px) {
}
.container {
  background-color: white;
}

header {
  display: flex;
  justify-content: left;
  align-items: center;
  padding: 0.8rem 0.8rem;
}

img {
  width: 40px;
}

.video {
  height: 400px;
}

.section-3 {
}

/* .section-3 h3 {
  font-weight: bold;
} */
</style>
