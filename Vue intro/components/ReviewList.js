app.component('review-list', {
    props: {
        review: {
            type: Array,
            required: true
        },
    },
    template:
    /*template*/`
    <h1>Review List</h1>
    <ul>
        <li v-for="rev in review">
            {{ rev.name }} gave {{ rev.star }} stars and wrote : {{ rev.description }}
        </li>
    </ul>
    `,
    // methods: {
    //     showReview(review) {
    //         console.log(review);
    //     }
    // },
});