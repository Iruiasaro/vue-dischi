// Attraverso una chiamata ajax all’API di boolean https://flynn.boolean.careers/exercises/api/array/music avremo a disposizione una decina di dischi musicali. Utilizzando vue, stampiamo a schermo una card per ogni album.

var app = new Vue({
    el: "#app",

    data: {
        albumList: [],
        filter: 'filtro',
        newAlbum: [],
        oldAlbum: []
    },

    methods: {
        
    },

    mounted() {
        axios.get("https://flynn.boolean.careers/exercises/api/array/music")
            .then((resp) => {
                this.albumList = resp.data.response;
            });
    },

    computed: {
        albumSort: function () {
          if (this.filter == 'ancient') {

            this.newAlbum = [...this.albumList];
            this.newAlbum.sort(function(x,y) 

            {return x.year - y.year;})

            return this.newAlbum;

          } else if (this.filter == 'young') {

            this.oldAlbum = [...this.albumList];

            this.oldAlbum.sort(function(x,y) 

            {return y.year - x.year;})

            return this.oldAlbum;
            
          } else {
              
            return this.albumList;
          }
        }
    }
});
