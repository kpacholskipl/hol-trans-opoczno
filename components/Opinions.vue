<template>
  <v-card class="opinions secondary" elevation="0">
    <v-container class="d-flex">
      <span class="opinions__quote mr-lg-5 mr-xl-5 primary--text"
            style="font-size: 10rem; margin-top: 3rem; line-height: 2rem; transform: scaleX(-1)">”</span>
      <span class="opinions__title mr-auto font-weight-bold">Opinie </span>
      <v-btn outlined color="primary" class="mx-5 my-2 hidden-sm-and-down font-weight-bold" height="42px"
             :href="hrefGoogle"
      >
        Dodaj opinię przez google
      </v-btn>
      <v-btn outlined color="primary" class="mx-5 hidden-sm-and-down font-weight-bold my-2" height="42px"
             :href="hrefFacebook">
        Dodaj opinię przez facebooka
      </v-btn>
    </v-container>
    <v-container>
      <v-row class="mx-xl-15 mx-lg-5">
        <v-col class="px-xl-15 px-lg-5" cols="12" md="6" xl="6" lg="6"
               v-for="index in $vuetify.breakpoint.smAndDown?4:6">
          <v-card class="opinions__card pt-7 px-7 pb-10">
            {{ items[index - 1].text }}
            <p class="grey--text" style="position: absolute;bottom: 0;right: 1vw"> {{ items[index - 1].name }}</p>
          </v-card>
        </v-col>
      </v-row>
      <v-row >
        <v-col class="d-xs-flex d-sm-flex" :class="{'text-center':$vuetify.breakpoint.mdAndDown}" cols="12">

          <v-btn outlined color="primary" class="mx-5 my-2 font-weight-bold" height="42px"
                 :href="hrefGoogle"
          >
            Dodaj opinię przez google
          </v-btn>
        </v-col>
        <v-col class="d-xs-flex d-sm-flex" :class="{'text-center':$vuetify.breakpoint.mdAndDown}" cols="12">
          <v-btn outlined color="primary" class="mx-5 font-weight-bold my-2" height="42px"
                 :href="hrefFacebook">
            Dodaj opinię przez facebooka
          </v-btn>
        </v-col>
      </v-row>
      <p class="text-right ml-g-15 ml-xl-15 mr-lg-5 mr-xl-5 primary--text" style="font-size: 10rem;line-height: 10rem">
        ”</p>
    </v-container>
  </v-card>
</template>

<script>
export default {
  name: "Opinions",
  data() {
    return {
      hrefGoogle: 'https://www.google.com/search?q=hol+trans+opoczno&sxsrf=ALiCzsY4xs9Xf0GvMJyn4OktIfiyOFd75Q%3A1657294173053&ei=XU3IYtzKAsyO9u8P_L2HkAQ&ved=0ahUKEwic7ePzzen4AhVMh_0HHfzeAUIQ4dUDCA4&uact=5&oq=hol+trans+opoczno&gs_lcp=Cgdnd3Mtd2l6EAMyBQgAEKIEMgUIABCiBDIFCAAQogQ6BwgAEEcQsAM6CwguEIAEEMcBEK8BOgYIABAeEBY6CAgAEB4QFhAKOgoIABAeEA8QFhAKOgYIABAeEA06BAghEApKBAhBGABKBAhGGABQRFibEWC8EmgCcAF4AIABYYgB-AWSAQE5mAEAoAEByAEIwAEB&sclient=gws-wiz#bsht=CgRmYnNtEgQIBBAA&lrd=0x4719bc3e79d0b63b:0xf3e53c65eb0d0c04,3,,,',
      hrefFacebook: 'https://www.facebook.com/POMOCDROGOWABOGUSLAWSKI/reviews/?ref=page_internal',
      items: [
        {
          name: "Przemek Banasik",
          text: "Świetna pomoc, polecam",
        },
        {
          name: "bartek m (b.m.)",
          text: "Pełny profesjonalizm i dobra cena uslugi. Zero marudzenia. Auto zabrane z Warszawy. Naprawdę warto mieć numer przy sobie. PolecamPełny profesjonalizm i dobra cena uslugi."
        },
        {
          name: "Zdzisław Nowak (Jarząbek)",
          text: "Szybka i fachowa pomoc na drodze. Polecam!!!",
        },
        {
          name: "WesolarodzinaTv",
          text: "Z czystym sumieniem można polecić, fachowa obsługa, profesionalne podejście do klienta,",
        },
        {
          name: "damian sałaj",
          text: "Szybka pomoc. POLECAM",
        },
        {
          name: "Kamil Sierota",
          text: "Pomocna Firma",
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.opinions__title {
  font-size: 2rem;
}

.opinions__card {
  display: block;
  @media #{$smAndDown} {
    font-size: 0.75rem;
    margin-top: 8px;
    height: auto;
  }
  @media #{$md}{
    height: 200px;
  }
  height: 160px;
  margin-top: 8px;
  margin-bottom: 8px;
  border-radius: 5px;

}
</style>
