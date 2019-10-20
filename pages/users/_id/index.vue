<template>
  <div>
    {{ user }}
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { GET_USER } from '~/store/actionTypes'

export default {
  computed: {
    ...mapGetters({
      user: 'getUser'
    })
  },
  async created() {
    await this.$store.dispatch(GET_USER, this.$route.params.id)
  }
}
</script>