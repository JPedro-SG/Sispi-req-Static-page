<script setup>
import DevAvatar from "./DevAvatar.vue";
import CordAvatar from "./CordAvatar.vue";
</script>
<template>
  <div class="section-7">
    <div class="section-7-devs">
      <h3>Equipe de Desenvolvimento</h3>
      <div class="dev-container">
        <DevAvatar
          name="Tiago Oliveira"
          email="tiago.sie90@gmail.com"
          git="https://github.com/tiagoods"
          src="https://www.sigaa.ufs.br/sigaa/verFoto?idFoto=1389160&key=6c59f56a9f5d7c8fd1e86f2391eee8bd"
        />
        <DevAvatar
          name="Leandro Santana"
          email="leandro7531591@gmail.com"
          git="https://github.com/leld21"
          src="https://www.sigaa.ufs.br/sigaa/verFoto?idFoto=1816290&key=fc9c00504048242d6a30c618e7dd4f00"
        />
        <DevAvatar
          name="José Gabriel"
          email="kidgbzin@gmail.com"
          git="https://github.com/KidGbzin"
          src="https://www.sigaa.ufs.br/sigaa/verFoto?idFoto=1044579&key=612d02b595b02df64e0b77151a87c3ad"
        />
        <DevAvatar
          name="João Pedro Soares"
          email="jpsoarestt@gmail.com"
          git="https://github.com/JPedro-SG"
          src="https://avatars.githubusercontent.com/u/81583744?v=4"
        />
        <DevAvatar
          git="https://github.com/gjstos"
          email="email@example.com"
          name="Guilherme Santos"
          src="https://avatars.githubusercontent.com/u/34632265?v=4"
        />
      </div>
    </div>
    <div class="section-7-orientadores">
      <h3>Coordenação</h3>
      <div class="cord-container">
        <CordAvatar
          name="Dra Debora Maria Coelho Nascimento"
          src="https://www.sigaa.ufs.br/sigaa/verFoto?idFoto=1353818&key=951df5e7e7b57e2c39bad004112ffa9f"
        />
        <CordAvatar
          name="Dra Adicinéia Aparecida de Oliveira"
          src="https://www.sigaa.ufs.br/sigaa/verFoto?idFoto=2552750&key=9a118fcc3fa898eea8618faa638191cc"
        />
      </div>
    </div>
  </div>
</template>
<style>
.section-7 {
  margin-top: 2rem;
  background-color: #004aad;
}

.section-7 h3 {
  color: white;
  margin-left: 2rem;
  margin-bottom: 1rem;
  font-size: 24px;
}

.section-7 .dev-container {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 1rem;
}

.section-7 .cord-container {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1rem;
  /* margin-bottom: 1rem; */
  padding-bottom: 2rem;
}
</style>
