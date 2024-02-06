function likes(names) {
    // TODO
    let count = 0;
    let names_len = names.length;
    let final_str = " like this"
    
    if(count++ === names_len)
      return "no one likes this";
    if(count++ === names_len)
      return names[count-2]+" likes this";
    if(count++ === names_len)
      return names[count-3]+" and "+names[count-2]+final_str;
    if(count++ === names_len)
      return names[count-4]+", "+names[count-3]+" and "+names[count-2]+final_str;
    if(count++ === names_len)
      return names[count-5]+", "+names[count-4]+" and "+(names_len-count+3).toString() +" others"+final_str;
  }

console.log(likes([]));
console.log(likes(['Peter']));
console.log(likes(['Jacob', 'Alex']));
console.log(likes(['Max', 'John', 'Mark']));
console.log(likes(['Alex', 'Jacob', 'Mark', 'Max']));