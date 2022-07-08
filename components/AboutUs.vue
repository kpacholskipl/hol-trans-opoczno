<template>
  <v-row class="about-us mx-lg-15 mx-xl-15 mx-1">
    <v-col class="about-us__first-column ml-lg-15 ml-xl-15 pr-xl-0 pr-lg-0 pr-md-0"
           :class="{'full-width': $vuetify.breakpoint.smAndDown}" xl="6" lg="6" cols="12" md="6">
      <v-carousel class="about-us__carousel" hide-delimiters height="50vh">
        <v-carousel-item
          class="full-width"
          v-for="(item,i) in items"
          :key="i"
          :src="item"
        ></v-carousel-item>
      </v-carousel>
    </v-col>
    <v-col class="about-us__second-column mr-lg-15 mr-xl-15" col="6">
      <v-card class="about-us__card primary black--text pa-10">
        <p class="about-us__title font-weight-bold">O nas</p>
        <p class="about-us__text">
          Firma Hol-Trans powstała w 2000 roku. Świadczymy pomoc drogą 24h na dobę przez 7 dni w tygodniu na terenie
          całego
          kraju i zagranicy. Działamy szybko i skutecznie, świadcząc pomoc drogową w miejscach wypadków i awarii
          samochodów
          ciężarowych i osobowych.
          Jesteśmy gotowi do podjęcia interwencji o każdej porze w najkrótszym możliwym czasie.
          <br><br>
          Jako firma z długoletnim doświadczeniem oferujemy również transport wozków widłowych, maszyn rolniczych i
          budowlanych. Zajmujemy się również wypożyczaniem samochodów zastępczych. Dodatkowo proponuejmy wynajem lawet.
          Dysponujemy specjalistycznym sprzętem najwyższej klasy!
        </p>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "AboutUs",
  data() {
    return {
      items: [
        'slider/6.png',
        'slider/4.jpg',
        'slider/3.jpg',
        'slider/2.jpg',
        'slider/1.jpg',
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.about-us {
  margin-bottom: 15vh;
}

.about-us__first-column {
  z-index: 2;

  @media #{$smAndDown} {
    padding-bottom: 0;
    max-width: 90vw !important;
  }
}

.about-us__carousel {
  @media #{$mdAndUp}{
    border-radius: 25px 10px 10px 25px;
  }
  border-radius: 25px 25px 0 0;
}

.about-us__second-column {
  @media #{$smAndDown} {
    padding-top: 0;
    max-width: 94vw !important;
  }
  @media #{$mdAndUp}{
    margin-left: -20px;
    height: 40vh
  }
  z-index: 1;
  height: auto
}

.about-us__card {
  @media #{$mdAndUp}{
    height: 42vh;
    margin-top: 4vh;
    border-radius: 0 25px 25px 0
  }
  height: fit-content;
  border-radius: 0 0 25px 25px;

}

.about-us__title {
  font-size: 1.25rem;
}

.about-us__text {
  font-size: 0.725rem;
}
</style>
