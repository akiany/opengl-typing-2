
function Word(word){
    this.word = word;
    this.layer = new PIXI.Container();
    this.layer.x = Math.min(window.innerWidth * Math.random() * .6, window.innerWidth - 600);
    this.layer.y = Math.min(window.innerWidth * Math.random() * .6, window.innerHeight - 200);
    stage.addChild(this.layer);

    chars = [];
    for(i=0;i<word.length;i++){
        chars.push(new Character(word[i], this.layer));
    }

    var text_elements = this.text_elements = _.map(chars, 'char_obj');

    var complete = (function(){
        remove_me_from_active_words(this);
        activate_word();
    }).bind(this);

    TweenMax.staggerFrom(text_elements, .5, {alpha: 0, rotation:.4}, .06);
    TweenMax.to( text_elements, 7, { width: 0, height: 0, x: 0, y: 0, alpha: 0, ease: Expo.easeInOut, delay: 2.5, onComplete: complete});

    this.cursor_pos = 0;
}

Word.prototype.keypress = function(chr){
    if(this.word[this.cursor_pos] == chr){
        this.cursor_pos++;
        if(this.cursor_pos == this.word.length){
            TweenMax.to( this.text_elements, .4, { rotation:4, x: 0, y: 0, alpha: 0});
            remove_me_from_active_words(this);
            if(active_words.length < 4)
                activate_word();
        }
    }
}

function Character(chr, layer){
    var chr_obj = this.char_obj = new PIXI.Text(chr, { font: "30px Droid Sans Mono", fill: "#000000" });
    layer.addChild(chr_obj);
    chr_obj.x = i*20;
}


word_list = ["hello", "world", "this", "is", "great", "foo", "bar", "random"];
word_index = 0;
active_words = [];

function get_word(){
    return word_list[word_index++ % word_list.length];
}

function activate_word(){
    var word_obj = new Word(get_word());
    active_words.push(word_obj);
}

function remove_me_from_active_words(word_obj){
    _.remove(active_words, function(wobj){
        return wobj == word_obj;
    });
}

function setup_game(){
    activate_word();
    setTimeout(activate_word, 600);
    setTimeout(activate_word, 2600);
    setTimeout(activate_word, 4200);
}


$(function(){
    $("body").keypress(function(event){
        var chr = String.fromCharCode(event.charCode);
        for(var i=0;i<active_words.length;i++)
            active_words[i].keypress(chr);
    });
})