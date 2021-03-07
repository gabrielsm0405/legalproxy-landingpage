<template>
    <v-card>
        <v-row class="ma-0">
            <v-col sm="4" cols="12" class="ma-0 pa-0">
                <v-card :class="$vuetify.breakpoint.mobile?'scroller':''" :height="$vuetify.breakpoint.mobile?'calc( (100vh - 50px)/3 )':'100%'" tile flat>
                    <v-container fill-height>
                        <v-img :height="$vuetify.breakpoint.xl?'900':!$vuetify.breakpoint.mobile?'600':'300'" contain src="@/assets/Celular.png" />
                    </v-container>
                </v-card>
            </v-col>
            <v-col class="ma-0 pa-0">
                <v-card 
                    :min-height="$vuetify.breakpoint.mobile?'calc( 2*(100vh - 50px)/3 )':'calc( 100vh - 50px )'" 
                    tile 
                    flat 
                    class="pa-5 d-flex align-content-center flex-wrap"
                >
                    <v-row justify="center" class="ma-0">
                        <v-card-title :class="$vuetify.breakpoint.xl?'text-h2':$vuetify.breakpoint.lg?'text-h3':'text-h4'">
                            Treinamentos
                        </v-card-title>
                    </v-row>

                    <v-card-text class="black--text">
                        <p :class="$vuetify.breakpoint.xl?'text-h4':$vuetify.breakpoint.lg?'text-h5':'text-h6'"><b>Nossos prepostos são qualificados para representar sua empresa em uma audiência.</b></p>

                        <p :class="'mt-10 '+($vuetify.breakpoint.xl?'text-h5':$vuetify.breakpoint.lg?'text-h6':'text-h7')">
                            O preposto só é habilitado para participar de audiências após passar pelos treinamentos cuidadosamente preparados pelo nosso time jurídico. Isto para garantir qualidade do serviço prestado por eles.
                        </p>

                        <p :class="$vuetify.breakpoint.xl?'text-h5':$vuetify.breakpoint.lg?'text-h6':'text-h7'">
                            Nossos treinamentos envolvem as esferas Cível e Trabalhista, entre diversos outros temas pertinentes à atuação do preposto em audiências.
                        </p>
                    </v-card-text>
                </v-card>
            </v-col>
        </v-row>
    </v-card>
</template>