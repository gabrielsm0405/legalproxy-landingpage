<template>
    <v-card flat tile>
        <v-app-bar height="50" elevate-on-scroll app>
            <v-toolbar-title>
                <v-btn icon x-large @click="scroll_to('init')">
                    <v-icon size="40" class="mx-2">$legal_proxy_icon</v-icon>
                </v-btn>
                <v-icon v-if="!$vuetify.breakpoint.mobile" size="200" class="mx-2">$legal_proxy_logotipo</v-icon>
            </v-toolbar-title>

            <v-spacer v-if="!$vuetify.breakpoint.mobile"></v-spacer>
            <v-toolbar-items v-if="!$vuetify.breakpoint.mobile">
                <v-btn large text @click="scroll_to('init')" :class="$vuetify.breakpoint.xl?'text-h7':$vuetify.breakpoint.lg?'text-h8':'text-h9'">Início</v-btn>
                <v-btn large text @click="scroll_to('product')" :class="$vuetify.breakpoint.xl?'text-h7':$vuetify.breakpoint.lg?'text-h8':'text-h9'">Produto</v-btn>
                <v-btn large text @click="scroll_to('who_we_are')" :class="$vuetify.breakpoint.xl?'text-h7':$vuetify.breakpoint.lg?'text-h8':'text-h9'">Quem Somos</v-btn>
                <v-btn large text @click="scroll_to('trainings')" :class="$vuetify.breakpoint.xl?'text-h7':$vuetify.breakpoint.lg?'text-h8':'text-h9'">Treinamentos</v-btn>
                <v-btn large text @click="scroll_to('faq')" :class="$vuetify.breakpoint.xl?'text-h7':$vuetify.breakpoint.lg?'text-h8':'text-h9'">FAQ</v-btn>
                <v-btn large text @click="scroll_to('contact')" :class="$vuetify.breakpoint.xl?'text-h7':$vuetify.breakpoint.lg?'text-h8':'text-h9'">Contato</v-btn>
            </v-toolbar-items>

            <v-spacer></v-spacer>

            <v-btn 
                v-if="!$vuetify.breakpoint.mobile"
                rounded 
                color="amarelo_claro primary--text" 
                @click="go_to_legalproxy" 
                :class="$vuetify.breakpoint.xl?'text-h7':$vuetify.breakpoint.lg?'text-h8':'text-h9'"
                small
            >
                Entrar
            </v-btn>

            <v-app-bar-nav-icon
                color="primary"
                v-if="$vuetify.breakpoint.mobile"
                @click.stop="drawer = !drawer"
            >
                <v-icon>$menu_icon</v-icon>
            </v-app-bar-nav-icon>
        </v-app-bar>

        <v-navigation-drawer 
            v-model="drawer" 
            fixed 
            right 
            v-if="$vuetify.breakpoint.mobile"
            class="primary"
            height="100vh"
        >
            <v-list>
                <v-list-item-group v-model="group">
                    <v-list-item @click="scroll_to('init')">
                        <v-list-item-title class="tertiary--text">Início</v-list-item-title>
                    </v-list-item>
                    <v-divider></v-divider>

                    <v-list-item @click="scroll_to('product')">
                        <v-list-item-title class="tertiary--text">Produto</v-list-item-title>
                    </v-list-item>
                    <v-divider></v-divider>

                    <v-list-item @click="scroll_to('who_we_are')">
                        <v-list-item-title class="tertiary--text">Quem Somos</v-list-item-title>
                    </v-list-item>
                    <v-divider></v-divider>

                    <v-list-item @click="scroll_to('trainings')">
                        <v-list-item-title class="tertiary--text">Treinamentos</v-list-item-title>
                    </v-list-item>
                    <v-divider></v-divider>

                    <v-list-item @click="scroll_to('faq')">
                        <v-list-item-title class="tertiary--text">FAQ</v-list-item-title>
                    </v-list-item>
                    <v-divider></v-divider>

                    <v-list-item @click="scroll_to('contact')">
                        <v-list-item-title class="tertiary--text">Contato</v-list-item-title>
                    </v-list-item>
                    <v-divider></v-divider>
                </v-list-item-group>
            </v-list>
            
            <template v-slot:append>
                <v-divider class="tertiary"></v-divider>
                <div class="pa-2">
                <v-btn @click="go_to_legalproxy" text color="tertiary">
                    Entrar
                </v-btn>
                </div>
            </template>
            </v-navigation-drawer>
    </v-card>
</template>

<script>
export default {
    data: () => ({
        going: false,
        drawer: false,
        group: null
    }),
    methods: {
        go_to_legalproxy(){
            window.open('https://app.legalproxy.com.br/')
        },
        scroll_to(to) {
            this.drawer = false

            if(!this.going){
                to = document.getElementById(to).offsetTop

                if (window.scrollY == to) return;
                
                const scrollStep = Math.PI / (250 / 10);
                var count = 0, currPos;
                
                this.going = true

                let last_diff = -999999

                var scrollInterval = setInterval(function(){
                    let diff = to - window.scrollY
                    
                    if (Math.abs(diff) > 0.7 && last_diff != diff) {
                        count = count + 1;
                        
                        window.scrollTo(0, window.scrollY + diff * (0.5 - 0.5 * Math.cos(count * scrollStep)));
                    }
                    else { 
                        clearInterval(scrollInterval); 

                        this.going = false
                    }

                    last_diff = diff
                }.bind(this),10);
            }
        }
    }
}
</script>