<script setup>
import GlassSVG from "./icons/GlassSVG.vue";
</script>
<template>
  <div class="section-4">
    <div class="rastreabilidade">
      <h3>Rastreabilidade</h3>
      <p>
        Não precisa se preocupar com modificações feitas pelos membros da
        equipe. O Sispi - Engenharia de Requisitos fornece recursos de
        rastreabilidades para que você possa acompanhar as modificações
        realizadas no projeto.
      </p>
    </div>
    <div class="img_container">
      <GlassSVG class="glassSVG" />
    </div>

    <!-- <GithubIcon class="gitIcon" /> -->
  </div>
</template>
<style>
.section-4 {
  display: grid;
  grid-template-columns: 1fr;
  align-items: center;
  background-color: white;
}

.section-4 .img_container {
  width: 100%;
  background-color: #195cb5;
  display: flex;
}

.glassSVG {
  width: 300px;
  margin-left: auto;
  margin-right: auto;
}

.section-4 .rastreabilidade {
  margin: 0 10%;
  text-align: center;
}

.rastreabilidade h3 {
  /* #195CB5 azul titulos funcionalidades */
  /* #000711 preto dos textos */
  color: #195cb5;
  font-weight: 500;
  margin-bottom: 1rem;
}

.rastreabilidade p {
  color: #000711;
}

@media (max-width: 700px) {
  .section-4 .img_container {
    margin-top: 1rem;
  }
}

@media (min-width: 700px) {
  .section-4 {
    /* flex-direction: row;
    justify-content: center;
    align-items: center; */
    grid-template-columns: 1fr 1fr;
  }

  .section-4 .rastreabilidade {
    margin: 0;
    /* margin-top: 2rem; */
    text-align: center;
  }

  .rastreabilidade h3 {
    font-size: 24px;
  }

  .rastreabilidade p {
    margin: 0 10%;
    font-size: 20px;
  }

  .glassSVG {
    /* width: 600px; */
    width: 100%;
  }
}

@media (min-width: 900px) {
  .rastreabilidade {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .rastreabilidade h3 {
    font-size: 32px;
    max-width: 30ch;
  }
  .rastreabilidade p {
    margin: 0;
    max-width: 40ch;
  }
}
</style>
