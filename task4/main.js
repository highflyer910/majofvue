new Vue({
	el: ".container",
	data: {
		people: [
		{name: 'Obelix', age: 32},
		{name: 'Asterix', age: 31},
		{name: 'Julius', age: 56},
		{name: 'Majestix', age: 67}

	  ]
	},
	methods: {
       orderedPeople: function(){
       	return _.orderBy(this.people, 'age')
       }
	},
	computed: {
       old: function(){
       	return this.people.filter(function (item) {
       		return item.age > 65;
       	});
       }
	}
})