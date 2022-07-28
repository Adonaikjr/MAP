function mapNothis(array) {
    return array.map( 
        function (item){
            return item * 2
    });
}

const number = [2, 4, 6, 8, 10];

console.log(mapNothis(number));