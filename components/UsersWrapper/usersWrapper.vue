<template>
  <v-container>
    <v-layout row wrap>
      <v-flex v-for="(user, index) in users" :key="index" xs12 md4 class="pa-2">
        <user :user="user" :navigation-to-details="navigationToDetails" />
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
const user = () => import('~/components/User/user')
export default {
  components: {
    user
  },
  props: {
    users: {
      type: Array,
      default: () => []
    },
    navigationToDetails: {
      type: Function,
      default: () => null
    }
  }
}
</script>