const submissionComponent = {
    template: '#submission-component-template',
    methods: {
        upvote(submissionId){
            const submission = this.submissions.find(
                submission => submission.id === submissionId
            );
            submission.votes++;
        }
    },
    props: ['submission', 'submissions']
}

new Vue({
    el: '#app',
    data : {
        submissions : Seed.submissions,
    },
    components : {
        'submission-component': submissionComponent,
    },
    computed: {
        sortedSubmissions (){
            return this.submissions.sort((a,b) => {
                return b.votes - a.votes
            })
        }
    }
})