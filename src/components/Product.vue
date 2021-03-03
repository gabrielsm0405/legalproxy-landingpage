<template>
    <v-row class="ma-0">
        <v-col sm="4" cols="12" class="ma-0 pa-0">
            <v-card min-height="calc( 100vh - 50px )" :img="myImage" tile flat />
        </v-col>
        <v-col class="px-0 ma-0 pb-0">
            <v-card min-height="calc( 100vh - 50px )" flat tile>
                <v-row justify="center">
                    <v-card-title :class="$vuetify.breakpoint.xl?'text-h2':$vuetify.breakpoint.lg?'text-h3':'text-h4'">Produto</v-card-title>
                </v-row>

                <v-card-text class="pa-0 mt-8" :style="{'position':'absolute', 'top':'50%', 'transform': 'translate(0, -50%)'}">
                    <v-card v-for="card in cards" :key="card.icon" color="proxy_color_light" min-height="calc((100vh - 320px)/3)" class="mb-8" flat tile>
                        <v-row class="ma-0" align="center" :style="{'position':'absolute', 'top':'50%', 'transform': 'translate(0, -50%)'}">
                            <v-col cols="2">
                                <v-icon :size="$vuetify.breakpoint.xl?'220':'120'" v-text="card.icon" />
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