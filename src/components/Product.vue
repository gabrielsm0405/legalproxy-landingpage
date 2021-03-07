<template>
    <v-card flat tile>
        <v-row class="ma-0">
            <v-col sm="4" cols="12" class="ma-0 pa-0">
                <v-card :min-height="$vuetify.breakpoint.mobile?'calc( (100vh - 50px)/3 )':'100%'" :img="myImage" tile flat />
            </v-col>
            <v-col class="px-0 ma-0 pb-0">
                <v-card :min-height="$vuetify.breakpoint.mobile?'calc( 2*(100vh - 50px)/3 )':'calc( 100vh - 50px )'" flat tile>
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
                            min-height="calc((100vh - 320px)/3)" 
                            class="mb-8 d-flex align-content-center flex-wrap" 
                            flat 
                            tile
                        >
                            <v-row class="ma-0" align="center">
                                <v-col cols="2">
                                    <v-icon :size="$vuetify.breakpoint.xl?'220':!$vuetify.breakpoint.mobile?'120':'60'" v-text="card.icon" />
                                </v-col>
                                <v-col :class="$vuetify.breakpoint.xl?'text-h5':$vuetify.breakpoint.lg?'text-h6':'text-h7'">
                                    {{card.text}}
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
export default {
    data: () => ({
        myImage: require('@/assets/ryoji-iwata-X53e51WfjlE-unsplash.jpg'),
        cards: [
            {
                'icon': '$pictograma1_solido',
                'text': 'Somos uma plataforma digital de mediação de prepostos que permite que você acompanhe todos os detalhes da atuação do preposto.'
            },
            {
                'icon': '$pictograma2_solido',
                'text': 'Aliamos treinamentos jurídicos voltados para a atuação como preposto, tecnologia com geolocalização em tempo real e seleção inteligente de prepostos em uma única plataforma simples e intuitiva.'
            },
            {
                'icon': '$pictograma4_solido',
                'text': 'Tudo isto para trazer segurança, rapidez e qualidade na representação da sua empresa em audiências.'
            }
        ]
    })
}
</script>