const app = Vue.createApp({
    data() {
        return {
            product: 'circle',
            cart: [],
            premium: true,
            review: []
        }
    },
    methods: {
        updateCart(id) {
            return this.cart.push(id);
        },
        removeCart() {
            if (this.cart.length > 0) {
                return this.cart.pop();
            }
            return alert('No item in the cart');
        },
        showReview(review) {
            this.review.push(review);
        }
    }
})