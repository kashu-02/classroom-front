<template>
  <div class="login">
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
      <v-data-table
        :headers="headers"
        :items="classes"
        :items-per-page="15"
        class="elevation-1"
        :loading="loading"
        loading-text="Loading... Please wait"
      ></v-data-table>
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
    loading: true,
    alert: false,
    alertmessage: "",
    headers:[
      {
          text: 'クラス名',
          value: 'name',
        },
      { text: 'ownerId', value: 'ownerId' }
    ],
    classes:[
      {
        name: "loading",
        ownerId: "loading"
      }
    ]
  }),
  mounted: async function(){
    try {
      const classes = await this.axios.get('http://localhost:3000/api/v1/getclasses',
        {
        headers: {
          Authorization: `Bearer ${this.$store.state.jwt_token}`,
        },
      })
      this.classes = classes.data
      console.log(this.classes)
      this.loading = false 
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
  },
  methods: {

  }
}
</script>
