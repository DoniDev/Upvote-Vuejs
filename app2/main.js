new Vue({
    el: '#app',
    data : {
        submissions : Seed.submissions,
    },
    methods: {
        upvote(submissionId){
            const submission = this.submissions.find(
                submission => submission.id === submissionId
            );
            submission.votes++;
            console.log('Method')
        }
    },
    computed: {
        sortedSubmissions (){
            return this.submissions.sort((a,b) => {
                console.log('Computed')
                return b.votes - a.votes
            })
        }
    }
})