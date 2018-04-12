Vue.component('planet', {
	template: "#planet-template",
	props: ['planet'],
	methods: {
		visit: function(){
			return this.planet.visits++;
		},
	},
	computed: {
		canBeVisited: function(){
			return this.planet.visits < 5
		}
	}
});

new Vue({
	el: '#app',
	data: {
		planets: [
		  {
		  	name: 'Mars',
		  	visits: 0
		  },
		  {
		  	name: 'Mercury',
		  	visits: 0
		  },
		  {
		  	name: 'Venus',
		  	visits: 0
		  },
		  {
		  	name: 'Jupiter',
		  	visits: 0
		  }
		]
	}

})