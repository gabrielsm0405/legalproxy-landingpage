<template>
    <v-card height="calc( 100vh - 100px )" flat tile>
        <v-row class="ma-0">
            <v-col sm="4" cols="12" class="ma-0 pa-0">
                <v-card color="amarelo_claro" flat tile min-height="calc( (100vh - 130px)/2 )">
                    <v-container fill-height>
                        <v-card-title class="text-h4 text-break">
                            <p>Somos uma <i>legaltech</i> focada na intermediação de prepostos</p>
                        </v-card-title>

                        <v-card-text class="pr-16">
                            <p><b>Aliamos tecnologia a um método inovador a fim de oferecer profissionais certificados para atender sua necessidade, otimizando custo e tempo</b></p>
                        </v-card-text>
                    </v-container>
                </v-card>
            </v-col>
            <v-col class="ma-0 pa-0">
                <v-card min-height="calc( (100vh - 130px)/2 )" :img="myImage" tile flat>
                    <div :style="{'position': 'absolute', 'bottom': '0', 'width': '100%'}">
                        <v-row class="ma-0 mb-5" justify="center">
                            <v-btn rounded color="amarelo_claro primary--text" width="200">Sou empresa</v-btn>
                        </v-row>
                        <v-row class="ma-0 mb-5" justify="center">
                            <v-btn rounded color="proxy_color_light primary--text" width="200">Quero ser preposto</v-btn>
                        </v-row>
                    </div>
                </v-card>
            </v-col>
        </v-row>
        <v-row class="ma-0">
            <v-col sm="3" cols="12" class="pa-5">
                <v-card flat tile color="tertiary" min-height="calc( (100vh - 130px)/2 )">
                    <v-row class="ma-0" justify="center">
                        <v-icon size="200">$pictograma1</v-icon>
                    </v-row>

                    <v-row justify="center" class="mt-3 text-h6">
                        <b>Preposto já!</b>
                    </v-row>

                    
                    <p class="mt-5 mx-5" style="text-align:center">Com a Legal Proxy você contrata o preposto certo para sua empresa.</p>
                    
                </v-card>
            </v-col>
            <v-col sm="3" cols="12" class="pa-5">
                <v-card flat tile color="tertiary" min-height="calc( (100vh - 130px)/2 )">
                    <v-row class="ma-0" justify="center">
                        <v-icon size="200">$pictograma2</v-icon>
                    </v-row>

                    <v-row justify="center" class="mt-3 text-h6">
                        <b>Onde precisar</b>
                    </v-row>

                    
                    <p class="mt-5 mx-5" style="text-align:center">Economize com passagens aéreas, hospedagem e alimentação.</p>
                </v-card>
            </v-col>
            <v-col sm="3" cols="12" class="pa-5">
                <v-card flat tile color="tertiary" min-height="calc( (100vh - 130px)/2 )">
                    <v-row class="ma-0" justify="center">
                        <v-icon size="200">$pictograma3</v-icon>
                    </v-row>

                    <v-row justify="center" class="mt-3 text-h6">
                        <b>Certificação garantida</b>
                    </v-row>

                    
                    <p class="mt-5 mx-5" style="text-align:center">Nossa rede conta com prepostos certificados em representação jurídica.</p>
                </v-card>
            </v-col>
            <v-col sm="3" cols="12" class="pa-5">
                <v-card flat tile color="tertiary" min-height="calc( (100vh - 130px)/2 )">
                    <v-row class="ma-0" justify="center">
                        <v-icon size="200">$pictograma4</v-icon>
                    </v-row>

                    <v-row justify="center" class="mt-3 text-h6">
                        <b>Prático e seguro</b>
                    </v-row>

                    
                    <p class="mt-5 mx-5" style="text-align:center">Todas as transações financeiras são feitas dentro da nossa plataforma.</p>
                </v-card>
            </v-col>
        </v-row>
    </v-card>
</template>

<script>
export default {
    data: () => ({
        myImage: require('@/assets/using-smartphone-with-city-in-the-background.jpg')
    })
}
</script>