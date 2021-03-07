import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';
import '@fortawesome/fontawesome-free/css/all.css'

import LegalProxyIcon from '@/assets/icons/LP_IDV_VAR_SIMB_PREF.vue'
import LegalProxyLogotipo from '@/assets/icons/LP_IDV_VAR_LGTIPO_AMARELO.vue'
import Pictograma1 from '@/assets/icons/LP_PICTOGRAMA-1_AMARELO-AZUL.vue'
import Pictograma2 from '@/assets/icons/LP_PICTOGRAMA-2_AMARELO-AZUL.vue'
import Pictograma3 from '@/assets/icons/LP_PICTOGRAMA-3_AMARELO-AZUL.vue'
import Pictograma4 from '@/assets/icons/LP_PICTOGRAMA-4_AMARELO-AZUL.vue'
import Pictograma1Solido from '@/assets/icons/LP_PICTOGRAMA-1_SOLIDO.vue'
import Pictograma2Solido from '@/assets/icons/LP_PICTOGRAMA-2_SOLIDO.vue'
import Pictograma4Solido from '@/assets/icons/LP_PICTOGRAMA-4_SOLIDO.vue'
import LogoGrafite from '@/assets/icons/LP_IDV_VAR_FLAT_GRAFITE.vue'
import MenuIcon from '@/assets/icons/LP_ICONOGRAFIA_MENU.vue'

const MY_ICONS = {
    legal_proxy_icon:{component: LegalProxyIcon},
    legal_proxy_logotipo:{component: LegalProxyLogotipo},
    pictograma1:{component: Pictograma1},
    pictograma2:{component: Pictograma2},
    pictograma3:{component: Pictograma3},
    pictograma4:{component: Pictograma4},
    pictograma1_solido:{component: Pictograma1Solido},
    pictograma2_solido:{component: Pictograma2Solido},
    pictograma4_solido:{component: Pictograma4Solido},
    logo_grafite:{component: LogoGrafite},
    menu_icon:{component: MenuIcon}
}

Vue.use(Vuetify);

export default new Vuetify({
    icons: {
        values: MY_ICONS,
        iconfont: 'fa'
    },
    theme: {
        themes: {
            light: {
                primary: '#262626', // GRAFITE
                secondary: '#e5ad3c', // AMARELO ESCURO
                tertiary: '#f1f3f4', // CINZA CLARO,
                amarelo_claro: '#fad97d',
                proxy_color: '#67b6dc',
                proxy_color_light: '#9adbf5'
            },
            dark: {

            }
        },
    },
    breakpoint: {
        mobileBreakpoint: 600
    }
});
