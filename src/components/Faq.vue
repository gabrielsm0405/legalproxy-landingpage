<template>
    <!--<v-row class="ma-0">
        <v-card color="amarelo_claro" flat tile :min-height="'calc( ('+get_screen_height()+' - 50px)/2 )'" width="100%">
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
        <v-card 
            color="amarelo_claro" 
            flat 
            tile 
            :min-height="'calc( ('+get_screen_height()+' - 50px)/2 )'" 
            width="100%" 
            class="pa-5 d-flex align-content-center flex-wrap"
        >
            <v-card-title :class="($vuetify.breakpoint.xl?'text-h3':$vuetify.breakpoint.lg?'text-h4':'text-h5')">
                Perguntas frequentes
            </v-card-title>

            <v-card-text class="black--text">
                <v-row>
                    <v-col sm="5" cols="12">
                        <FaqList title="Empresa" :questions_list="company_questions" />
                    </v-col>
                    <v-col sm="5" cols="12">
                        <FaqList title="Proxy" :questions_list="proxy_questions" />
                    </v-col>
                </v-row>
            </v-card-text>
        </v-card>
    </v-row>
</template>

<script>
import utils from '../utils/utils'
import FaqList from './FaqList'

export default {
    data: () => ({
        proxy_questions: [
            {
                'content': 'Fui reprovado na prova de preposto. Posso refazer o teste?',
                'answer': 'Sim. O futuro PROXIE poderá refazer a prova de certificação de preposto após 15 dias corridos da última prova.'
            },
            {
                'content': 'Realizei a audiência. Em quanto tempo meu crédito estará disponível?',
                'answer': 'Em até 2 dias úteis após a realização da audiência o crédito estará disposto na “carteira” do PROXIE. O acesso a carteira é possível através do aplicativo ou website LEGAL PROXY.'
            },
            {
                'content': 'Como são distribuídas as audiências para os prepostos?',
                'answer': 'O LEGAL PROXY, por meio de seu sistema, analisa os PROXIES disponíveis, mais bem qualificados e mais próximos geograficamente, para disponibilizar o preposto ideal para o cliente.'
            },
            {
                'content': 'Já concluí meu certificado LEGAL PROXY para preposto, mas ainda não recebi nenhuma audiência. Quando receberei uma solicitação?',
                'answer': 'Este tempo dependerá da quantidade de demandas disponibilizadas por clientes no momento, bem como a quantidade de prepostos cadastrados na plataforma.'
            },
            {
                'content': 'Gostaria de desativar minha conta, sem excluí-la. É possível?',
                'answer': 'Sim. Existem ambas as opções dentro do website ou app LEGAL PROXY, tanto para exclusão, quanto para desativação de conta.'
            },
        ],
        company_questions: [
            {
                'content': 'O preposto selecionado para realizar minha audiência desistiu. O que devo fazer?',
                'answer': 'A plataforma avisará ao CLIENTE sobre a desistência do PROXIE e informará o novo PROXIE mais bem qualificado de acordo com sua geolocalização e avaliações.'
            },
            {
                'content': 'O PROXIE indicado está demorando para aceitar a solicitação. Devo me preocupar?',
                'answer': 'Não. Os PROXIES têm um prazo para aceitar a solicitação de até 24h. Caso não ocorra neste prazo, a plataforma enviará automaticamente um novo convite para outro PROXIE e avisará ao CLIENTE.'
            },
            {
                'content': 'É possível cadastrar uma audiência e solicitar um preposto com crédito insuficiente em conta?',
                'answer': 'Não. Para buscar e selecionar um PROXIE e posterior realização de audiência, é necessário POSSUIR créditos para contratação.'
            },
            {
                'content': 'Preciso trocar o “ponto focal” de uma ou mais empresas cadastradas. É possível?',
                'answer': 'Sim, o administrador da conta de CLIENTE tem total liberdade de incluir ou remover os “pontos focais”'
            },
            {
                'content': 'Tenho muitas demandas para cadastro imediato na plataforma, há alguma maneira de incluí-las de uma única vez?',
                'answer': 'Sim, o LEGAL PROXY disponibiliza para os usuários uma planilha de Excel disponível para download, que deverá ser preenchida conforme os campos já estipulados e, após, realizado o upload em uma das plataformas LEGAL PROXY.'
            },
        ]
    }),
    components: {
        FaqList
    },
    methods: {
        get_screen_height: utils.get_screen_height
    }
}
</script>