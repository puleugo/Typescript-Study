type Words = {
  [key: string]: string;
};

let dict: Words = {
  potato: 'food',
};

class Dict {
  private words: Words;
  constructor() {
    this.words = {};
  }
  add(word: Word) {
    if (this.words[word.term] === undefined) {
      this.words[word.term] = word.def;
    }
  }
  def(term: string) {
    if (this.words[term] !== undefined) {
      console.log(this.words[term]);
    } else {
      console.log('None');
    }
  }
  del(term: string) {
    if (this.words[term] !== undefined) {
      delete this.words[term];
    }
  }
  edit(term: string, newDef: string) {
    this.words[term] = newDef;
  }
}

class Word {
  constructor(public term: string, public def: string) {}
}

const kimchi = new Word('kimchi', '한국의 음식');

const testDict = new Dict();
testDict.add(kimchi);
testDict.def('kimchi');
testDict.edit('kimchi', 'Korean Food');
testDict.def('kimchi');
testDict.del('kimchi');
testDict.def('kimchi');
