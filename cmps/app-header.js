import userMsg from './user-msg.js'


export default {
    template: `
            <header>
                <section class="user-info">
                    {{ user.fullName }} | \${{ user.balance }} 
                </section>
                <h1 class="main-title">App App</h1> 
                <h5>
                    <span>{{ cartLength }}</span> 
                    Products in your Cart
                    <button @click="isCartShown=!isCartShown" v-if="cartLength > 0">
                        {{ isCartShown ? 'hide' : 'show' }}
                    </button> 
                </h5>
                
                <section class="cart" v-if="isCartShown && cartLength > 0">
                    <h5>Your Cart</h5>
                    <ul>
                        <li v-for="product in cartProducts" :key="product._id">
                            {{ product.name }}
                            <button @click="removeFromCart(product._id)">x</button>
                        </li>
                    </ul>
                    <p>Total: \${{ cartTotal }} </p>
                    <button @click="checkout">Checkout</button>
                </section>
                <user-msg></user-msg>
                <nav>
                    <router-link to="/">Home</router-link> | 
                    <router-link to="/shop">Shop</router-link>
                </nav>
            </header>
    `,
    data() {
        return {
            user: { fullName: 'Baba', balance: 20 },
            isCartShown : false
        }
    },
    computed : {
        cartLength() {
            return 0
        },
        cartTotal() {
            return 0
        },
        cartProducts() {
            return []
        },
    },
    methods: {
        removeFromCart(productId) {
            console.log('Remove from Cart:', productId)
        },
        checkout() {
            console.log('Checkout!')
         }
    },
    components: {
        userMsg
    }
}