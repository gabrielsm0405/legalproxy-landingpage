<template>
    <v-card flat tile>
        <v-card flat tile>
            <v-row class="ma-0">
                <v-col sm="4" cols="12" class="ma-0 pa-0">
                    <v-card color="amarelo_claro" flat tile :min-height="'calc( ('+get_screen_height+' -50px)/2 )'" class="pa-5 d-flex align-content-center flex-wrap">
                        <v-card-title 
                            :class="$vuetify.breakpoint.xl?'text-h3':$vuetify.breakpoint.lg?'text-h4':!$vuetify.breakpoint.mobile?'text-h5':'text-h6'"
                            class="text-break"
                        >
                            <b>Somos uma <i><strong>legaltech</strong></i> focada na <strong>intermediação de prepostos</strong></b>
                        </v-card-title>
                        
                        <v-card-text class="text-break black--text" :class="$vuetify.breakpoint.xl?'text-h6':$vuetify.breakpoint.lg?'text-h7':!$vuetify.breakpoint.mobile?'text-h8':'text-h9'">
                                Aliamos tecnologia a um método inovador a fim de oferecer profissionais certificados para atender sua necessidade, otimizando custo e tempo
                        </v-card-text>

                        <v-row justify="center" class="ma-0" v-if="$vuetify.breakpoint.mobile">
                            <v-btn 
                                rounded 
                                color="secondary primary--text" 
                                small
                            >
                                Sou empresa
                            </v-btn>
                            <v-spacer></v-spacer>
                            <v-btn 
                                rounded 
                                color="proxy_color_light primary--text" 
                                small
                            >
                                Quero ser <strong>preposto</strong>
                            </v-btn>
                        </v-row>
                    </v-card>
                </v-col>
                <v-col class="ma-0 pa-0" v-if="!$vuetify.breakpoint.mobile">
                    <v-card :img="myImage" tile flat height="100%">
                        <div :style="{'position': 'absolute', 'bottom': '0', 'width': '100%'}">
                            <v-row class="ma-0 mb-5" justify="center">
                                <v-btn 
                                    rounded 
                                    color="amarelo_claro primary--text" 
                                    :width="$vuetify.breakpoint.xl?'240':$vuetify.breakpoint.lg?'220':'200'"
                                    :class="$vuetify.breakpoint.xl?'text-h7':$vuetify.breakpoint.lg?'text-h8':'text-h9'"
                                >
                                    Sou empresa
                                </v-btn>
                            </v-row>
                            <v-row class="ma-0 mb-5" justify="center">
                                <v-btn 
                                    rounded 
                                    color="proxy_color_light primary--text" 
                                    :width="$vuetify.breakpoint.xl?'240':$vuetify.breakpoint.lg?'220':'200'"
                                    :class="$vuetify.breakpoint.xl?'text-h7':$vuetify.breakpoint.lg?'text-h8':'text-h9'"
                                >
                                    Quero ser preposto
                                </v-btn>
                            </v-row>
                        </div>
                    </v-card>
                </v-col>
            </v-row>
        </v-card>
        <v-row class="ma-0" v-if="!$vuetify.breakpoint.mobile">
            <v-col v-for="card in cards" :key="card.icon" cols="3" class="px-3">
                <v-card flat tile color="tertiary" :min-height="'calc( ('+get_screen_height+' -50px)/2 )'" style="text-align:center" class="d-flex align-content-center flex-wrap">
                    <v-row class="ma-0" justify="center" style="width: 100%">
                        <v-icon :size="$vuetify.breakpoint.xl?'300':$vuetify.breakpoint.lg?'200':'100'" v-text="card.icon" />
                    </v-row>
                        
                    <v-row 
                        justify="center" 
                        :class="($vuetify.breakpoint.xl?'text-h5':$vuetify.breakpoint.lg?'text-h6':'text-h7')" 
                        class="ma-0"
                        v-html="'<b>'+card.title+'</b>'"
                    >
                    </v-row>
                    
                    <v-row 
                        justify="center" 
                        :class="($vuetify.breakpoint.xl?'text-h6':$vuetify.breakpoint.lg?'text-h7':'text-h8')" 
                        class="ma-0 mb-5"
                        v-html="card.text"
                    >
                    </v-row>
                </v-card>
            </v-col>
        </v-row>

        <v-carousel :height="'calc( ('+get_screen_height+' -50px)/2 )'" cycle interval="5000" :show-arrows="false" hide-delimiters v-if="$vuetify.breakpoint.mobile">
            <v-carousel-item
                v-for="(card, i) in cards"
                :key="i"
                class="pa-3"
            >
                <v-card flat tile color="black--text tertiary" height="calc( (100vh - 100px)/2 )" style="text-align:center" class="pa-5 d-flex align-content-center flex-wrap">
                    <v-row justify="center" style="width: 100%" class="ma-0">
                        <v-icon :size="$vuetify.breakpoint.xl?'300':'200'" v-text="card.icon" />
                    </v-row>
                        
                    <v-row justify="center" :class="($vuetify.breakpoint.xl?'text-h5':$vuetify.breakpoint.lg?'text-h6':'text-h7')" class="ma-0">
                        <b>{{card.title}}</b>
                    </v-row>
                    
                    <v-row justify="center" :class="($vuetify.breakpoint.xl?'text-h6':$vuetify.breakpoint.lg?'text-h7':'text-h8')" class="ma-0 mb-5">
                        {{card.text}}
                    </v-row>
                </v-card>
            </v-carousel-item>
        </v-carousel>
    </v-card>
</template>

<script>
import utils from '../utils/utils'

export default {
    data: () => ({
        myImage: require('@/assets/using-smartphone-with-city-in-the-background.jpg'),
        cards: [
            {
                'icon': '$pictograma1',
                'title': '<strong>Preposto</strong> já!',
                'text': 'Com a Legal Proxy você <strong>contrata o preposto certo para sua empresa</strong>.'
            },
            {
                'icon': '$pictograma2',
                'title': 'Onde precisar',
                'text': 'Economize com passagens aéreas, hospedagem e alimentação.'
            },
            {
                'icon': '$pictograma3',
                'title': 'Certificação garantida',
                'text': 'Nossa rede conta com <strong>prepostos certificados em representação jurídica</strong>.'
            },
            {
                'icon': '$pictograma4',
                'title': 'Prático e seguro',
                'text': 'Todas as transações financeiras são feitas dentro da nossa plataforma.'
            }
        ]
    }),
    methods: {
        get_screen_height: utils.get_screen_height
    }
}
</script>