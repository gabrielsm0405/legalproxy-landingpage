<template>
    <v-row class="ma-0">
        <v-col sm="8" cols="12" class="pa-0">
            <v-card min-height="calc( 100vh - 50px )" tile flat color="amarelo_claro" class="pa-5">
                <v-card-title :class="$vuetify.breakpoint.xl?'text-h2':$vuetify.breakpoint.lg?'text-h3':'text-h4'">
                    Quem somos
                </v-card-title>
                
                <v-card-text 
                    class="black--text" 
                    :style="{'position': 'absolute', 'top': '50%', 'transform': 'translate(0, -50%)', 'width': '80%'}"
                >
                    <p :class="$vuetify.breakpoint.xl?'text-h4':$vuetify.breakpoint.lg?'text-h5':'text-h6'"><b>Somos apaixonados por Direito e Tech</b></p>

                    <p :class="'mt-16 '+($vuetify.breakpoint.xl?'text-h5':$vuetify.breakpoint.lg?'text-h6':'text-h7')">
                        Através da iniciativa de profissionais com vasta experiência no meio jurídico juntamente com pessoas que respiram tecnologia, surgiu a ideia de simplificar a busca e o gerenciamento de prepostos através da tecnologia. 
                    </p>

                    <p :class="'mt-5 '+($vuetify.breakpoint.xl?'text-h5':$vuetify.breakpoint.lg?'text-h6':'text-h7')">
                        Somos uma legaltech focada na intermediação de prepostos de forma totalmente online e automatizada. 
                    </p>
                </v-card-text>

                <v-icon :size="$vuetify.breakpoint.xl?'300':'200'" :style="{'position': 'absolute', 'bottom': '0'}">$logo_grafite</v-icon>
            </v-card>
        </v-col>
        <v-col class="pa-0">
            <v-card min-height="calc( 100vh - 50px )" :img="myImage" tile flat />
        </v-col>
    </v-row>
</template>

<script>
export default {
    data: () => ({
        myImage: require('@/assets/tech-group-meeting-flatlay.jpg')
    })
}
</script>