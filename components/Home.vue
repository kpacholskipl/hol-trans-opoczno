<template>
  <v-card class="home-page">
    <div class="home-page__title--wrapper full-width text-center">
      <p class=" text-uppercase" :class="$vuetify.breakpoint.mdAndUp?'home-page__title':'home-page__title--mobile'">
        Pomożemy Ci <br>w każdej chwili! </p>
      <p class="mx-md-0 mx-xl-0 mx-lg-0 mx-2">
        Z niewiadomych przyczyn zepsuł Ci się samochód osobowy lub ciężarowy?<br>
        Miałeś wypadek? <br>Potrzebujesz pomocy drogowej?<br>
        Skontaktuj się z nami już teraz!<br></p>
      <v-btn width="140px" class="home-page__button primary text-uppercase font-weight-bold black--text"
             href="tel:609049726"> Zadzwoń
      </v-btn>
    </div>
    <!--    <v-btn class="mx-auto mb-10" outlined color="transparent"  absolute bottom fab>-->
    <!--      <v-icon color="white">-->
    <!--        mdi-chevron-down-->
    <!--      </v-icon>-->
    <!--    </v-btn>-->
    <div class="home-page__blur"></div>
  </v-card>
</template>

<script>
export default {
  name: "Home",
}
</script>

<style lang="scss" scoped>
.home-page {
  height: 100vh;
  width: 100vw;
  background: url('~static/home.jpg') no-repeat center;
  background-size: cover;
  position: relative;
}

.home-page__blur {
  position: absolute;
  background-color: #111111;
  height: 20vh;
  top: 90vh;
  filter: blur(25px);
  width: 100vw;
  left: 0;
}

.home-page__title {
  font-weight: 900;
  font-size: 3.5rem;
  transform: rotate(-0.5deg);
  line-height: 5rem;
}
.home-page__title--mobile{
  font-size: 1rem;
}
.home-page__title--mobile {
  font-weight: 900;
  font-size: 2.25rem;
  transform: rotate(-0.5deg);
  line-height: 3rem;
}

.home-page__button {
  letter-spacing: -0.75px;
}

.home-page__arrow {
  position: absolute;
  top: 50%;
  transform: translate(50%, 50%);
}

.home-page__title--wrapper {
  position: absolute;
  top: 50%;
  transform: translateY(-45%);
}
</style>
