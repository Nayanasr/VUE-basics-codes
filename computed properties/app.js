let app = Vue.createApp({
    data() {
        return {
            counter: 10,
           name:"",
        }
    },
    watch: {
        counter(value) {    // here counter is dependancy
            console.log("value", value);
            if(value > 50) {
                // setTimeout(() => {     // this block will execute after 2 sec
                //     this.counter = 0
                // }, 2000)
                this.counter = 0
            }
        }
    },
    computed: {
        fullname() {
            console.log("fullname computed executed");
            if(this.name==='') {
                return ''
            }return this.name + '' + "Rastogi"
        },
        doubleCounter() {
            console.log("doubleCounter executed");
            return this.counter * 2
        }
    },

    methods: {
        increment() {
            this.counter+=5
        },
        decrement(){
            this.counter-=5
        },
        // outputFullname() {
        //     console.log("outFullname executed");
        //     if(this.name==='') {
        //         return ''
        //     }return this.name + '' + "Rastogi"

        // }
    }
})
app.mount('#dataBinding')
 
    