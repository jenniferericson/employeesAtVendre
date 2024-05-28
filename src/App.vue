<script setup lang="ts">
import Employees from "./components/Employees.vue";
</script>

<template>
<header>
    <img
      class="logo"
      src="https://images.teamtailor-cdn.com/images/s3/teamtailor-production/logotype-v3/image_uploads/e3de1bde-f8f5-4193-87de-8bbb12b06da9/original.png"
      alt=""
    />
  </header>
  <h1 class="introText">Vi som jobbar på <span class="introText--red" >Vendre</span></h1>
<Employees/>
</template>

<style scoped lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Oswald:wght@200..700&display=swap");

.introText {
  font-family: Oswald, sans-serif;
  margin-bottom: 3rem;

  &--red {
    color: #5333ED;
  }
}

.logo {
  height: auto;
  width: 8rem;
  margin-bottom: 2rem;
}
</style>
