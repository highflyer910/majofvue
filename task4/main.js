new Vue({
	el: ".container",
	data: {
		people: [
		{name: 'Max', age: 47},
		{name: 'Bob', age: 32},
		{name: 'Joe', age: 68},
		{name: 'George', age: 7}

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
       		return item.age > 60;
       	});
       }
	}
})