<template>
    <v-card flat tile>
        <v-row class="ma-0">
            <v-col sm="4" cols="12" class="ma-0 pa-0">
                <v-card :height="$vuetify.breakpoint.mobile?'calc( ('+get_screen_height+' -50px)/3 )':'100%'" :img="myImage" tile flat />
            </v-col>
            <v-col class="px-0 ma-0 pb-0">
                <v-card :min-height="$vuetify.breakpoint.mobile?'calc( 2*('+get_screen_height+' -50px)/3 )':'calc('+get_screen_height+'-50px)'" flat tile>
                    <v-row justify="center" class="ma-0">
                        <v-card-title 
                            :class="$vuetify.breakpoint.xl?'text-h2':$vuetify.breakpoint.lg?'text-h3':'text-h4'"
                        >
                            Produto
                        </v-card-title>
                    </v-row>
                    
                    <v-card-text class="pa-0 d-flex align-content-center flex-wrap">
                        <v-card 
                            v-for="card in cards" 
                            :key="card.icon" 
                            color="proxy_color_light" 
                            :min-height="'calc(('+get_screen_height+' - 320px)/3)'" 
                            class="mb-8 d-flex align-content-center flex-wrap" 
                            flat 
                            tile
                        >
                            <v-row class="ma-0" align="center">
                                <v-col cols="2">
                                    <v-icon :size="$vuetify.breakpoint.xl?'220':$vuetify.breakpoint.lg?'120':!$vuetify.breakpoint.mobile?'90':'60'" v-text="card.icon" />
                                </v-col>
                                <v-col 
                                    :class="$vuetify.breakpoint.xl?'text-h5':$vuetify.breakpoint.lg?'text-h6':'text-h7'"
                                    v-html="card.text"
                                >
                                </v-col>
                            </v-row>
                        </v-card>
                    </v-card-text>
                </v-card>
            </v-col>
        </v-row>
    </v-card>
</template>

<script>
import utils from '../utils/utils'

export default {
    data: () => ({
        myImage: require('@/assets/ryoji-iwata-X53e51WfjlE-unsplash.jpg'),
        cards: [
            {
                'icon': '$pictograma1_solido',
                'text': 'Somos uma plataforma digital de <strong>mediação de prepostos</strong> que permite que você acompanhe todos os detalhes da atuação do <strong>preposto</strong>.'
            },
            {
                'icon': '$pictograma2_solido',
                'text': 'Aliamos <strong>treinamentos jurídicos</strong> voltados para a atuação como preposto, <strong>tecnologia com geolocalização em tempo real</strong> e <strong>seleção inteligente de prepostos</strong> em uma única plataforma simples e intuitiva.'
            },
            {
                'icon': '$pictograma4_solido',
                'text': 'Tudo isto para trazer segurança, rapidez e qualidade na <strong>representação da sua empresa em audiências</strong>.'
            }
        ]
    }),
    methods: {
        get_screen_height: utils.get_screen_height
    }
}
</script>