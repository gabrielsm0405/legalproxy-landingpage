<template>
    <v-card flat tie>
        <v-row class="ma-0">
            <v-col sm="8" cols="12" class="pa-0">
                <v-card 
                    :min-height="$vuetify.breakpoint.mobile?'calc( 2*('+get_screen_height+' - 50px)/3 )':'calc( '+get_screen_height+' - 50px )'" 
                    tile 
                    flat 
                    color="amarelo_claro" 
                    class="pa-5 d-flex align-content-center flex-wrap"
                >
                    <v-card-title :class="$vuetify.breakpoint.xl?'text-h2':$vuetify.breakpoint.lg?'text-h3':'text-h4'">
                        Quem somos
                    </v-card-title>
                    
                    <v-card-text class="black--text" style="width:90%">
                        <p :class="$vuetify.breakpoint.xl?'text-h4':$vuetify.breakpoint.lg?'text-h5':'text-h6'">
                            <b>Somos apaixonados por Direito e Tech</b>
                        </p>

                        <p :class="'mt-10 '+($vuetify.breakpoint.xl?'text-h5':$vuetify.breakpoint.lg?'text-h6':'text-h7')">
                            Através da iniciativa de profissionais com vasta experiência no meio jurídico juntamente com pessoas que respiram tecnologia, surgiu a ideia de <strong>simplificar a busca e o gerenciamento de prepostos através da tecnologia</strong>. 
                        </p>

                        <p :class="$vuetify.breakpoint.xl?'text-h5':$vuetify.breakpoint.lg?'text-h6':'text-h7'">
                            Somos uma <strong>legaltech focada na intermediação de prepostos</strong> de forma totalmente online e automatizada. 
                        </p>
                    </v-card-text>

                    <v-icon 
                        class="ml-5" 
                        :size="$vuetify.breakpoint.xl?'300':!$vuetify.breakpoint.mobile?'200':'60'" 
                    >
                        $logo_grafite
                    </v-icon>
                </v-card>
            </v-col>
            <v-col sm="4" cols="12" class="pa-0">
                <v-card :min-height="$vuetify.breakpoint.mobile?'calc( ('+get_screen_height+' - 50px)/3 )':'100%'" :img="myImage" tile flat />
            </v-col>
        </v-row>
    </v-card>
</template>

<script>
import utils from '../utils/utils'

export default {
    data: () => ({
        myImage: require('@/assets/tech-group-meeting-flatlay.jpg')
    }),
    methods: {
        get_screen_height: utils.get_screen_height
    }
}
</script>