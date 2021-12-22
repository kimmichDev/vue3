app.component('review-form', {
    template:
    /*template*/`
    <h1>Review Form</h1>
    <form @submit.prevent="formSubmit">
        <label>Name : </label>
        <input v-model="name">
        <br>
        <label>Description : </label>
        <textarea v-model="description"></textarea>
        <br>
        <label>Ratings : </label>
        <select v-model.number="star">
            <option>1</option>
            <option>2</option>
            <option>3</option>
        </select>
        <button type="submit">Submit</button>
    </form>
    `,
    data() {
        return {
            name: '',
            description: '',
            star: null
        }
    },
    methods: {
        formSubmit() {
            if (this.name === "" || this.description === "" || this.star === null) {
                alert("fields can't be empty");
                return false;
            }
            let review = {
                name: this.name,
                description: this.description,
                star: this.star
            };
            this.$emit('form-submit', review);
            this.name = "";
            this.description = '';
            this.star = null;
        }
    },
})