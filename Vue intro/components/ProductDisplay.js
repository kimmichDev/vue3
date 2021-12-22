app.component('product-display', {
    props: {
        premium: {
            type: Boolean,
            required: true,
        },
        cart: {
            type: Number,
            required: true
        }
    },
    template:
        /*template*/ `
    <h1>{{ product }}</h1>
    <!-- <p v-if="stock">Instock</p>
    <p v-else>Out of stock</p> -->

    <!-- <p v-if="inventory > 10">Available to buy</p>
    <p v-else-if="inventory <=10 && inventory>0">Almost out of stock</p>
    <p v-else>Out of stock</p>
    <p>Avaiable => {{ inventory }}</p> -->

    <p v-if="stock">In stock</p>
    <p v-else>Out of stock</p>

    <ul>
      <li v-for="texture in textures">{{ texture }}</li>
    </ul>
    <p>Shipping Fee : {{ shipping }}</p>
    <img :src="image" alt="" style="width: 140px;">

    <div v-for="(variant,index) in variants" @mouseover="updateVariant(index)" class="circle" :key="variant.id" :style="[{ backgroundColor : variant.name},circle]">
      <p style="margin-left: 30px">{{ variant.name }}</p>
    </div>

    <button @click="addToCart" :disabled="!stock">Add to cart</button>
    <button @click="removeCart" v-if="cart.length>0">Remove from cart</button>
    <br>
   
    `,
    data() {
        return {
            product: 'circle',
            selectedVariant: 0,
            // inventory: 10,
            textures: ['20% polymer', '80% cotton'],
            circle: {
                width: '20px',
                height: ' 20px',
                borderRadius: '50%',
                marginBottom: '5px'
            },
            variants: [
                { id: 1, name: 'green', image: './image/green.png', quantity: 30 },
                { id: 2, name: 'violet', image: './image/violet.png', quantity: 20 },
            ],
        }
    },
    methods: {
        updateVariant(index) {
            this.selectedVariant = index;
            return console.log(index);
        },
        addToCart() {
            this.$emit('update-cart', this.variants[this.selectedVariant].id);
        },
        removeCart() {
            this.$emit('remove-cart', this.variants[this.selectedVariant].id);
        },
        showReview() {
            alert('ok');
        }
    },
    computed: {
        image() {
            return this.variants[this.selectedVariant].image;
        },
        stock() {
            return this.variants[this.selectedVariant].quantity;
        },
        shipping() {
            if (this.premium) {
                return 'Free';
            }
            return '5 usd'
        }
    }
})