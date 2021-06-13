import React, { useState } from 'react'

var Emails = ["dim", "yak"];
var Passwords = ["1","2"];
var emailEntered  =false;
var PasswordEntered = false;



export default function IsLoginRight(InputEmail,InputPassword) {
    var HaveAnAccount = false;
    for(var e in Emails){
        if(InputEmail===e){
            emailEntered =true;
        }
    }
    for(var p in Passwords){
        if(InputPassword ===p){
            PasswordEntered = true;
        }
    }
    if(emailEntered===true){
        if (PasswordEntered===true){
            HaveAnAccount = true
        }
        
    }

    return HaveAnAccount

}
