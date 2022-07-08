import colors from 'vuetify/es5/util/colors'

export default {
  server: {
    host: '0.0.0.0'
  },
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Pomoc drogowa Hol-Trans Przemysław Bogusławski',
    htmlAttrs: {
      lang: 'pl'
    },
    meta: [
      {charset: 'utf-8'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1'},
      {hid: 'description', name: 'description', content: ''},
      {name: 'format-detection', content: 'telephone=no'},
      {
        hid: 'og:description',
        name: 'og:description',
        content: 'Pomoc Drogowa Opoczno i okolice dostępna 24 godziny 7 dni w tygodniu. Holowanie samochodów osobowych i ciężarowych. Auta zastępcze. Wynajem lawet'
      },
      {
        hid: 'description',
        name: 'description',
        content: 'Pomoc Drogowa Opoczno i okolice dostępna 24 godziny 7 dni w tygodniu. Holowanie samochodów osobowych i ciężarowych. Auta zastępcze. Wynajem lawet'
      },
      {
        hid: 'og:site_name',
        name: 'og:site_name',
        content: 'Pomoc Drogowa Hol-Trans Przemysław Bogusławski'
      },
      {
        hid: 'og:title',
        name: 'og:title',
        content: 'Pomoc Drogowa Hol-Trans Przemysław Bogusławski'
      },
      {
        hid: 'og:url',
        name: 'og:url',
        content: 'http://www.hol-trans.opoczno.pl'
      },
      {
        hid: 'og:site_name',
        name: 'og:site_name',
        content: 'Pomoc Drogowa Hol-Trans Przemysław Bogusławski'
      },
      {
        hid: 'keywords',
        name: 'keywords',
        content: `Usługi holowania samochodów osobowych,Usługi holowania samochodów dostawczych, Usługi holowania samochodów osobowych i ciężarowych, Usługi holowania motocykli. Usługi holowania wózków widłowych, Holowanie samochodów osobowych, Holowanie samochodów dostawczych, Holowanie samochodów ciężarowych, Holowanie motocykli, Holowanie wózków widłowych, pojazd zastępczy z oc sprawcy, wyciąganie samochodów osobowych z rowu, wyciąganie samochodów ciężarowych z rowu, pomoc drogowa samochody osobowe, pomoc drogowa samochody ciężarowe, holowanie pojazdów osobowych, holowanie pojazdów ciężarowych, auto hol samochodów osobowych, auto hol samochodów ciężarowych,pomoc drogowa, pomoc drogowa 24h,holowanie,auto hol,auto-hol,pojazd zastępczy z oc sprawcy,Wypożyczalnia przyczep,Wypożyczalnia lawet, Opoczno, Tomaszów Mazowiecki, Żarnów, Sulejów, Przysucha, Inowłódz, Paradyż, Drzewica, Piotrków Trybunalski, Spała, Wolbórz, Mniszków, Łódź`
      },
      {
        hid: 'robots',
        name: 'robots',
        content: 'noindex,nofollow'
      }
    ],

    link: [
      {rel: 'canonical', href: 'http://www.hol-trans.opoczno.pl'},
      {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'}
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/css/main.scss'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [],

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: true,
      themes: {
        dark: {
          primary: '#FFC806',
          accent: colors.grey.darken3,
          secondary: '#111111',
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
        }
      }
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    // extend(config, ctx) {
    // } // blah blah

  }
}
