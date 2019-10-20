<template>
  <v-app>
    <navigation />
    <v-content>
      <v-container>
        <nuxt />
      </v-container>
    </v-content>
    <v-footer app>
      <span>&copy; Krystian Kędra 2019</span>
    </v-footer>
  </v-app>
</template>

<script>
const navigation = () => import('~/components/Navigation/navigation')
export default {
  components: {
    navigation
  }
}
</script>
