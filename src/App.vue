<script setup>
import GithubIcon from "./components/GithubIcon.vue";

import SectionOne from "./components/SectionOne.vue";
import SectionTwo from "./components/SectionTwo.vue";
import SectionThree from "./components/SectionThree.vue";
import SectionFour from "./components/SectionFour.vue";
import SectionFive from "./components/SectionFive.vue";
import SectionSix from "./components/SectionSix.vue";
import SectionSeven from "./components/SectionSeven.vue";
import SectionEight from "./components/SectionEight.vue";
import Footer from "./components/Footer.vue";
</script>

<template>
  <div class="container">
    <header>
      <img src="./assets/logo_dark_nobg.png" />
      <div class="info">
        <h1>SISGIP</h1>
        <span>Engenharia de Requisitos</span>
      </div>
    </header>
    <!-- Primeira Seção -->
    <SectionOne />
    <!-- Segunda Seção -->
    <SectionTwo />
    <!-- Terceira Seção -->
    <SectionThree />
    <!-- Quarta seção -->
    <SectionFour />
    <!-- Quinta seção -->
    <SectionFive />
    <!-- Sexta seção (video) -->
    <SectionSix />
    <!-- Sétima seção -->
    <SectionSeven />
    <!-- Oitava seção -->
    <SectionEight />
    <Footer />
  </div>
</template>

<style>
* {
  margin: 0;
  padding: 0;
  font-family: "Jost", sans-serif;
  /* color: black; */
}

/* #004AAD azul principal */
/* #003B8A azul forte em algums titulos tbm */
/* #195CB5 azul titulos funcionalidades */
/* #000711 preto dos textos */
/* #7B95F9 azul nome do dev */
header {
  background-color: #004aad;
  display: flex;
  gap: 1rem;
  color: white;
  padding: 1rem;
}

header .info {
  margin-top: 0.8rem;
  line-height: 1.5rem;
}

header div h1 {
  /* border: 1px solid black; */
  font-weight: 700;
  font-size: 28px;
  letter-spacing: 1px;
  /* display: inline-block; */
}

header div span {
  font-size: 18px;
  display: inline-block;
}

header img {
  width: 70px;
  height: 70px;
}

/* .section-3 h3 {
  font-weight: bold;
} */
</style>
