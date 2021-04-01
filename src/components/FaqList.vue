<template>
    <div>
        <p :class="$vuetify.breakpoint.xl?'text-h4':$vuetify.breakpoint.lg?'text-h5':'text-h6'">
            {{title}}
        </p>
        <v-expansion-panels flat>
            <v-expansion-panel
                v-for="(question, i) in questions_list"
                :key="i"
            >
                <v-expansion-panel-header color="amarelo_claro">
                    {{question.content}}
                    <template v-slot:actions>
                        <v-icon class="ml-5" small>
                            fas fa-plus
                        </v-icon>
                    </template>
                </v-expansion-panel-header>
                
                <v-expansion-panel-content color="amarelo_claro">
                    {{question.answer}}
                </v-expansion-panel-content>
            </v-expansion-panel>
        </v-expansion-panels>
    </div>
</template>

<script>
export default {
    data: () => ({
        
    }),
    props: {
        title: String,
        questions_list: Array
    }
}
</script>