<template>
  <v-navigation-drawer
    v-model="drawerState"
    :mini-variant.sync="miniState"
    hide-overlay
    stateless
    app
  >
    <v-toolbar flat class="transparent">
      <v-list class="pa-0">
        <v-list-tile avatar>
          <v-list-tile-avatar>
            <img src="https://randomuser.me/api/portraits/men/85.jpg">
          </v-list-tile-avatar>
          <v-list-tile-content>
            <v-list-tile-title>Krystian Kędra</v-list-tile-title>
          </v-list-tile-content>
          <v-list-tile-action>
            <v-btn icon @click.stop="toggleMiniMode()">
              <v-icon>chevron_left</v-icon>
            </v-btn>
          </v-list-tile-action>
        </v-list-tile>
      </v-list>
    </v-toolbar>
    <v-list class="pt-0" dense>
      <v-divider />
      <v-list-tile v-for="navigation in navigationElements" :key="navigation.title" @click="navigationTo(navigation.path)">
        <v-list-tile-action>
          <v-icon>{{ navigation.icon }}</v-icon>
        </v-list-tile-action>
        <v-list-tile-content>
          <v-list-tile-title>{{ navigation.title }}</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
import route from '~/router/router'
export default {
  data: () => ({
    miniState: true,
    drawerState: true
  }),
  computed: {
    navigationElements() {
      return route
    }
  },
  methods: {
    toggleMiniMode() {
      this.miniState = !this.miniState
    },
    navigationTo(path) {
      this.$router.push(path)
    }
  }
}
</script>