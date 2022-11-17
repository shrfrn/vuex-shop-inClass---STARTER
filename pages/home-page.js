import { showSuccessMsg } from '../services/event-bus.service.js'
import { productService } from '../services/product.service.js'

export default {
    template: `
        <section class="home">
            <h1>Hi {{ user.fullName }}!</h1>
            <h1>We have {{ productCount }} Products!</h1>
            <h2>
                Count {{ countForDisplay }}
                <button @click="inc(1)">+</button>
                <button @click="inc(10)">+10</button>
            </h2>
            <img src="img/logo.png"/>
        </section>
    
    `,
    data() {
        return {
            products: []
        }
    },
    created() {
        this.products = productService.query()
        showSuccessMsg('HomePage Loaded')
    },
    methods: {
        inc(val) {
           console.log('INC INC')
        }

    },
    computed: {
        countForDisplay() {
            return 101
        },
        user() {
            return { fullName: 'Puki', balance: 20 }
        },
        productCount() {
            return 0
        }
    }

}