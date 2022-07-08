<template>
  <v-container class="pa-0 full-width secondary">
    <Toolbar/>
    <Home id="home"/>
    <div :class="$vuetify.breakpoint.mdAndUp?'main__wrapper':'main__wrapper--mobile'">
      <Offer id="offer"/>
      <AboutUs id="aboutUs"/>
      <Opinions id="opinions"/>
      <Contact id="contact"/>
    </div>
    <Footer/>
  </v-container>
</template>

<script>
export default {
  name: 'IndexPage'
}
</script>
<style lang="scss">
.main__wrapper{
  margin-right: 10vw;
  margin-left: 10vw;
}
.main__wrapper--mobile{
  margin-right: 3vw;
  margin-left: 3vw;
}

</style>
