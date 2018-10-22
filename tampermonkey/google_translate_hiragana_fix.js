// ==UserScript==
// @name         Google Translate hiragana phonetics fix
// @namespace    https://github.com/judomaki
// @version      0.1
// @description  Converts the phonetic representation of the text from romaji to hiragana.
// @author       Cleber Zarate (cleber.zarate at gmail.com)
// @match        http*://www.google.com/search?q=japanese+translator*
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
          //double-letters become small tsu
              .replace(/([bcdfghjkmnprstyz])\1/g,"っ$1")

          //start with the longest sillables
              .replace(/kyā/g,"きゃあ").replace(/kyū/g,"きゅう").replace(/kyō/g,"きょう")
              .replace(/shā/g,"しゃあ").replace(/shū/g,"しゅう").replace(/shō/g,"しょう")
              .replace(/chā/g,"ちゃあ").replace(/chū/g,"ちゅう").replace(/chō/g,"ちょう")
              .replace(/nyā/g,"にゃあ").replace(/nyū/g,"にゅう").replace(/nyō/g,"にょう")
              .replace(/hyā/g,"ひゃあ").replace(/hyū/g,"ひゅう").replace(/hyō/g,"ひょう")
              .replace(/myā/g,"みゃあ").replace(/myū/g,"みゅう").replace(/myō/g,"みょう")
              .replace(/ryā/g,"りゃあ").replace(/ryū/g,"りゅう").replace(/ryō/g,"りょう")
              .replace(/gyā/g,"ぎゃあ").replace(/gyū/g,"ぎゅう").replace(/gyō/g,"ぎょう")
              .replace(/jā/g,"じゃあ").replace(/jū/g,"じゅう").replace(/jō/g,"じょう")
              .replace(/byā/g,"びゃあ").replace(/byū/g,"びゅう").replace(/byō/g,"びょう")
              .replace(/pyā/g,"ぴゃあ").replace(/pyū/g,"ぴゅう").replace(/pyō/g,"ぴょう")

          //triple-letter sillables.
              .replace(/kya/g,"きゃ").replace(/kyu/g,"きゅ").replace(/kyo/g,"きょ")
              .replace(/sha/g,"しゃ").replace(/shu/g,"しゅ").replace(/sho/g,"しょ")
              .replace(/cha/g,"ちゃ").replace(/chu/g,"ちゅ").replace(/cho/g,"ちょ")
              .replace(/nya/g,"にゃ").replace(/nyu/g,"にゅ").replace(/nyo/g,"にょ")
              .replace(/hya/g,"ひゃ").replace(/hyu/g,"ひゅ").replace(/hyo/g,"ひょ")
              .replace(/mya/g,"みゃ").replace(/myu/g,"みゅ").replace(/myo/g,"みょ")
              .replace(/rya/g,"りゃ").replace(/ryu/g,"りゅ").replace(/ryo/g,"りょ")
              .replace(/gya/g,"ぎゃ").replace(/gyu/g,"ぎゅ").replace(/gyo/g,"ぎょ")
              .replace(/ja/g,"じゃ").replace(/ju/g,"じゅ").replace(/jo/g,"じょ")
              .replace(/bya/g,"びゃ").replace(/byu/g,"びゅ").replace(/byo/g,"びょ")
              .replace(/pya/g,"ぴゃ").replace(/pyu/g,"ぴゅ").replace(/pyo/g,"ぴょ")

          //double-letter sillables

              .replace(/kā/g,"かあ").replace(/kī/g,"きい").replace(/kū/g,"くう").replace(/kē/g,"けい").replace(/kō/g,"こう")
              .replace(/gā/g,"があ").replace(/gī/g,"ぎい").replace(/gū/g,"ぐう").replace(/gē/g,"げい").replace(/gō/g,"ごう")
              .replace(/sā/g,"さあ").replace(/shī/g,"しい").replace(/sū/g,"すう").replace(/sē/g,"せい").replace(/sō/g,"そう")
              .replace(/zā/g,"ざあ").replace(/zī/g,"じい").replace(/zū/g,"ずう").replace(/zē/g,"ぜい").replace(/zō/g,"ぞう")
              .replace(/tā/g,"たあ").replace(/chī/g,"ちい").replace(/tsū/g,"つう").replace(/tē/g,"てい").replace(/tō/g,"とう")
              .replace(/dā/g,"だあ").replace(/dī/g,"ぢい").replace(/dū/g,"づう").replace(/dē/g,"でい").replace(/dō/g,"どう")
              .replace(/nā/g,"なあ").replace(/nī/g,"にい").replace(/nū/g,"ぬう").replace(/nē/g,"ねい").replace(/nō/g,"のう")
              .replace(/hā/g,"はあ").replace(/hī/g,"ひい").replace(/(h|f)ū/g,"ふう").replace(/hē/g,"へい").replace(/hō/g,"ほう")
              .replace(/bā/g,"ばあ").replace(/bī/g,"びい").replace(/bū/g,"ぶう").replace(/bē/g,"べい").replace(/bō/g,"ぼう")
              .replace(/pā/g,"ぱあ").replace(/pī/g,"ぴい").replace(/pū/g,"ぷう").replace(/pē/g,"ぺい").replace(/pō/g,"ぽう")
              .replace(/mā/g,"まあ").replace(/mī/g,"みい").replace(/mū/g,"むう").replace(/mē/g,"めい").replace(/mō/g,"もう")
              .replace(/yā/g,"やあ")                    .replace(/yū/g,"ゆう")                    　.replace(/yō/g,"よう")
              .replace(/wā/g,"わあ")                                                            　.replace(/wō/g,"をう")

              .replace(/ka/g,"か").replace(/ki/g,"き").replace(/ku/g,"く").replace(/ke/g,"け").replace(/ko/g,"こ")
              .replace(/ga/g,"が").replace(/gi/g,"ぎ").replace(/gu/g,"ぐ").replace(/ge/g,"げ").replace(/go/g,"ご")
              .replace(/sa/g,"さ").replace(/shi/g,"し").replace(/su/g,"す").replace(/se/g,"せ").replace(/so/g,"そ")
              .replace(/za/g,"ざ").replace(/zi/g,"じ").replace(/zu/g,"ず").replace(/ze/g,"ぜ").replace(/zo/g,"ぞ")
              .replace(/ta/g,"た").replace(/chi/g,"ち").replace(/tsu/g,"つ").replace(/te/g,"て").replace(/to/g,"と")
              .replace(/da/g,"だ").replace(/di/g,"ぢ").replace(/du/g,"づ").replace(/de/g,"で").replace(/do/g,"ど")
              .replace(/na/g,"な").replace(/ni/g,"に").replace(/nu/g,"ぬ").replace(/ne/g,"ね").replace(/no/g,"の")
              .replace(/ha/g,"は").replace(/hi/g,"ひ").replace(/(h|f)u/g,"ふ").replace(/he/g,"へ").replace(/ho/g,"ほ")
              .replace(/ba/g,"ば").replace(/bi/g,"び").replace(/bu/g,"ぶ").replace(/be/g,"べ").replace(/bo/g,"ぼ")
              .replace(/pa/g,"ぱ").replace(/pi/g,"ぴ").replace(/pu/g,"ぷ").replace(/pe/g,"ぺ").replace(/po/g,"ぽ")
              .replace(/ma/g,"ま").replace(/mi/g,"み").replace(/mu/g,"む").replace(/me/g,"め").replace(/mo/g,"も")
              .replace(/ya/g,"や")                  .replace(/yi/g,"ゆ")                   .replace(/yu/g,"よ")
              .replace(/wa/g,"わ")                                                        .replace(/wo/g,"を")

              .replace(/ā/g,"ああ").replace(/ī/g,"いい").replace(/ō/g,"おお")                .replace(/ū/g,"うう")

              .replace(/a/g,"あ").replace(/i/g,"い").replace(/u/g,"う").replace(/e/g,"え").replace(/o/g,"お")
              .replace(/n/g,"ん");
          previousRomaji = romajiSpan.innerText
       }
    }
    var observer = new MutationObserver(romajiListener);
    observer.observe(document.querySelector('pre[id="tw-source-rmn"]'), {attributes: true});
})();