<template>
  <v-footer class="footer d-flex justify-center secondary mt-15 px-lg-15 px-xl-15 px-md-10 px-0">
    <div class="footer__card mx-xl-15 mx-lg-15 mx-md-10 mx-3">
      <p class="footer__title text-center mb-2"><span class="primary--text font-weight-bold">Pomoc drogowa</span> zawsze
        blisko Ciebie!</p>
      <p class="footer__text text-center mb-1">Opoczno, Tomaszów Mazowiecki, Żarnów, Sulejów, Przysucha, Inowłódz,
        Paradyż, Drzewica,
        Piotrków Trybunalski, Spała, Wolbórz, Mniszków, Łódź </p>
    </div>
    <br><br>
    <p class="text-center full-width mt-10 mb-0"> © Copyright 2021 Pomoc Drogowa Hol-Trans. Wszelkie prawa
      zastrzeżone.</p>
  </v-footer>
</template>

<script>
export default {
  name: "Footer",
  data() {
    return {}
  }
}
</script>

<style lang="scss" scoped>
.footer__card {
  border: 1px solid #333333;
  padding: 2vh 5vw;
}
.footer__title{
  font-size: 1rem;
}
.footer__text{
  font-size: 0.75rem;
}
</style>
