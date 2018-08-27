// Program to create a class called dictionary which contains word and its meaning
class Dictionary{
    constructor(data){
        //Array to hold list of words
        this.dict = [];
        if (data){
            this.dict.push({word:data.word,meaning:data.meaning});
        }
    }
    //Function for new word addition
    newEntry(data){
        this.dict.push({word:data.word,meaning:data.meaning});
    }
    //Returns all words
    showAll(){
        if (this.dict.length === 0){
            return `Empty Dictionary`;
        }else{
            return this.dict;
        }
    }
    //Function to search for the given word and returns the meaning else Can't find string
    look(findWord){
        let hitWord = this.dict.find(d=>d.word ===findWord);
        if (!hitWord){
            return `Can't find entry for ${findWord}`;
        }else{
            return `${hitWord.meaning}`;
        }
    }
 }
 //Object creation for the dictionary
let d = new Dictionary({word:"Punctual",meaning:'On time'});

//Add fews words to the dictionary
d.newEntry({word:'Flexible',meaning:'Smooth'});
d.newEntry({word:'Compel',meaning:'Force'});
d.newEntry({word:'Rendezvous',meaning:'Meeting place'});
console.log(d.showAll());

//Look up for a word in the dictionary and one which is not added
console.log(d.look('Compel'));
console.log(d.look('Excellent'));

