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
        {{ alertmessage }}  
      </v-alert>
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
                >
                  アカウントを削除
                </v-btn>
              </v-col>
            </v-row>
        </v-container>
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

  }
}
</script>
