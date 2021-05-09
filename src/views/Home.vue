<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <a v-if="!Object.keys($store.state.jwt_token).length" class="text-dark px-3" href="javascript:void(0);" @click.prevent="handleSignIn">Login</a>
    <a v-if="Object.keys($store.state.jwt_token).length" class="text-dark px-3" href="javascript:void(0);" @click.prevent="handleSignOut">Logout</a>
  </div>
</template>

<script>


export default {
  methods: {
    async handleSignIn () {
      try {
        const authCode = await this.$gAuth.getAuthCode()
        console.log(authCode)
        const token = await this.axios.post(`${process.env.VUE_APP_BASE_URL}/google/login`,
          { 
            authCode: authCode,
            redirect_uri: 'postmessage' 
          })
        this.$store.commit('update_jwt_token', token.data.tokens)
        console.log(token.data.tokens)
      } catch (error) {
        console.error(error)
        return null
      }
    },
    async handleSignOut () {
      try {
        await this.axios.get(`${process.env.VUE_APP_BASE_URL}/google/logout`,
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
