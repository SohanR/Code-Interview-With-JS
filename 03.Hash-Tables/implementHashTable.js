class HashTable {
    constructor(size){
        this.data = new Array(size);
    }


    _hash(key){
        let hash = 0; 
        for(let i = 0; i < key.length; i++){
            hash  = (hash + key.charCodeAt(i) *  i) % this.data.length;
        }
        return hash;
    }


    set(key, value){
        let address = this._hash(key);

        if(!this.data[address]){
           this.data[address] = [] 
        }


        this.data[address].push(key,value)

        return this.data;
    }

    get(key){
        let address = this._hash(key);

        const currentBucket = this.data[address];

        console.log("current bucket is " + currentBucket);

        if(currentBucket){
            for(let i = 0; i < currentBucket.length; i++){
                if(currentBucket[i][0] === key){
                    return currentBucket[i][1];
                }
            }
        }

        return undefined;
    }
}

const myHashTable = new HashTable(50);
myHashTable._hash('apples')
console.log(myHashTable.set('apple',54))
console.log(myHashTable.set('pepe',50))
console.log(myHashTable.get('pepe'))
