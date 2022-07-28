const Batata = {
    value: 2
}

const Salada = {
    value:3
}


function mapThis(array, useThis) {
    return array.map(
        
        function(item){
        return item * this.value;

    }, useThis );
};


const number = [1, 2]

console.log( 'this -> Batata',mapThis( number, Batata))

console.log( 'this -> Salada',mapThis( number, Salada))