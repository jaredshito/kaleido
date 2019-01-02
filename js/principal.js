var app = new Vue({
    el : '#app',
    data : {
         search:''
    },
    created: function () {
        
  
        // Register a global custom directive called `v-focus`
        Vue.directive('focus', {
          // When the bound element is inserted into the DOM...
          inserted: function (el) {
            // Focus the element  
            el.focus()
          }
        })
      },
    
    methods : {
               
        searchGoogle: function () {
            console.log("google");
            
            let goo = 'https://www.google.com/search?q=' + this.search;
            window.location = goo;
        }
    
    }
})