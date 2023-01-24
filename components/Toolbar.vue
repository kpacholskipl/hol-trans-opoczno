<template>
  <div>
    <v-app-bar id="toolbar" class="toolbar py-1 elevation-15 toolbar-transparent" fixed
               height="80px">
      <img
        class="ml-xl-15 mr-xl-10"
        src="~/assets/logo.png"
        height="70%"
        alt="logo"
      />
      <v-toolbar-title class="my-auto hidden-md-and-down">
        <p class="toolbar-title my-0 font-weight-bold">Pomoc Drogowa <span class="primary--text">Hol-Trans</span></p>
        <p class="toolbar-subtitle my-0">Przemysław Bogusławski</p>
      </v-toolbar-title>
      <v-spacer class="hidden-sm-and-down"/>
      <v-spacer/>

      <v-toolbar-title class="hidden-sm-and-down">
        <a class="toolbar-item mx-2 white--text" @click="scrollTo(item.id)" :key="item.id" v-for="item in items">
          {{ item.name }}
        </a>
      </v-toolbar-title>
      <v-spacer class="hidden-sm-and-down hidden-lg-and-up"/>
      <v-divider
        inset
        class="mx-5 py-0 hidden-md-and-down"
        vertical
      ></v-divider>
      <div class="mr-xl-10 mr-lg-10">
        <v-btn target="_blank" text fab href="https://www.facebook.com/POMOCDROGOWABOGUSLAWSKI">
          <v-icon>mdi-facebook</v-icon>
        </v-btn>
        <v-btn text fab href="tel:609049726">
          <v-icon>mdi-phone</v-icon>
        </v-btn>
        <v-app-bar-nav-icon class="hidden-md-and-up" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      </div>
    </v-app-bar>
    <v-navigation-drawer
      style="z-index:5"
      fixed
      clipped
      v-model="drawer"
    >
      <v-list
        nav
        dense
      >
        <v-list-item-group
          active-class="primary--text"
        >
          <v-list-item @click="scrollTo(item.id)" :key="item.id" v-for="(item, i) in items">
            <v-list-item-title :key="i">{{ item.name }}</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>
<script>
export default {
  name: "Toolbar",
  data() {
    return {
      drawer: false,
      isScrollingToUp: false,
      items: [
        {
          name: "Strona główna",
          id: "#home"
        },
        {
          name: "Oferta",
          id: "#offer"
        },
        {
          name: "O nas",
          id: "#aboutUs"
        },
        {
          name: "Opinie",
          id: "#opinions"
        },
        {
          name: "Kontakt",
          id: "#contact"
        },
      ]
    }
  },
  methods: {
    scrollTo(id) {
      console.log(id)
      this.drawer = false
      this.$vuetify.goTo(id, {
        duration: 800,
        offset: 50,
        easing: "linear",
      })
    },
  },
  mounted() {
    const toolbar = document.getElementById("toolbar")
    window.onscroll = () => {
      console.log(window.scrollY)
      if(window.scrollY === 0){
        console.log("Pkt")
        console.log(toolbar.classList)
      }
      if (window.scrollY < 50) {
        toolbar.classList.add('toolbar-transparent')
        toolbar.classList.remove('secondary')
      } else {
        toolbar.classList.add('secondary')
        toolbar.classList.remove('toolbar-transparent')
      }
    }
  }
}
</script>

<style lang="scss">
.toolbar-transparent {
  background-color: transparent !important;
}
.toolbar .toolbar-title {
  font-size: 1rem;
}

.toolbar .toolbar-subtitle {
  font-size: 0.875rem
}

.toolbar .toolbar-item {
  font-size: 1rem;
}

.toolbar .toolbar-item:hover {
  color: $primary !important;
}

</style>
