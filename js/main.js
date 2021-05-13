'use strict';

const BASE_URL = 'https://geo.api.gouv.fr';

const app = new Vue({
    el: '#app',
    data: {
        stepOne: {
            departements: [],
            cities: [],
        },
        stepTwo: {
            departements: [],
            cities: []
        },
        regions: [],
        selectedRegion: '',
        selectedDepartement: '',
        selectedCity: ''
    },
    methods: {
        updateDepartements() {
            
            fetch(`${BASE_URL}/regions/${this.selectedRegion}/departements`)
            .then(response => response.json())
            .then(results => {
                this.stepTwo.departements = results;
                this.selectedDepartement = this.stepTwo.departements[0].code;
                this.updateCities();
            });
        },
        updateCities() {
            fetch(`${BASE_URL}/departements/${this.selectedDepartement}/communes`)
            .then(response => response.json())
            .then(results => {
                this.stepTwo.cities = results;
                this.selectedCity = this.stepTwo.cities[0].code;
            });
        }
    },
    created() {
        // Fonction spécifique à VueJS appelée au démarrage
        fetch(`${BASE_URL}/regions`).then(response => response.json()).then(results => {
            this.regions = results;
            this.selectedRegion = this.regions[0].code;
            this.updateDepartements();
        });
        
        fetch(`${BASE_URL}/departements`).then(response => response.json()).then(results => {
            this.stepOne.departements = results;
        });
        
        fetch(`${BASE_URL}/communes?limit=40`).then(response => response.json()).then(results => {
            this.stepOne.cities = results;
        });
    }
});