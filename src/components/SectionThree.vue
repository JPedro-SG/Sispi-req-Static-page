<script setup>
import RocketSVG from "./icons/RocketSVG.vue";
</script>
<template>
  <div class="section-3">
    <div class="img_container"><RocketSVG class="rocketSVG" /></div>
    <div class="gestao">
      <h3>Gestão de Requisitos, Casos de uso e Charters</h3>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque ad culpa
        id pariatur quaerat animi nihil harum minus eius repellendus quam
        voluptatibus, rem dolore fuga facilis earum. Asperiores, quod adipisci!
      </p>
    </div>
  </div>
</template>
<style>
.section-3 {
  display: grid;
  grid-template-columns: 1fr;
  margin-bottom: 2rem;
}

.section-3 .img_container {
  width: 100%;
  background-color: #195cb5;
  display: flex;
  margin-bottom: 1rem;
  /* margin-bottom: 1rem; */
}

.rocketSVG {
  width: 300px;
  margin-left: auto;
  margin-right: auto;
}

.section-3 .gestao {
  margin: 0 10%;
  text-align: center;
}

.gestao h3 {
  /* #195CB5 azul titulos funcionalidades */
  /* #000711 preto dos textos */
  color: #195cb5;
  font-weight: 500;
  margin-bottom: 1rem;
}

.gestao p {
  color: #000711;
}

@media (min-width: 700px) {
  .section-3 {
    /* flex-direction: row;
    justify-content: center;
    align-items: center; */
    grid-template-columns: 1fr 1fr;
    margin-bottom: 0;
  }

  .section-3 .img_container {
    margin-bottom: 0;
  }

  .section-3 .gestao {
    margin: 0;
    margin-top: 1rem;
    text-align: center;
  }

  .gestao h3 {
    font-size: 22px;
  }

  .gestao p {
    margin: 0 10%;
    font-size: 18px;
  }

  /* .rocketSVG {
    width: 400px;
  } */
  .rocketSVG {
    /* width: 600px; */
    width: 100%;
  }
}

@media (min-width: 900px) {
  .rocketSVG {
    /* width: 600px; */
    width: 100%;
  }

  .gestao {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .gestao h3 {
    font-size: 32px;
    max-width: 30ch;
  }
  .gestao p {
    margin: 0;
    max-width: 40ch;
  }
}
</style>
