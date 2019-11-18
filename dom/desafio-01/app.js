new Vue({
    el:'#desafio',
    data:{
        nome: 'JonColares',
        idade: 16,
        imagem: 'http://files.cod3r.com.br/curso-vue/vue.jpg'

    },
    methods:{
        idade3(){
            return this.idade * 3;
        },
        aleatorio(){
            return Math.random([0,10]);
        }
    }
})