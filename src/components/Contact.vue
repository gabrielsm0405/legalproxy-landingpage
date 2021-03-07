<template>
    <v-card 
        flat 
        tile 
        :min-height="'calc( ('+get_screen_height+' - 50px)/2 )'" 
        color="tertiary" 
        :img="contato"
        class="d-flex align-content-center flex-wrap"
    >
        <v-row class="ma-0">
            <v-col sm="8" cols="12">
                <v-card-title :class="$vuetify.breakpoint.xl?'text-h3':$vuetify.breakpoint.lg?'text-h4':'text-h5'">
                    <b>Informações de contato</b>
                </v-card-title>
                <v-row class="ma-0" align="center">
                    <p :class="$vuetify.breakpoint.xl?'text-h4':$vuetify.breakpoint.lg?'text-h5':!$vuetify.breakpoint.mobile?'text-h6':'text-h7'">
                        <v-icon :size="$vuetify.breakpoint.xl?'35':'20'">fas fa-phone</v-icon> 
                        +55 (11) 9 8918-2626 
                        <v-icon :size="$vuetify.breakpoint.xl?'35':'25'">fab fa-whatsapp</v-icon>
                    </p>
                    <v-spacer></v-spacer>
                    <p :class="$vuetify.breakpoint.xl?'text-h4':$vuetify.breakpoint.lg?'text-h5':!$vuetify.breakpoint.mobile?'text-h6':'text-h7'">
                        <v-icon :size="$vuetify.breakpoint.xl?'35':'20'">fas fa-envelope</v-icon>
                        atendimento@legalproxy.com.br
                    </p>
                </v-row>
            </v-col>
            <v-col>
                <v-row class="ma-0" justify="center">
                    <v-icon :size="$vuetify.breakpoint.xl?'120':!$vuetify.breakpoint.mobile?'80':'40'">$legal_proxy_icon</v-icon>
                </v-row>
                <v-row class="ma-0" justify="center">
                    <v-img :src="legal_proxy_logotipo" :max-width="$vuetify.breakpoint.xl?'450':!$vuetify.breakpoint.mobile?'300':'150'"></v-img>
                </v-row>
            </v-col>
        </v-row>
    </v-card>
</template>

<script>
import utils from '../utils/utils'

export default {
    data: () => ({
        legal_proxy_icon: require('@/assets/LP_IDV_VAR_SIMB_PREF.png'),
        legal_proxy_logotipo: require('@/assets/LP_IDV_VAR_LGTIPO_AMARELO.png'),
        contato: require('@/assets/contato.png')
    }),
    methods: {
        get_screen_height: utils.get_screen_height
    }
}
</script>