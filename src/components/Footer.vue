<template>
  <footer>
    <div class="sispi-container">
      <img src="../assets/logo_dark_nobg.png" />
      <div>
        <h1>SISGIP</h1>
        <span>Engenharia de Requisitos</span>
      </div>
    </div>
    <div class="logos-ufs">
      <img src="../assets/logo_dcomp.png" alt="" />
      <img src="../assets/logo_ufs.png" alt="" />
    </div>
  </footer>
</template>
<style>
footer {
  background-color: white;
}
.sispi-container {
  display: flex;
  background-color: #004aad;
  justify-content: center;
  align-items: center;
  color: #fff;
  padding-top: 1rem;
  padding-bottom: 1rem;
}

.sispi-container img {
  width: 100px;
  height: 100px;
}

.sispi-container div {
  margin-left: 1rem;
  line-height: 1rem;
}

.sispi-container div h1 {
  font-weight: 500;
  margin-top: 1.5rem;
  margin-bottom: 0.6rem;
}

.logos-ufs {
  padding: 1rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  background-color: white;
}

.logos-ufs img {
  width: 200px;
}

@media (min-width: 1000px) {
  footer {
    display: flex;
  }
  .sispi-container {
    display: flex;
    background-color: #004aad;
    color: #fff;
    /* width: 400px; */
    clip-path: polygon(0 0, 100% 0, 81% 100%, 0% 100%);
    width: 40%;
  }
  .sispi-container img {
    width: 100px;
    height: 100px;
  }

  .sispi-container div {
    margin-left: 1rem;
    line-height: 1rem;
  }

  .sispi-container div h1 {
    font-weight: 500;
    margin-top: 1.5rem;
    margin-bottom: 0.6rem;
  }

  .sispi-container div span {
    font-size: 18px;
  }

  .logos-ufs {
    margin-left: auto;
    margin-right: 2rem;
    flex-direction: row;
  }
}
</style>
