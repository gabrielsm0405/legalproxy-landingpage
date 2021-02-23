<template>
    <v-card flat tile min-height="calc( 100vh - 100px )" color="tertiary" :img="contato">
        <v-row justify="center" class="pt-10">
            <v-icon :size="$vuetify.breakpoint.xl?'120':'80'">$legal_proxy_icon</v-icon>
        </v-row>
        <v-row justify="center" class="mt-10">
            <v-img :src="legal_proxy_logotipo" :max-width="$vuetify.breakpoint.xl?'500':'350'"></v-img>
        </v-row>

        <v-row :style="{'position': 'absolute', 'top': '50%', 'left': '50%', 'transform': 'translate(-50%, -50%)'}" class="ma-0">
            <p :class="$vuetify.breakpoint.xl?'text-h4':$vuetify.breakpoint.lg?'text-h5':'text-h6'">
                <b>Informações de contato</b>
            </p>
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