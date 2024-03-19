function generateHashtag (str) {
    if(str.trim().length === 0)
        return false;
    
    let re_str = `#`
    str.trim().split(" ").forEach(element => {
        if(element.trim().length > 0) {
            re_str += element[0].toUpperCase();
            if(element.trim().length > 1)
                re_str += element.slice(1);
    }});
    if(re_str.trim().length > 140)
        return false;
    return re_str.trim()
}


console.log(generateHashtag(""));
console.log(generateHashtag(" ".repeat(200)));
console.log(generateHashtag("Do We have A Hashtag"));
console.log(generateHashtag("Codewars"));
console.log(generateHashtag("Codewars Is Nice"));
console.log(generateHashtag("Codewars is nice"));
console.log(generateHashtag("code" + " ".repeat(140) + "wars"));
console.log(generateHashtag("Looooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooong Cat"));
console.log(generateHashtag("a".repeat(139)));
console.log(generateHashtag("a".repeat(140)));
