<template>
  <v-card class="offer secondary full-width" elevation="0">
    <h2 class="offer__offer offer__title text-center">Co oferuje <span class="primary--text"> Hol-Trans</span>?</h2>
    <v-row class="full-width mb-15 ma-0">
      <v-col class="text-center" cols="6" md="3" lg="3" xl="3" v-for="item in items">
        <div class="d-inline-flex flex-column align-content-center align-center offer__icon--wrapper">
          <v-img contain class="d-flex" :src="item.src" height="90px" width="90px"/>
          <p class="offer__icon--title text-center primary--text font-weight-bold">{{ item.title }}</p>
          <p class="offer__icon--subtitle text-center mx-lg-10 mx-xl-10">{{ item.subtitle }}</p>
        </div>
      </v-col>
    </v-row>
    <h2 class="offer__details offer__title text-center">Szczegółowa oferta</h2>
    <v-row class="px-10">
      <v-col class="hidden-sm-and-down d-md-flex d-lg-flex d-xl-flex align-content-center justify-center align-center"
             col="4" v-for="number in 3">
        <div class="offer__divider"></div>
        <ul class="offer__ul">
          <li v-for="item in detailItems[number-1]">{{ item }}</li>
        </ul>
      </v-col>
      <v-col cols="12" class="hidden-md-and-up d-xs-flex d-sm-flex align-content-center justify-center align-center">
        <v-row>
          <v-col cols="1">
            <div class="offer__divider"></div>
          </v-col>
          <v-col cols="11">
            <ul>
              <li v-for="item in [...detailItems[0],...detailItems[1],...detailItems[2]]">{{ item }}</li>
            </ul>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
export default {
  name: "Offer",
  data() {
    return {
      items: [
        {
          src: "/icons/3.png",
          title: "Autoholowanie",
          subtitle: "Z niewiadomych przyczyn zepsuł Ci się samochód?\n Zadzwoń do nas!"
        },
        {
          src: "/icons/4.png",
          title: "Holowanie ciężarówek",
          subtitle: "W swojej ofercie posiadamy również holowanie pojazdów ciężarowych."
        },
        // {
        //   src: "icons/1.png",
        //   title: "Wyleciałeś z drogi?",
        //   subtitle: "Wyciągniemy samochód po dachowaniu jak i wpadnięciu do rowu."
        // },
        {
          src: "icons/2.png",
          title: "Pojaz w ciężkim stanie",
          subtitle: "Stan techniczny pojazdu nie stanowi dla nas problemu!"
        },
        // {
        //   src: "icons/5.png",
        //   title: "Zakopałeś się?",
        //   subtitle: "Wyciągniemy Cię z największego błota i nie tylko!"
        // },
        {
          src: "icons/6.png",
          title: "Złe warunki pogodowe",
          subtitle: "Warunki atmosferyczne nie stanowią dla nas problemu!"
        },
      ],
      detailItems: [
        [
          'Usługi holowania wózków widłowych',
          'Usługi holowania motocykli',
          'Pojazd zastępczy z OC sprawcy',
        ],
        ['Wypożyczalnia przeczep',
          'Wypożyczalnia lawet',
          'Wyciąganie samochodów osobowych z rowu',
        ],
        ['Wyciąganie samochodów ciężarowych z rowu',
          'Usługi holowania samochodów osobowych',
          'Usługi holowania samochodów dostawczych',
        ]
      ]

    }
  }
}
</script>

<style lang="scss" scoped>
.offer {
  padding-top: 5vh;
  padding-bottom: 10vh;
  @media #{$mdAndUp}{
    padding-bottom: 20vh;
  }
}

.offer__details {
  @media #{$mdAndUp}{
    margin-top: 15vh;
  }
  margin-top: 5vh;
  margin-bottom: 10vh;
}
.offer__ul{
  display: inline-block;
}
.offer__divider {
  @media #{$smAndDown} {
    display: block;
  }
  background-color: $primary;
  border-radius: 5px;
  height: calc(100% + 8px);
  width: 8px;
  margin-right: 5px;
  display: inline-block;
}

.offer__icon--subtitle {
  font-size: 0.688rem;
}

.offer__icon--title {
  font-size: 0.813rem;
}

.offer__icon--wrapper {
  max-width: 250px;
}

.offer__offer {
  @media #{$mdAndUp} {
    margin-bottom: 15vh;
  }
  margin-bottom: 5vh;
}

.offer__title {
  font-size: 2rem;
}

.offer ul {
  margin-bottom: 2px;
}

.offer ul li {
  font-size: 0.825rem;
}
</style>
