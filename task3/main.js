new Vue({
  el: '.container',
  data: {
   candidates: [
      {name: "Mr.Black", votes: 40},
      {name: "Mr.White", votes: 20},
      {name: "Mr.Red", votes: 50}
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