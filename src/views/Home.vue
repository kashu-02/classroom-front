<template>
  <div class="home">
    <global-header />
    <v-main>
      <v-alert
        color="red"
        dense
        dismissible
        icon="mdi-account"
        outlined
        text
        type="error"
        v-if="alert"
      >
        {{ `エラーが発生しました。\n${alertmessage}` }}  
      </v-alert>
      <v-card width="400px" class="mx-auto mt-5 elevation-1 login-card">
        <div class="login-btn">
          <v-btn
            block
            x-large
            color="primary"
            elevation="5"
            @click.prevent="handleSignIn"
            v-if="!Object.keys($store.state.jwt_token).length"
          >ログイン/新規登録</v-btn>
        </div>
      <p class="mt-3"></p>
      </v-card>
      
    </v-main> 
  </div>
</template>

<script>


import GlobalHeader from "../components/GlobalHeader.vue";

export default {
  components: {
    GlobalHeader,
  },
  data: () => ({
    alert: false,
    alertmessage: "",
  }),
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
        this.$router.push(this.$route.query.redirect || '/classes').catch(error => {
              console.log(error)
              this.alert = true
              this.alertmessage = 'エラーが発生しました。しばらくしてから再読み込みをしてください。'
              this.loading = false
              window.scrollTo({
                top: 0,
                behavior: "smooth"
              })
        })
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
        
      } catch (error) {
        console.error(error)
      }finally{
        this.$store.commit('update_jwt_token', {})
      }
    }
  }
}
</script>
