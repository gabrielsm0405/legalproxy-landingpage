<template>
    <v-card height="calc( 100vh - 70px )" flat tile>
        <v-row class="ma-0">
            <v-col sm="4" cols="12" class="ma-0 pa-0">
                <v-card color="amarelo_claro" flat tile height="calc( (100vh - 100px)/2 )">
                    <v-container fill-height fluid>
                        <v-card-title 
                            :class="$vuetify.breakpoint.xl?'text-h3':$vuetify.breakpoint.lg?'text-h4':!$vuetify.breakpoint.mobile?'text-h5':'text-h6'"
                        >
                            <p class="text-break">Somos uma <i>legaltech</i> focada na intermediação de prepostos</p>
                        </v-card-title>

                        <v-card-text class="pr-16 text-break">
                            <p 
                                :class="$vuetify.breakpoint.xl?'text-h6':$vuetify.breakpoint.lg?'text-h7':!$vuetify.breakpoint.mobile?'text-h8':'text-h9'"
                            >
                                Aliamos tecnologia a um método inovador a fim de oferecer profissionais certificados para atender sua necessidade, otimizando custo e tempo
                            </p>
                        </v-card-text>
                    </v-container>
                </v-card>
            </v-col>
            <v-col class="ma-0 pa-0" v-if="!$vuetify.breakpoint.mobile">
                <v-card height="calc( (100vh - 100px)/2 )" :img="myImage" tile flat>
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
        <v-row class="ma-0" v-if="!$vuetify.breakpoint.mobile">
            <v-col v-for="card in cards" :key="card.icon" cols="3" class="pa-5">
                <v-card flat tile color="tertiary" min-height="calc( (100vh - 100px)/2 )">
                    <v-row class="ma-0" justify="center">
                        <v-icon :size="$vuetify.breakpoint.xl?'300':'200'" v-text="card.icon" />
                    </v-row>

                    <div :style="{'position': 'absolute', 'bottom': '0'}">
                        <v-row justify="center" :class="'mt-3 ' + ($vuetify.breakpoint.xl?'text-h5':$vuetify.breakpoint.lg?'text-h6':'text-h7')">
                            <b>{{card.title}}</b>
                        </v-row>
                        
                        <p :class="'mt-8 ' + ($vuetify.breakpoint.xl?'text-h6':$vuetify.breakpoint.lg?'text-h7':'text-h8')" style="text-align:center">
                            {{card.text}}
                        </p>
                    </div>
                </v-card>
            </v-col>
        </v-row>
        
    </v-card>
</template>

<script>
export default {
    data: () => ({
        myImage: require('@/assets/using-smartphone-with-city-in-the-background.jpg'),
        cards: [
            {
                'icon': '$pictograma1',
                'title': 'Preposto já!',
                'text': 'Com a Legal Proxy você contrata o preposto certo para sua empresa.'
            },
            {
                'icon': '$pictograma2',
                'title': 'Onde precisar',
                'text': 'Economize com passagens aéreas, hospedagem e alimentação.'
            },
            {
                'icon': '$pictograma3',
                'title': 'Certificação garantida',
                'text': 'Nossa rede conta com prepostos certificados em representação jurídica.'
            },
            {
                'icon': '$pictograma4',
                'title': 'Prático e seguro',
                'text': 'Todas as transações financeiras são feitas dentro da nossa plataforma.'
            }
        ]
    })
}
</script>