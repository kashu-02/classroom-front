<template>
  <div class="login">
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
        {{ alertmessage }}  
      </v-alert>
      <p class="mt-3">ログインしてください。</p>
      <v-btn
        color="primary"
        elevation="5"
        @click.prevent="handleSignIn"
      >ログイン</v-btn>
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
        const token = await this.axios.post('http://localhost:3000/google/login',
          { 
            authCode: authCode,
            redirect_uri: 'postmessage' 
          })
        this.$store.commit('update_jwt_token', token.data.tokens)
        console.log(token.data.tokens)
        this.$router.push(this.$route.query.redirect || '/').catch(error => {
          console.log(error)
          this.alert = true
          this.alertmessage = 'エラーが発生しました。しばらくしてから再読み込みをしてください。'
          window.scrollTo({
            top: 0,
            behavior: "smooth"
          })
        });
      } catch (error) {
        console.error(error)
        this.alert = true
        this.alertmessage = error.message || 'エラーが発生しました。しばらくしてから再読み込みをしてください。'
        window.scrollTo({
          top: 0,
          behavior: "smooth"
        })
        return null
      }
    }
  }
}
</script>
