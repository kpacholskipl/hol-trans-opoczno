<template>
  <v-container class="contact secondary mx-lg-15 mx-xl-15">
   <p class="contact__title font-weight-bold mb-15" :class="{'text-center':$vuetify.breakpoint.smAndDown}" >Kontakt</p>
    <v-row class="mx-lg-15 mx-xl-15">
      <v-col cols="12" xl=4 lg=4 md=4 class="px-0 "
             style="background-color: unset">
        <v-card height="100%" class="d-flex align-center full-width">
          <div class="text-center full-width" :class="{'py-5':$vuetify.breakpoint.smAndDown}">
            <span class="font-weight-bold">Pomoc drogowa Opoczno</span><br>
            ul. Dworcowa 1, 26-332 Opoczno<br>
            Kontakt: 609 049 726<br>
            Email: cpd@vp.pl<br>
            <v-btn width="140px" class="home-page__button primary text-uppercase font-weight-bold black--text my-3" href="tel:609049726">
              Zadzwoń
            </v-btn>
          </div>
        </v-card>
      </v-col>
      <v-col class="px-0" cols="12" xl="8" lg="8" md="8">
        <iframe src="https://www.google.com/maps/d/embed?mid=1oOn_9Wul2EwESvSt2qp5gdFgwBuHjYeo&ehbc=2E312F" width="100%"
                height="300"></iframe>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "Contact",
  data() {
    return {}
  }
}
</script>

<style lang="scss" scoped>
.contact {
}

.contact__title {
  font-size: 2rem;
}
</style>
