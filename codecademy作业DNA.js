// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G']
  return dnaBases[Math.floor(Math.random() * 4)] 
}

// Returns a random single strand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = []
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase())
  }
  return newStrand
  console.log(newStrand)
}

//给object，然后使它变异
const pAequorFactory = (Number, array) => {
  return {
  _specimenNum: Number,
  _dna: array,

  mutate() {
    const selectedBase = returnRandBase();
    //console.log(selectedBase)
    //console.log(this._dna)
    const dnaBases2 = ['A', 'T', 'C', 'G'];
    for (i=0; i<this._dna.length; i++) {
      if (this._dna[i] === selectedBase) {
        randomBases2 = dnaBases2.filter((char) => char !== selectedBase)
        this._dna[i] = randomBases2[Math.floor(Math.random() * 3)] 
      }
    }
    return this._dna;
  },

  compareDNA(anotherDNA) {
    const currentDNA = this._dna;
    console.log(currentDNA);
    let count = 0;
    for (i=0; i<currentDNA.length; i++) {
      if (currentDNA[i] === anotherDNA[i]){
        count++;
        console.log(count);
      } 
    }
    console.log(`specimen #1 and specimen #2 have ${((count / currentDNA.length) * 100).toFixed(2)}% DNA in common`);
    },

  willLikelySurvive() {
    //console.log(this._dna)
    //console.log(this._dna.length)
    let CGCount = 0;
    for (i=0; i < this._dna.length; i++) {
      if (this._dna[i] === 'C' || this._dna[i] === 'G') {
        CGCount++;     
      }
      //console.log(CGCount);
    }
    if ((CGCount / this._dna.length) >= 0.6) {
      return true;
    } else {
      return false;
    }
  },
  }
} 

let Sample = [];
let j = 1;
while (Sample.length < 30) {
  let DNAgenerate =  pAequorFactory(j, mockUpStrand());
  if (DNAgenerate.willLikelySurvive()){
    j++;
    //console.log(j);
    Sample.push(DNAgenerate._specimenNum);
    Sample.push(DNAgenerate._dna)
  }
}

console.log(Sample);
