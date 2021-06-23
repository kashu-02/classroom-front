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
        {{ `エラーが発生しました。\n${alertmessage}` }}  
      </v-alert>
      <v-card>
        <v-data-table
          :headers="headers"
          :items="classes"
          :items-per-page="15"
          class="elevation-1"
          :loading="loading"
          loading-text="Loading... Please wait"
        >
          <template v-slot:[`item.isRegistered`]="{ item }">
            <v-btn
              small
              color="light-green"
              @click.stop="Unsubscribe(item)"
              v-if="item.isRegistered"
              :loading="loading"
            >
              登録解除
            </v-btn>
            <v-btn
              small
              color="amber"
              @click.stop="Subscribe(item)"
              v-if="!item.isRegistered"
              :loading="loading"
            >
              登録
            </v-btn>
          </template>
        </v-data-table>
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
    loading: true,
    alert: false,
    alertmessage: "",
    headers:[
      { text: 'ClassId', value: 'id' },
      {text: 'クラス名', value: 'name'},
      { text: '登録/登録解除', value: 'isRegistered' }
    ]
  }),
  mounted: async function(){
    try {
      let classes = await this.axios.get(`${process.env.VUE_APP_API_BASE_URL}/getclasses`,
        {
        headers: {
          Authorization: `Bearer ${this.$store.state.jwt_token}`,
        },
      })
      let sendlist = await this.axios.get(`${process.env.VUE_APP_API_BASE_URL}/sendlist`,
        {
        headers: {
          Authorization: `Bearer ${this.$store.state.jwt_token}`,
        },
      })

      this.classes = classes.data.map( function(value){
        const found = sendlist.data.find(element => element.ClassId == value.id)
        if(found){
          value.isRegistered = true
        }else{
          value.isRegistered = false
        }
        return value
      }) 
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
    async Subscribe(item){
      this.loading = true
      try {
        const result = await this.axios.post(`${process.env.VUE_APP_API_BASE_URL}/sendlist`,
        {
          ClassId: item.id 
        },
          {
          headers: {
            Authorization: `Bearer ${this.$store.state.jwt_token}`,
          },
        })
        if(result.status == 200){
          let classes = await this.axios.get(`${process.env.VUE_APP_API_BASE_URL}/getclasses`,
            {
            headers: {
              Authorization: `Bearer ${this.$store.state.jwt_token}`,
            },
          })
          let sendlist = await this.axios.get(`${process.env.VUE_APP_API_BASE_URL}/sendlist`,
            {
            headers: {
              Authorization: `Bearer ${this.$store.state.jwt_token}`,
            },
          })

          this.classes = classes.data.map( function(value){
            const found = sendlist.data.find(element => element.ClassId == value.id)
            if(found){
              value.isRegistered = true
            }else{
              value.isRegistered = false
            }
            return value
          }) 
          console.log(this.classes)
          this.loading = false 
        }
        
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
    async Unsubscribe(item){
      this.loading = true
      try {
        const result = await this.axios.delete(`${process.env.VUE_APP_API_BASE_URL}/sendlist?ClassId=${item.id}`,
        {
          headers: {
            Authorization: `Bearer ${this.$store.state.jwt_token}`,
          },
        })
        if(result.status == 200){
          let classes = await this.axios.get(`${process.env.VUE_APP_API_BASE_URL}/getclasses`,
            {
            headers: {
              Authorization: `Bearer ${this.$store.state.jwt_token}`,
            },
          })
          let sendlist = await this.axios.get(`${process.env.VUE_APP_API_BASE_URL}/sendlist`,
            {
            headers: {
              Authorization: `Bearer ${this.$store.state.jwt_token}`,
            },
          })

          this.classes = classes.data.map( function(value){
            const found = sendlist.data.find(element => element.ClassId == value.id)
            if(found){
              value.isRegistered = true
            }else{
              value.isRegistered = false
            }
            return value
          }) 
          console.log(this.classes)
          this.loading = false 
        }
        
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
