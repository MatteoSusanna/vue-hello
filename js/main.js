var app = new Vue({
    el: '#app',
    data: {
      message: 'BENVENUTO IN Vue.js',
      linkImg : 'https://avatars.githubusercontent.com/u/6128107?s=200&v=4',
      myClass : 'color-red'
    },

    methods: {
      color (){
        if(this.myClass == 'color-red'){
          this.myClass = 'color-orange'
        }else{
          this.myClass = 'color-red'
        }
      }
      
    }
  })

