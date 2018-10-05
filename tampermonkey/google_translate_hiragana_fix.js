// ==UserScript==
// @name         Google Translate hiragana phonetics fix
// @namespace    https://github.com/cleberz
// @version      0.1
// @description  Converts the phonetic representation of the text from romaji to hiragana.
// @author       Cleber Zarate (cleber.zarate at gmail.com)
// @match        https://www.google.com/search?q=japanese+translator*
// @grant        none
// ==/UserScript==

(function() {
  'use strict';
   var previousRomaji = document.querySelector('pre[id="tw-source-rmn"]').firstChild.innerText;
   var romajiListener = function(){
       var romajiSpan = document.querySelector('pre[id="tw-source-rmn"]').firstChild
       var romaji = romajiSpan.innerText;

       //don't do anything if text is same as previous
       if(previousRomaji != romaji) {
          romajiSpan.innerText = "";

          //If memory String consumption ever becomes a concern in modern browsers I might
          // do something a bit more efficient
          romajiSpan.innerText = romaji.toLowerCase()
          //start with the longest sillables
              .replace(/kyā/,"きゃあ").replace(/kyū/,"きゅう").replace(/kyō/,"きょう")
              .replace(/shā/,"しゃあ").replace(/shū/,"しゅう").replace(/shō/,"しょう")
              .replace(/chā/,"ちゃあ").replace(/chū/,"ちゅう").replace(/chō/,"ちょう")
              .replace(/nyā/,"にゃあ").replace(/nyū/,"にゅう").replace(/nyō/,"にょう")
              .replace(/hyā/,"ひゃあ").replace(/hyū/,"ひゅう").replace(/hyō/,"ひょう")
              .replace(/myā/,"みゃあ").replace(/myū/,"みゅう").replace(/myō/,"みょう")
              .replace(/ryā/,"りゃあ").replace(/ryū/,"りゅう").replace(/ryō/,"りょう")
              .replace(/gyā/,"ぎゃあ").replace(/gyū/,"ぎゅう").replace(/gyō/,"ぎょう")
              .replace(/jā/,"じゃあ").replace(/jū/,"じゅう").replace(/jō/,"じょう")
              .replace(/byā/,"びゃあ").replace(/byū/,"びゅう").replace(/byō/,"びょう")
              .replace(/pyā/,"ぴゃあ").replace(/pyū/,"ぴゅう").replace(/pyō/,"ぴょう")

          //triple-letter sillables.
              .replace(/kya/,"きゃ").replace(/kyu/,"きゅ").replace(/kyo/,"きょ")
              .replace(/sha/,"しゃ").replace(/shu/,"しゅ").replace(/sho/,"しょ")
              .replace(/cha/,"ちゃ").replace(/chu/,"ちゅ").replace(/cho/,"ちょ")
              .replace(/nya/,"にゃ").replace(/nyu/,"にゅ").replace(/nyo/,"にょ")
              .replace(/hya/,"ひゃ").replace(/hyu/,"ひゅ").replace(/hyo/,"ひょ")
              .replace(/mya/,"みゃ").replace(/myu/,"みゅ").replace(/myo/,"みょ")
              .replace(/rya/,"りゃ").replace(/ryu/,"りゅ").replace(/ryo/,"りょ")
              .replace(/gya/,"ぎゃ").replace(/gyu/,"ぎゅ").replace(/gyo/,"ぎょ")
              .replace(/ja/,"じゃ").replace(/ju/,"じゅ").replace(/jo/,"じょ")
              .replace(/bya/,"びゃ").replace(/byu/,"びゅ").replace(/byo/,"びょ")
              .replace(/pya/,"ぴゃ").replace(/pyu/,"ぴゅ").replace(/pyo/,"ぴょ")

          //double-letter sillables

              .replace(/kā/,"かあ").replace(/kī/,"きい").replace(/kū/,"くう").replace(/kē/,"けい").replace(/kō/,"こう")
              .replace(/gā/,"があ").replace(/gī/,"ぎい").replace(/gū/,"ぐう").replace(/gē/,"げい").replace(/gō/,"ごう")
              .replace(/sā/,"さあ").replace(/shī/,"しい").replace(/sū/,"すう").replace(/sē/,"せい").replace(/sō/,"そう")
              .replace(/zā/,"ざあ").replace(/zī/,"じい").replace(/zū/,"ずう").replace(/zē/,"ぜい").replace(/zō/,"ぞう")
              .replace(/tā/,"たあ").replace(/chī/,"ちい").replace(/tsū/,"つう").replace(/tē/,"てい").replace(/tō/,"とう")
              .replace(/dā/,"だあ").replace(/dī/,"ぢい").replace(/dū/,"づう").replace(/dē/,"でい").replace(/dō/,"どう")
              .replace(/nā/,"なあ").replace(/nī/,"にい").replace(/nū/,"ぬう").replace(/nē/,"ねい").replace(/nō/,"のう")
              .replace(/hā/,"はあ").replace(/hī/,"ひい").replace(/(h|f)ū/,"ふう").replace(/hē/,"へい").replace(/hō/,"ほう")
              .replace(/bā/,"ばあ").replace(/bī/,"びい").replace(/bū/,"ぶう").replace(/bē/,"べい").replace(/bō/,"ぼう")
              .replace(/pā/,"ぱあ").replace(/pī/,"ぴい").replace(/pū/,"ぷう").replace(/pē/,"ぺい").replace(/pō/,"ぽう")
              .replace(/mā/,"まあ").replace(/mī/,"みい").replace(/mū/,"むう").replace(/mē/,"めい").replace(/mō/,"もう")
              .replace(/yā/,"やあ")                    .replace(/yū/,"ゆう")                    .replace(/yō/,"よう")
              .replace(/wā/,"わあ")                    .replace(/wō/,"をう")

              .replace(/ka/,"か").replace(/ki/,"き").replace(/ku/,"く").replace(/ke/,"け").replace(/ko/,"こ")
              .replace(/ga/,"が").replace(/gi/,"ぎ").replace(/gu/,"ぐ").replace(/ge/,"げ").replace(/go/,"ご")
              .replace(/sa/,"さ").replace(/shi/,"し").replace(/su/,"す").replace(/se/,"せ").replace(/so/,"そ")
              .replace(/za/,"ざ").replace(/zi/,"じ").replace(/zu/,"ず").replace(/ze/,"ぜ").replace(/zo/,"ぞ")
              .replace(/ta/,"た").replace(/chi/,"ち").replace(/tsu/,"つ").replace(/te/,"て").replace(/to/,"と")
              .replace(/da/,"だ").replace(/di/,"ぢ").replace(/du/,"づ").replace(/de/,"で").replace(/do/,"ど")
              .replace(/na/,"な").replace(/ni/,"に").replace(/nu/,"ぬ").replace(/ne/,"ね").replace(/no/,"の")
              .replace(/ha/,"は").replace(/hi/,"ひ").replace(/(h|f)u/,"ふ").replace(/he/,"へ").replace(/ho/,"ほ")
              .replace(/ba/,"ば").replace(/bi/,"び").replace(/bu/,"ぶ").replace(/be/,"べ").replace(/bo/,"ぼ")
              .replace(/pa/,"ぱ").replace(/pi/,"ぴ").replace(/pu/,"ぷ").replace(/pe/,"ぺ").replace(/po/,"ぽ")
              .replace(/ma/,"ま").replace(/mi/,"み").replace(/mu/,"む").replace(/me/,"め").replace(/mo/,"も")
              .replace(/ya/,"や")                  .replace(/yi/,"ゆ")                   .replace(/yu/,"よ")
              .replace(/wa/,"わ")                                                        .replace(/wi/,"を")

              .replace(/ā/,"ああ")                .replace(/ō/,"おお")                .replace(/ū/,"うう")

              .replace(/a/,"あ").replace(/i/,"い").replace(/u/,"う").replace(/e/,"え").replace(/o/,"お")
              .replace(/n/,"ん");
          previousRomaji = romajiSpan.innerText
       }
    }
    var observer = new MutationObserver(romajiListener);
    observer.observe(document.querySelector('pre[id="tw-source-rmn"]'), {attributes: true});
})();