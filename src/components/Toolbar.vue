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
                <v-btn text @click="scroll_to('product')">Produto</v-btn>
                <v-btn text @click="scroll_to('who_we_are')">Quem Somos</v-btn>
                <v-btn text @click="scroll_to('trainings')">Treinamentos</v-btn>
                <v-btn text @click="scroll_to('faq')">FAQ</v-btn>
                <v-btn text @click="scroll_to('contact')">Contato</v-btn>
            </v-toolbar-items>

            <v-spacer></v-spacer>

            <v-btn rounded color="amarelo_claro primary--text" @click="go_to_legalproxy">Entrar</v-btn>
        </v-app-bar>
    </v-card>
</template>

<script>
export default {
    methods: {
        go_to_legalproxy(){
            window.open('https://app.legalproxy.com.br/')
        },
        scroll_to(to) {
            to = document.getElementById(to).offsetTop

            if (window.scrollY == to) return;
            
            const scrollStep = Math.PI / (500 / 10);
            var count = 0, currPos;
            
            var scrollInterval = setInterval(function(){
                let diff = to - window.scrollY
                
                if (Math.abs(diff) > 0.7) {
                    count = count + 1;
                    console.log(diff * (0.5 - 0.5 * Math.cos(count * scrollStep)))
                    window.scrollTo(0, window.scrollY + diff * (0.5 - 0.5 * Math.cos(count * scrollStep)));
                }
                else { clearInterval(scrollInterval); }
            },10);
        }
    }
}
</script>