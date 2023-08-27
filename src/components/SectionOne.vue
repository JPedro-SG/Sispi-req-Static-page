<script setup>
import RequirementsEngSVG from "./icons/RequirementsEngSVG.vue";
</script>
<template>
  <div class="section-1">
    <div class="section-1__wrapper">
      <RequirementsEngSVG class="req-svg" />
      <h1>Agilize sua documentação!</h1>
    </div>
  </div>
</template>
<style>
.section-1 {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #004aad;
  color: white;
  position: relative;
  height: 300px;
}

.section-1__wrapper {
  position: absolute;
  top: -50px;
}

.section-1 h1 {
  position: absolute;
  bottom: 0;
  width: 100%;
  text-align: center;
  font-size: 24px;
  /* font-size: 49px; */
}

.req-svg {
  width: 300px;
}

@media (min-width: 400px) {
  .section-1 {
    height: 400px;
  }
  .req-svg {
    width: 400px;
  }
}

@media (min-width: 800px) {
  .section-1 {
    height: 580px;
  }
  .section-1__wrapper {
    top: -100px;
  }
  .section-1 h1 {
    position: absolute;
    bottom: 0;
    font-size: 49px;
  }

  .req-svg {
    width: 600px;
  }
}
</style>
