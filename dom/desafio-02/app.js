new Vue({
    el: '#desafio',
    data: {
        valor: ''
    },
    methods:{
        exibiralert(){
            alert('estou alertando');
        },
        novovalor(event){
            this.valor = event.target.value
        },
        enter(){
            this.valor = event.target.value
        }
    }
})