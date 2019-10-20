<template>
  <v-container>
    <users-wrapper :users="users" :navigation-to-details="navigationToDetails" />
  </v-container>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import { GET_USERS } from '~/store/actionTypes'

const usersWrapper = () => import('~/components/UsersWrapper/usersWrapper')

export default {
  components: {
    usersWrapper
  },
  computed: {
    ...mapGetters({
      users: 'getUsers'
    })
  },
  methods: {
    ...mapActions({
      'getUsers': GET_USERS
    }),
    navigationToDetails(id) {
      this.$router.push(`/users/${id}`)
    }
  },
  async created() {
    this.getUsers()
  }
}
</script>