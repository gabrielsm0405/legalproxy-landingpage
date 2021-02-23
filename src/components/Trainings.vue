<template>
    <v-row class="ma-0">
        <v-col sm="4" cols="12" class="ma-0 pa-0">
            <v-card height="calc( 100vh - 100px )" tile flat>
                <v-container fill-height>
                    <v-img :height="$vuetify.breakpoint.xl?'900':'600'" contain src="@/assets/Celular.png" />
                </v-container>
            </v-card>
        </v-col>
        <v-col class="ma-0 pa-0">
            <v-card min-height="calc( 100vh - 100px )" tile flat class="pa-5">
                <v-container fill-height>
                    <v-row justify="center">
                        <v-card-title :class="$vuetify.breakpoint.xl?'text-h2':$vuetify.breakpoint.lg?'text-h3':'text-h4'">
                            Treinamentos
                        </v-card-title>
                    </v-row>

                    <v-card-text class="mt-16">
                        <p :class="$vuetify.breakpoint.xl?'text-h4':$vuetify.breakpoint.lg?'text-h6':'text-h7'"><b>Nossos prepostos são qualificados para representar sua empresa em uma audiência.</b></p>

                        <p :class="'mt-16 '+($vuetify.breakpoint.xl?'text-h4':$vuetify.breakpoint.lg?'text-h5':'text-h6')">
                            O preposto só é habilitado para participar de audiências após passar pelos treinamentos cuidadosamente preparados pelo nosso time jurídico. Isto para garantir qualidade do serviço prestado por eles.
                        </p>

                        <p :class="'mt-16 '+($vuetify.breakpoint.xl?'text-h4':$vuetify.breakpoint.lg?'text-h5':'text-h6')">
                            Nossos treinamentos envolvem as esferas Cível e Trabalhista, entre diversos outros temas pertinentes à atuação do preposto em audiências.
                        </p>
                    </v-card-text>
                </v-container>
            </v-card>
        </v-col>
    </v-row>
</template>