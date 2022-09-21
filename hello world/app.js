let app = Vue.createApp({
    //ALL data present here
    data() {
        return {
            greeting: "Hello World",
            // learn: "Learn VUE",
            learn: "<h1>Learn VUE</h1>",
            code: "Code VUE",

            person: {
                name: "Ajay",
                age: 18
            },
        }
    },
    // inside methods option, create all the methods

    methods: {
        randomOutput() {
            let randomNumber = Math.random()
            console.log("randomNumber", randomNumber);
            if (randomNumber < 0.5) {
                // return "Learn VUE" learn vue is hard coded by using return learn vue
                return this.learn
            } else {
                // return "Code VUE"//
                return this.code
            }
        }
    }

    
})

app.mount('#first')


