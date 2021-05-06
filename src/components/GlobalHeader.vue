<template>
  <div>
    <header>
      <v-app-bar>
        <v-app-bar-title>
          Classroom-Notifier
        </v-app-bar-title>
        <v-spacer></v-spacer>
        <v-btn
          v-if="Object.keys($store.state.jwt_token).length"
          elevation="1"
          @click.prevent="handleSignOut"
        >ログアウト</v-btn>
      </v-app-bar>
    </header>
  </div>
</template>

<script>
export default {
  methods: {
    async handleSignOut () {
      try {
        await this.axios.get('http://localhost:3000/google/logout',
          {
            headers: {
              'Authorization': `Bearer ${this.$store.state.jwt_token}`
            }
          })
        window.location.href = '/'
      } catch (error) {
        console.error(error)
      }finally{
        this.$store.commit('update_jwt_token', {})
      }
    }
  }
}
</script>


<style>

</style>