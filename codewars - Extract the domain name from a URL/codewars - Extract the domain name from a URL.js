function domainName(url){
    const patern = /[.\/w]*([w]|[^.\/]*)\.{1}\S+/;
    const domainName = url.match(patern);
    return(domainName[1].trim());
}


console.log(domainName("http://google.com")); // "google"
console.log(domainName("http://google.co.jp")); // "google"
console.log(domainName("www.xakep.ru")); // "xakep"
console.log(domainName("https://youtube.com")); // "youtube"