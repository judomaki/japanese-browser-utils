# japanese-browser-utils

Browser and web utilities for Japanese learners. Requires TamperMonkey or GreaseMonkey to be installed in your browser.

## Google Translate Hiragana Fix

Japanese learners should not get used to reading Japanese words in Romaji, but the basic Google Translate displays Romaji instead of Hiragana. 
This script will replace the Romaji version of the translation into Hiragana.

![Romaji Translation Screenshot](/images/before_after.png)

### Usage

Add script 
[google_translate_hiragana_fix.js](http://github.com/cleberz/japanese-browser-utils/tampermonkey/google_translate_hiragana_fix.js)
into TamperMonkey or GreaseMonkey. Don't forget to enable the scripts.

## Wiktionary scrolling to Japanese

Every time I search for a kanji or kanji compound on the English Wiktionary, the entries in the various forms of Chinese come first, then I have to either scroll to or click on the Japanese entries. This simple utility will scroll the browser directly into the Japanese entries anytime Japanese is detected.

![Wiktionary scrolled to Japanese](/images/wiktionary_japanese.png)

### Usage

Add script 
[wiktionary_scroll_to_japanese.js](http://github.com/cleberz/japanese-browser-utils/tampermonkey/wiktionary_scroll_to_japanese.js)
into TamperMonkey or GreaseMonkey. Don't forget to enable the scripts.
