
const { createApp } = Vue
   const Card = {
    template: "#card",
    props:{
        review : Object
    }
   };
  createApp({
    data : () => {
      return {
        first : "Word on the street",
        second : "From our Customers",
       reviews: [{customerName : "Dua Lipa", customerReview: `Lorem ipsum dolor sit amet, 
                       consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                       labore et dolore magna aliqua.`, color : '#60C3F0'},{customerName : "Frank", customerReview: `Lorem ipsum dolor sit amet, 
                       consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                       labore et dolore magna aliqua.`,color : '#9A5EE7'},{customerName : "Grammss", customerReview: `Lorem ipsum dolor sit amet, 
                       consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                       labore et dolore magna aliqua.`,color : "#4D27E5"},{customerName : "Oluwatunademise", customerReview: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                       sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
                       quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. `,color : "#60C3F0"},{customerName : "Tyrosine", customerReview: `Lorem ipsum dolor sit amet, 
                       consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                       labore et dolore magna aliqua.`,color : "#60C3F0"},]
      }
    },

    methods:{
        setSeen(){
            this.count = this.count === "ON" ? "OFF" : "ON";
            this.seen = !this.seen
        }
    },

    components: {
        Card,
    }
  }).mount('#japa')
