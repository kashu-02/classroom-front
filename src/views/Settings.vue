<template>
  <div class="setings">
    <global-header />
    <v-main>
      <v-alert
        color="red"
        dense
        dismissible
        outlined
        text
        type="error"
        v-if="alert"
      >
        {{ `エラーが発生しました。\n${alertmessage}` }}
      </v-alert>
      <v-btn
          class="ma-5"
          color="primary"
          elevation="2"
          outlined
          to="/classes"
      >
        戻る
      </v-btn>
      <v-card class="ma-3">
        <v-card-title class="ma-5">
          登録情報の削除
        </v-card-title>
        <v-container>
          <p>Classroom-Notifierへ登録されているアカウントを削除します。</p>
            <v-row justify="center">
              <v-col class="text-center">
                <v-btn
                  color="red"
                  elevation="2"
                  outlined
                  :loading="loading"
                  @click.prevent="deleteAccount"
                >
                  アカウントを削除
                </v-btn>
              </v-col>
            </v-row>
        </v-container>
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
    loading: false,
    alert: false,
    alertmessage: "",
  }),
  methods: {
    async deleteAccount () {
      try {
        this.loading = true
        await this.axios.delete(`${process.env.VUE_APP_API_BASE_URL}/deleteaccount`,
          {
            headers: {
              'Authorization': `Bearer ${this.$store.state.jwt_token}`
            }
          })
                this.loading = false
        this.$store.commit('update_jwt_token', {})
        this.$router.push('/').catch(error => {
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
        this.alert = true
        this.alertmessage = 'トークン有効期限切れです。再度ログインしてください。'
        this.loading = false
        window.scrollTo({
          top: 0,
          behavior: "smooth"
        })
      }
    }
  }
}
</script>
