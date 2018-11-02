new Vue({
  el: '.container',
  data: {
   candidates: [
      {name: "Mr.Vashadze", votes: 40},
      {name: "Mr.Bakradze", votes: 20},
      {name: "Mrs. Zourabischvili", votes: 10}
   ]
  },
   computed: {
            mayor: function () {
              
                var candidatesSorted = this.candidates.sort(function (a, b) {
                    return b.votes - a.votes;
                });
              
                return candidatesSorted[0];
            }
        },
        methods: {
          
            clear: function () {
               
                this.candidates = this.candidates.map(function (candidate) {
                    candidate.votes = 0;
                    return candidate;
                })
            }
        }
    });