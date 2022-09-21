let app = Vue.createApp({
    data() {
        return{
          message:"Hey! How are you?"
        }
    },
    methods:{
        setText(){
            console.log(this.$refs.userText.value);
            this.message=this.$refs.userText.value
        },
        focusInput(){
            this.$refs.email.focus()
        }
    }
})
app.mount('#ref')