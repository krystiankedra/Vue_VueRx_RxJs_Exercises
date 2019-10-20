<template>
  <v-card>
    <v-card-title class="blue darken-1 white--text">
      <div>
        <h3 class="headline mb-0">{{ user.name }}</h3>
      </div>
    </v-card-title>
    <v-card-text>
      <p>Email: {{ user.email }}</p>
      <p>Date: {{ user.date }}</p>
      <p>Id: {{ user._id }}</p>
      <p>Products: {{ user.products }}</p>
    </v-card-text>
    <v-card-actions>
      <v-btn flat color="orange" @click="navigationToDetails(user._id)">Details</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  props: {
    user: {
      type: Object,
      default: () => {}
    },
    navigationToDetails: {
      type: Function,
      default: () => null
    }
  }
}
</script>