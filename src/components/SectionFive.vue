<script setup>
import CompletedSVG from "./icons/CompletedSVG.vue";
</script>
<template>
  <div class="section-5">
    <div class="testes">
      <h3>Acompanhamento de testes</h3>
      <p>
        Com o Sispi - Engenharia de Requisitos, você poderá criar tarefas de
        implementações para seus requisitos, casos de usos e charters, além
        disso, você poderá acompanhar os resultados obtidos pela equipe de
        testes.
      </p>
    </div>
    <div class="img_container"><CompletedSVG class="completedSVG" /></div>
  </div>
</template>
<style>
.section-5 {
  display: grid;
  grid-template-columns: 1fr;
  padding-bottom: 2rem;
  background-color: white;
}

.section-5 .img_container {
  width: 100%;
  display: flex;
  /* margin-bottom: 1rem; */
  /* margin-bottom: 1rem; */
}

.completedSVG {
  width: 300px;
  margin-left: auto;
  margin-right: auto;
}

.section-5 .testes {
  margin: 0 10%;
  text-align: center;
}

.testes h3 {
  /* #195CB5 azul titulos funcionalidades */
  /* #000711 preto dos textos */
  color: #195cb5;
  font-weight: 500;
  margin-bottom: 1rem;
}

.testes p {
  color: #000711;
}

@media (max-width: 700px) {
  .section-5 .testes {
    margin-top: 1rem;
  }
}

@media (min-width: 700px) {
  .section-5 {
    /* flex-direction: row;
    justify-content: center;
    align-items: center; */
    grid-template-columns: 1fr 1fr;
    margin-bottom: 0;
  }

  .section-5 .img_container {
    margin-bottom: 0;
  }

  .section-5 .testes {
    margin: 0;
    margin-top: 1rem;
    text-align: center;
  }

  .testes h3 {
    font-size: 22px;
  }

  .testes p {
    margin: 0 10%;
    font-size: 18px;
  }

  /* .rocketSVG {
    width: 400px;
  } */
  .completedSVG {
    /* width: 600px; */
    width: 100%;
  }
}

@media (min-width: 900px) {
  .testes {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .testes h3 {
    font-size: 32px;
    max-width: 30ch;
  }
  .testes p {
    margin: 0;
    max-width: 40ch;
  }
}
</style>
