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
            :loading="loading"
          >ログイン/新規登録</v-btn>
        </div>
      <p class="mt-3"></p>
      </v-card>
      <v-card class="ma-3" elevation="0">
        <h1>Classroom Notifier</h1>
        <br>
        <h2>Classroom Notifierとは</h2>
        <p>登録したclassroomのお知らせの投稿をすべてメールで送信します。<br>生徒が作成したお知らせや、お知らせを編集した場合でも通知をするので部活動の連絡や常に最新の情報を確認したい方におすすめです。</p>
        <h2>注意事項</h2>
        <p>
          「ログイン/新規登録」をすることにより、利用規約に同意したこととします。
           メール送信先のアドレスはGoogleアカウントのメールアドレスです。
        </p>
        <h2>利用方法</h2>
        <p>①「ログイン/新規登録」をクリック(タップ)して、Google Classroom の登録が完了しているGoogleアカウントでログインします。</p>
        <p>②メール送信を希望するクラスの「登録」をタップします。</p>
        <p>③登録が完了すると、登録完了のメールが送信されます。</p>
      </v-card>
    </v-main>
    <global-footer />
  </div>
</template>

<script>


import GlobalHeader from "../components/GlobalHeader.vue"
import GlobalFooter from "../components/GlobalFooter.vue"

export default {
  components: {
    'global-header': GlobalHeader,
    'global-footer': GlobalFooter
  },
  data: () => ({
    alert: false,
    alertmessage: "",
    loading: false
  }),
  methods: {
    async handleSignIn () {
      try {
        this.loading = true
        const authCode = await this.$gAuth.getAuthCode()
        console.log(authCode)
        const token = await this.axios.post(`${process.env.VUE_APP_BASE_URL}/google/login`,
          { 
            authCode: authCode,
            redirect_uri: 'postmessage' 
          })
        this.$store.commit('update_jwt_token', token.data.tokens)
        console.log(token.data.tokens)
        this.loading = false
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
        this.loading = false
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
