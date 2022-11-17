import { router } from './router.js'

import appHeader from './cmps/app-header.js'
import appFooter from './cmps/app-footer.js'

const options = {
    template: `
        <section>
            <app-header/>
            <router-view/>
            <app-footer/>
        </section>
    `,
    created() {
        console.log('Welcome to state management...')
    },
    components: {
        appHeader,
        appFooter,
    },

}

const app = Vue.createApp(options)

app.use(router)
app.mount('#app')