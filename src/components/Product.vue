<template>
    <v-row class="ma-0">
        <v-col sm="4" cols="12" class="ma-0 pa-0">
            <v-card min-height="calc( 100vh - 100px )" :img="myImage" tile flat />
        </v-col>
        <v-col class="px-0 ma-0 pb-0">
            <v-card min-height="calc( 100vh - 100px )" flat tile>
                <v-row justify="center">
                    <v-card-title class="text-h4">Produto</v-card-title>
                </v-row>

                <v-card-text class="pa-0 mt-8">
                    <v-card color="proxy_color_light" min-height="calc((100vh - 350px)/3)" class="mb-8" flat tile>
                        <v-row class="ma-0" align="center">
                            <v-col sm="2" cols="12">
                                <v-icon size="120">$pictograma1_solido</v-icon>
                            </v-col>
                            <v-col class="text-h6">
                                Somos uma plataforma digital de mediação de prepostos que permite que você acompanhe todos os detalhes da atuação do preposto.
                            </v-col>
                        </v-row>
                    </v-card>
                    
                    <v-card color="proxy_color_light" min-height="calc((100vh - 350px)/3)" class="mb-8" flat tile>
                        <v-row class="ma-0" align="center">
                            <v-col sm="2" cols="12">
                                    <v-icon size="120">$pictograma2_solido</v-icon>
                            </v-col>
                            <v-col>
                                <v-col class="text-h6">
                                    Aliamos treinamentos jurídicos voltados para a atuação como preposto, tecnologia com geolocalização em tempo real e seleção inteligente de prepostos em uma única plataforma simples e intuitiva. 
                                </v-col>
                            </v-col>
                        </v-row>
                    </v-card>
                    
                    <v-card color="proxy_color_light" min-height="calc((100vh - 350px)/3)" class="mb-8" flat tile>
                        <v-row class="ma-0" align="center">
                            <v-col sm="2" cols="12">
                                    <v-icon size="120">$pictograma4_solido</v-icon>
                            </v-col>
                            <v-col>
                                <v-col class="text-h6">
                                    Tudo isto para trazer segurança, rapidez e qualidade na representação da sua empresa em audiências.
                                </v-col>
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
        myImage: require('@/assets/ryoji-iwata-X53e51WfjlE-unsplash.jpg')
    })
}
</script>