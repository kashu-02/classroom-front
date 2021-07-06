<template>
  <div>
    <header>
      <v-app-bar dense>
        <v-app-bar-title class="text-no-wrap">
          Classroom Notifier
        </v-app-bar-title>
        <v-spacer></v-spacer>
        <v-btn
          v-if="Object.keys($store.state.jwt_token).length"
          elevation="1"
          @click.prevent="handleSignOut"
        >ログアウト</v-btn>
        <v-btn
          v-if="Object.keys($store.state.jwt_token).length"
          class="ml-4"
          elevation="0"
          fab
          small
          to="/settings"
        >
          <v-icon dark>
            mdi-cog
          </v-icon>
        </v-btn>
      </v-app-bar>
    </header>
  </div>
</template>

<script>
export default {
  methods: {
    async handleSignOut () {
      try {
        await this.axios.get(`${process.env.VUE_APP_BASE_URL}/google/logout`,
          {
            headers: {
              'Authorization': `Bearer ${this.$store.state.jwt_token}`
            }
          })
      } catch (error) {
        console.error(error)
      }finally{
        this.$store.commit('update_jwt_token', {})
        window.location.href = '/'
      }
    }
  }
}
</script>


<style>

</style>
