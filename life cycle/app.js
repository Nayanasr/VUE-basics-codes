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
    },
    //mounting phase
    beforeCreate(){
        console.log("beforeCreate executed");
    },
    ceated(){
        console.log("created executed");
    },
    mounted(){
        console.log("mounted executed");
        this.$refs.email.focus()
    },

    //updating phase
    beforeUpdate(){
        console.log("beforeUpdate executed");
    },
    updated(){
        console.log("updated executed");
    },

    //unmounting phase
    beforeUnmount(){
        console.log("beforeUnmount executed");
    },
    unmounted(){
        console.log("unmounted executed");
    }


})
app.mount('#ref')

//for unmounting phase

// setTimeout(() => {
//   app.unmount();
// }, 3000);