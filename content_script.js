/*
 * Copyright (c) 2018 Robin Mulloy  http://robin.mulloy.ca   All rights reserved.
 * Use of this source code is governed by a BSD-style license that can be found in the LICENSE file.
 */

document.addEventListener("mousedown", function(event){
    var selection = window.getSelection().toString();
    if( selection ) {
        var selLen = selection.match(/\d/g);
        //console.log(selLen);
        if( selLen && (selLen.length >= 6 && selLen.length <= 15))) {  //  numeros de 6 a 15 digitos
            console.log("create_menu for "+selection);
            chrome.runtime.sendMessage({'action':'create_menu','selection':selection}, function(response) {
                 console.log(response);
            });
        } 
        else {
            console.log("delete_menu");
            chrome.runtime.sendMessage({'action':'delete_menu','selection':selection}, function(response) {
                 console.log(response);
            });
        }
    }
}, true);
