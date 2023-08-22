<script setup>
import Card from "primevue/card";
import GithubIcon from "./components/GithubIcon.vue";
import MagnGlassIcon from "./components/icons/MagnGlassIcon.vue";
</script>

<template>
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
    <h3>Engenharia de Requisitos</h3>
    <div class="video"></div>
  </div>
  <!-- Terceira Seção -->
  <div class="section-3">
    <div>
      <h3>Funcionalidades</h3>

      <div class="function-card">
        <font-awesome-icon :icon="['fas', 'gears']" />
        <p>Gestão de Requisitos</p>
      </div>
      <div class="function-card">
        <font-awesome-icon :icon="['far', 'clipboard']" />
        <p>Gestão de Charters e Casos de Uso</p>
      </div>
      <div class="function-card">
        <font-awesome-icon :icon="['far', 'clipboard']" />
        <p>Acompanhamento de testes</p>
      </div>
      <div class="function-card">
        <MagnGlassIcon />
        <p>Rastreabilidade</p>
      </div>
      <div class="function-card">
        <GithubIcon class="gitIcon" />
        <p>Controle de dependencias</p>
      </div>
    </div>
  </div>
  <!-- Quarta seção -->
  <div class="section-4">
    <h3>Equipe de Desenvolvimento</h3>
    <p>Gestão de Requisitos</p>
    <p>Guilherme</p>
    <p>João Pedro</p>
    <p>José Gabriel</p>
    <p>Leandro</p>
    <p>Tiago</p>
  </div>
  <footer>
    <div>Contato</div>
    Sispi@dcomp.ufs.br
  </footer>
</template>

<style scoped>
.section-1,
.section-2,
.section-3,
.section-4,
footer {
  padding: 2rem;
}

.function-card {
  margin-top: 0.5rem;
  padding: 1rem;
  border-radius: 5px;
  box-shadow: 0 2px 1px -1px rgba(0, 0, 0, 0.2), 0 1px 1px 0 rgba(0, 0, 0, 0.14),
    0 1px 3px 0 rgba(0, 0, 0, 0.12);
}

.gitIcon {
  width: 40px;
}
p {
  max-width: 80ch;
  text-align: left;
}
.section-1 h1 {
  margin-bottom: 0;
  padding-bottom: 0;
}
.section-1 p {
  margin-top: 0.8rem;
}

.section-2,
.section-3,
.section-4 {
  padding: 2rem;
}
@media (max-width: 365px) {
}
.container {
  display: flex;
  flex-direction: row;
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
