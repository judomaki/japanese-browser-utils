// ==UserScript==
// @name         Wiktionary Japanese Shortcut
// @namespace    https://github.com/cleberz
// @version      0.1
// @description  Moves anchor directly to Japanese portion of Wiktionary (if there is one).
// @author       Cleber Zarate (cleber.zarate at gmail.com)
// @match        https://en.wiktionary.org/wiki/*
// @grant        none
// ==/UserScript==

   if(!window.location.href.endsWith("#Japanese") && document.getElementById("Japanese") != null)
   {
       location.href = "#Japanese";
       history.replaceState(null,null,location.href);
   }
