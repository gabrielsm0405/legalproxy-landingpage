<template>
    <v-card flat tile>
        <v-app-bar height="100" elevate-on-scroll app>
            <v-toolbar-title>
                <v-btn icon x-large @click="scroll_to('init')">
                    <v-icon size="60" class="mx-2">$legal_proxy_icon</v-icon>
                </v-btn>
                <v-icon size="200" class="mx-2">$legal_proxy_logotipo</v-icon>
            </v-toolbar-title>

            <v-spacer></v-spacer>

            <v-toolbar-items>
                <v-btn x-large text @click="scroll_to('init')" :class="$vuetify.breakpoint.xl?'text-h6':$vuetify.breakpoint.lg?'text-h7':'text-h8'">Início</v-btn>
                <v-btn x-large text @click="scroll_to('product')" :class="$vuetify.breakpoint.xl?'text-h6':$vuetify.breakpoint.lg?'text-h7':'text-h8'">Produto</v-btn>
                <v-btn x-large text @click="scroll_to('who_we_are')" :class="$vuetify.breakpoint.xl?'text-h6':$vuetify.breakpoint.lg?'text-h7':'text-h8'">Quem Somos</v-btn>
                <v-btn x-large text @click="scroll_to('trainings')" :class="$vuetify.breakpoint.xl?'text-h6':$vuetify.breakpoint.lg?'text-h7':'text-h8'">Treinamentos</v-btn>
                <v-btn x-large text @click="scroll_to('faq')" :class="$vuetify.breakpoint.xl?'text-h6':$vuetify.breakpoint.lg?'text-h7':'text-h8'">FAQ</v-btn>
                <v-btn x-large text @click="scroll_to('contact')" :class="$vuetify.breakpoint.xl?'text-h6':$vuetify.breakpoint.lg?'text-h7':'text-h8'">Contato</v-btn>
            </v-toolbar-items>

            <v-spacer></v-spacer>

            <v-btn rounded color="amarelo_claro primary--text" @click="go_to_legalproxy" :class="$vuetify.breakpoint.xl?'text-h6':$vuetify.breakpoint.lg?'text-h7':'text-h8'">Entrar</v-btn>
        </v-app-bar>
    </v-card>
</template>

<script>
export default {
    data: () => ({
        going: false
    }),
    methods: {
        go_to_legalproxy(){
            window.open('https://app.legalproxy.com.br/')
        },
        scroll_to(to) {
            if(!this.going){
                to = document.getElementById(to).offsetTop

                if (window.scrollY == to) return;
                
                const scrollStep = Math.PI / (500 / 10);
                var count = 0, currPos;
                
                this.going = true

                var scrollInterval = setInterval(function(){
                    let diff = to - window.scrollY
                    
                    if (Math.abs(diff) > 0.7) {
                        count = count + 1;
                        
                        window.scrollTo(0, window.scrollY + diff * (0.5 - 0.5 * Math.cos(count * scrollStep)));
                    }
                    else { 
                        clearInterval(scrollInterval); 

                        this.going = false
                    }
                }.bind(this),10);
            }
        }
    }
}
</script>