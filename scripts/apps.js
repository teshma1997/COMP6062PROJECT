const app =  Vue.createApp({
    data(){
        return{
            newFact:'',
            cityName: '',
            temperature:'',
            wind:'',
            word:'',
            partsOfSpeech:'',
            phonetic:'',
            description:'',
            definition:''
        };
    },
    created(){
        this.fetchFact();
        this.getWeather();
        this.define();
    },
    methods:{
        fetchFact(){
            fetch('https://uselessfacts.jsph.pl/api/v2/facts/random')
            .then(response => response.json())
            .then(data => {
                this.newFact = data.text;
            });
        },
        getWeather(){
            fetch('https://weather-data.liamstewart.ca/?city=Toronto')
            .then(response => response.json())
            .then(data =>{
                this.temperature = data.temperature;
                this.wind = data.wind_speed;
                this.description = data.description;
            });
        },
        define(){
            fetch('https://api.dictionaryapi.dev/api/v2/entries/en/Bottle')
            .then(response => response.json())
            .then(data =>{
                const entry = data[0];
                this.word = entry.word;
                this.phonetic = entry.phonetic;
                this.partsOfSpeech = entry.meanings[0].partOfSpeech;
                this.definition = entry.meanings[0].definitions[0].definition;

            })
        }
    }

});
app.mount('#app');