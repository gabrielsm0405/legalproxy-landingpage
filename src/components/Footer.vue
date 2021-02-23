<template>
    <v-card flat tile>
        <v-footer color="white">
            <v-row :class="'ma-0 black--text '+($vuetify.breakpoint.xl?'text-h6':$vuetify.breakpoint.lg?'text-h7':'text-h8')" align="center" justify="center">
                {{ new Date().getFullYear() }}, Todos os direitos reservados Legal Proxy
            </v-row>
        </v-footer>
    </v-card>
</template>