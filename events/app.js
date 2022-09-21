let app = Vue.createApp({
    data() {
        return {
            // counter: 0
            counter: 40
        }
    },
    methods: {
        // increment () {} 
        increment(num) {
            console.log("increment executed");
            // this.counter = this.counter+5 or this.counter += 5 for this we need to use increment () {}
            // same for decrement as above line//
            this.counter += num
        },
        decrement(num) {
            this.counter -= num
        },
        handleSubmit() {
            alert("Form submitted successfully")
        }
    }
})
app.mount('#events')