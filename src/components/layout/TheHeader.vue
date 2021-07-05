<template>
    <header>
       <h1><span><router-link to='/'>NT Manuscripts</router-link></span></h1>
        <section>
            <label for="toggle-1" class="toggle-menu"><ul><li></li> <li></li> <li></li></ul></label>
            <input type="checkbox" id="toggle-1">
            <nav>
                <ul>
                    <li class="icon-home">
                      <router-link to='/'>Home</router-link>
                    </li>
                    <li class="icon-user">
                      <router-link to='/texts'>Texts</router-link>
                    </li>
                    <li class="icon-thumbs-up-alt">
                      <router-link to='/references'>References</router-link>
                    </li>
                </ul>
            </nav>
        </section>
    </header>
</template>

<style scoped>
*{
    text-decoration:none;
    list-style:none;
    margin:0px;
    padding:0px;
    outline:none;
}
body{
    margin:0px;
    padding:0px;
    font-family: 'Open Sans', sans-serif;
}
section{
    width:100%;
    max-width:1200px;
    margin:0px auto;
    display:table;
    position:relative;
}
h1{
    margin:0px auto;
    display:table;
    font-size:26px;
    padding:40px 0px;
    color:#daf0ee;
    text-align:center;
}
h1 a {
  color: #daf0ee;
  margin: 0;
}
h1 a:hover,
h1 a:active,
h1 a.router-link-active {
  border-color: transparent;
}
h1 span{
    font-weight:500;
}
header{
    width:100%;
    height: 5rem;
    display:flex;
    background-color:#9055a2;
    justify-content: center;
    align-items: center;
    margin-bottom:50px;
}
header a {
  text-decoration: none;
  color: #daf0ee;
  display: inline-block;
  padding: 0.75rem 1.5rem;
  border: 1px solid transparent;
}

header nav {
  width: 90%;
  margin: auto;
  display: flex;
  justify-content: flex-end;
  align-items: right;
}
header ul {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: right;
  align-items: right;
}
a:active,
a:hover,
a.router-link-active {
  border: 1px solid #9DB5B2;
}
#logo{
    float:left;
    font-size:24px;
    text-transform:uppercase;
    color:#3b413c;
    font-weight:600;
    padding:20px 0px;
}
nav{
    width:auto;
}
nav ul{
    display:table;
}
nav ul li{
    float:right;
}
nav ul li:last-child{
    padding-right:0px;
}
nav ul li a{
    color:#daf0ee;
    font-size:18px;
    padding: 25px 20px;
    display:inline-block;
    transition: all 0.5s ease 0s;
}
nav ul li a:active,
nav ul li a:hover,
nav ul li a:router-link-active{
    background-color:#3b413c;
    color:#9055a2;
    transition: all 0.5s ease 0s;
    border: 1px solid #9DB5B2
}
nav ul li a:active i,
nav ul li a:hover i,
nav ul li a:router-link-active i{
    color:#9055a2;
    transition: all 0.5s ease 0s;
    border: 1px solid #9DB5B2
}
nav ul li a i{
    padding-right:10px;
    color:#3b413c;
    transition: all 0.5s ease 0s;
}
.toggle-menu ul{
    display:table;
    width:25px;
}
.toggle-menu ul li{
    width:100%;
    height:3px;
    background-color:#3b413c;
    margin-bottom:4px;
}
.toggle-menu ul li:last-child{
    margin-bottom:0px;
}

input[type=checkbox], label{display:none;}

.content{
    display:table;
    margin-bottom:60px;
    width:900px;
}
.content h2{
    font-size:18px;
    font-weight:500;
    color:#3b413c;
    border-bottom:1px solid #9055a2;
    display:table;
    padding-bottom:10px;
    margin-bottom:10px;
}
.content p{
    font-size:14px;
    line-height:22px;
    color:#daf0ee;
    text-align:justify;
}

footer{
    display:table; padding-bottom:30px; width:100%;
}
.social{
    margin:0px auto; display:table; display:table;
}
.social li{
    float:left; padding:0px 10px;
}
.social li a{
    color:#3b413c;
    transition: all 0.5s ease 0s;
}
.social li a:hover{
    color:#9055a2;
    transition: all 0.5s ease 0s;
}

@media only screen and (max-width: 1440px) {
    section{
        max-width:95%;
    }
}

@media only screen and (max-width: 980px) {
    header{padding:20px 0px;}
    #logo{padding:0px;}
    input[type=checkbox] {position: absolute; top: -9999px; left: -9999px; background:none;}
    input[type=checkbox]:fous{background:none;}
    label {float:right; padding:8px 0px; display:inline-block; cursor:pointer; }
    input[type=checkbox]:checked ~ nav {display:block;}
    nav{
        display:none;
        position:absolute;
        right:0px; top:53px;
        background-color:#3b413c
  ;
        padding:0px;
        z-index:99;
    }
    nav ul{width:auto;}
    nav ul li{float:none; padding:0px; width:100%; display:table;}
    nav ul li a{
        color:#FFF;
        font-size:15px;
        padding:10px 20px;
        display:block;
        border-bottom: 1px solid rgba(225,225,225,0.1);
    }
    nav ul li a i{color:#9055a2; padding-right:13px;}
}

@media only screen and (max-width: 980px) {
    .content{width:90%;}
}

@media only screen and (max-width: 568px) {
    h1{padding:25px 0px;}
    h1 span{display:block;}
}

@media only screen and (max-width: 480px) {
    section {max-width: 90%;}
}

@media only screen and (max-width: 360px) {
    h1{font-size:20px;}
    label{padding:5px 0px;}
    #logo{font-size: 20px;}
    nav{top:47px;}
}

@media only screen and (max-width: 320px) {
    h1 {padding: 20px 0px;}
}

</style>
