<template>
    <v-card flat tile min-height="calc( 100vh - 100px )" color="tertiary" :img="contato">
        <v-row justify="center" class="pt-10">
            <v-icon size="60">$legal_proxy_icon</v-icon>
        </v-row>
        <v-row justify="center" class="mt-10">
            <v-img :src="legal_proxy_logotipo" max-width="250"></v-img>
        </v-row>

        <v-row :style="{'position': 'absolute', 'top': '50%', 'left': '50%', 'transform': 'translate(-50%, -50%)'}" class="ma-0">
            <p class="text-h6">
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