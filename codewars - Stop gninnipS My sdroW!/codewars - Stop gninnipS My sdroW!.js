function spinWords(string){
  //TODO Have fun :)
    let arr = string.split(' ');
    let new_arr = [];
    arr.forEach(word => {
        const arr_word = word.split("");
        new_arr.push(" ")
        if(arr_word.length >= 5)
        {
            // for (let i = arr_word.length-1; i>=0; --i)
            //     new_arr.push(arr_word[i]);
            new_arr.push(word.split("").reverse().join(""));
        }
        else{
            new_arr.push(word);
        }
    });
    return (new_arr.join("").trim());
}


console.log(spinWords("Welcome")) // "emocleW"
console.log(spinWords("Hey fellow warriors")) // "Hey wollef sroirraw");
console.log(spinWords("This is a test")) // "This is a test");
console.log(spinWords("This is another test")) // "This is rehtona test");
console.log(spinWords("You are almost to the last test")) // "You are tsomla to the last test");
console.log(spinWords("Just kidding there is still one more")) // "Just gniddik ereht is llits one more");
console.log(spinWords("Seriously this is the last one")) // "ylsuoireS this is the last one");