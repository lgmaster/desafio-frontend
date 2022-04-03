<template>
  <article
    class="home container d-flex flex-column justify-content-between flex-wrap"
  >
    <header class="row justify-self-start">
      <h1>{{ texts[step].title }}</h1>
      <h2>{{ texts[step].text }}</h2>
    </header>
    <div class="row home__content mt-3 d-flex flex-grow-1 align-items-center">
      <Form />
      <div class="col d-none d-md-none d-lg-flex flex-grow-1 align-items-start">
        <img
          :src="require('@/assets/images/desktop-pagina-' + step + '.png')"
          alt="imagem do formulário"
          class="img-fluid"
          v-if="step < 4"
        />
      </div>
    </div>
  </article>
</template>

<script>

export default {
  name: "Home",
  data() {
    return {
    };
  },
  components: {
  },
  computed: {
  },
};
</script>

<style lang="scss">

</style>
