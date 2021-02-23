<template>
    <v-card height="calc( (100vh - 100px)/2 )" flat tile>
        <!--<v-row class="ma-0">
            <v-card color="amarelo_claro" flat tile min-height="calc( (100vh - 100px)/2 )" width="100%">
                <v-card-title>
                    <v-row justify="center" class="ma-0 text-h3">
                        Como podemos ajudar?
                    </v-row>
                </v-card-title>

                <v-row justify="center" class="mt-16 ma-0">
                    <v-text-field height="60" flat solo rounded label="Digite palavras chaves para encontrar respostas" :style="{'max-width': '1000px'}"></v-text-field>
                </v-row>
                <v-row justify="center" class="mt-10">
                    <b>Você também pode procurar nos tópicos abaixo pelo que está procurando</b>
                </v-row>
                
            </v-card>
        </v-row>-->
        <v-row class="ma-0">
            <v-card color="amarelo_claro" flat tile min-height="calc( (100vh - 100px)/2 )" width="100%">
                <v-card-title :class="($vuetify.breakpoint.xl?'text-h3':$vuetify.breakpoint.lg?'text-h4':'text-h5')+' pl-10 pt-10 pb-10'">
                    Perguntas frequentes
                </v-card-title>

                <v-card-text class="pl-10">
                    <v-row>
                        <v-col sm="4" cols="12">
                            <p :class="$vuetify.breakpoint.xl?'text-h4':$vuetify.breakpoint.lg?'text-h5':'text-h6'">
                                Empresa
                            </p>
                            <v-row 
                                :class="'ma-0 mb-2 '+($vuetify.breakpoint.xl?'text-h6':$vuetify.breakpoint.lg?'text-h7':'text-h8')"
                                v-for="question in company_questions" 
                                :key="question"
                            >
                                <a>{{question}}</a>
                            </v-row>
                        </v-col>
                        <v-col sm="4" cols="12">
                            <p :class="$vuetify.breakpoint.xl?'text-h4':$vuetify.breakpoint.lg?'text-h5':'text-h6'">
                                Proxie
                            </p>
                            <v-row 
                                :class="'ma-0 mb-2 '+($vuetify.breakpoint.xl?'text-h6':$vuetify.breakpoint.lg?'text-h7':'text-h8')"
                                v-for="question in company_questions" 
                                :key="question"
                            >
                                <a>{{question}}</a>
                            </v-row>
                        </v-col>
                    </v-row>
                </v-card-text>
            </v-card>
        </v-row>
    </v-card>
</template>

<script>
export default {
    data: () => ({
        company_questions: [
            'Lorem Ipsum is simply dummy text of the printing1',
            'Lorem Ipsum is simply dummy text of the printing2',
            'Lorem Ipsum is simply dummy text of the printing3',
        ]
    })
}
</script>