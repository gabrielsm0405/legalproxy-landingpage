<template>
    <v-card flat tile min-height="calc( (100vh - 50px)/2 )" color="tertiary" :img="contato">
        <v-row>
            <v-col cols="8">
                <div :style="{'position': 'absolute', 'top': '50%', 'transform': 'translate(0, -50%)'}">
                    <v-row class="ml-5">
                        <p :class="$vuetify.breakpoint.xl?'text-h3':$vuetify.breakpoint.lg?'text-h4':'text-h5'">
                            <b>Informações de contato</b>
                        </p>
                    </v-row>
                    <v-row class="ml-5" align="center">
                        <p :class="$vuetify.breakpoint.xl?'text-h4':$vuetify.breakpoint.lg?'text-h5':'text-h6'">
                            <v-icon :size="$vuetify.breakpoint.xl?'35':'20'">fas fa-phone</v-icon> 
                            +55 (11) 9 8918-2626 
                            <v-icon :size="$vuetify.breakpoint.xl?'35':'20'">fab fa-whatsapp</v-icon>
                        </p>

                        <p :class="'ml-10 ' + ($vuetify.breakpoint.xl?'text-h4':$vuetify.breakpoint.lg?'text-h5':'text-h6')">
                            <v-icon :size="$vuetify.breakpoint.xl?'35':'20'">fas fa-envelope</v-icon>
                            atendimento@legalproxy.com.br
                        </p>
                    </v-row>
                </div>
            </v-col>
            <v-col>
                <div :style="{'position': 'absolute', 'top': '50%', 'transform': 'translate(0, -50%)'}">
                    <v-row justify="center">
                        <v-icon :size="$vuetify.breakpoint.xl?'120':'80'">$legal_proxy_icon</v-icon>
                    </v-row>
                    <v-row justify="center">
                        <v-img :src="legal_proxy_logotipo" :max-width="$vuetify.breakpoint.xl?'450':'300'"></v-img>
                    </v-row>
                </div>
            </v-col>
        </v-row>
    </v-card>
</template>

<script>
export default {
    data: () => ({
        legal_proxy_icon: require('@/assets/LP_IDV_VAR_SIMB_PREF.png'),
        legal_proxy_logotipo: require('@/assets/LP_IDV_VAR_LGTIPO_AMARELO.png'),
        contato: require('@/assets/contato.png')
    })
}
</script>