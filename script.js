// Attraverso una chiamata ajax all’API di boolean https://flynn.boolean.careers/exercises/api/array/music avremo a disposizione una decina di dischi musicali. Utilizzando vue, stampiamo a schermo una card per ogni album.

// //BONUS:
// Creare una select con tutti i generi dei dischi. In base a cosa scegliamo nella select, vedremo i corrispondenti cd.

//BONUS 2: Ordinare i dischi per anno di uscita.

var app = new Vue({
    el: "#app",

    data: {
        albumList: [],
        filter: 'filtro',
        newAlbum: [],
        oldAlbum: [],
        tipologia: ['All'],
        selected: 'All',
    },

    methods: {
        currentGenre: function () {
            if (this.selected == 'All') {
                return '';
            } else {
                return this.selected;
            }
        }
    },

    mounted() {
        axios.get("https://flynn.boolean.careers/exercises/api/array/music")
            .then((resp) => {

                this.albumList = resp.data.response;

                this.albumList.forEach((item, i) => {

                    if (!this.tipologia.includes(item.genre)) {

                        this.tipologia.push(item.genre);
                    }
                });
            });
    },

    computed: {
        albumSort: function () {
            if (this.filter == 'ancient') {

                this.newAlbum = [...this.albumList];
                this.newAlbum.sort(function (x, y) { return x.year - y.year; })

                return this.newAlbum;

            } else if (this.filter == 'young') {

                this.oldAlbum = [...this.albumList];

                this.oldAlbum.sort(function (x, y) { return y.year - x.year; })

                return this.oldAlbum;

            } else {

                return this.albumList;
            }
        }
    }
});
