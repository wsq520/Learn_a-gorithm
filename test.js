var areAlmostEqual = function(s1, s2) {
  if(s1 === s2) return true

  const len = s1.length
  let str1 = ''
  let str2 = ''

  for(let i = 0; i < len; i++) {
     if(s1[i] !== s2[i]) {
         str1 += s1[i]
         str2 += s2[i]
         if(str1.length >2 || str2.length > 2) {
             return false
         }
     }
  }

  if(str1.length !== 2 || str2.length !== 2) return false

  console.log(str1[0], str1);
  [str1[0], str1[1]] = [str1[1], str1[0]]
  console.log(str1[0], str1);
  console.log(str1, str2);
  
  return str1 === str2
};
areAlmostEqual("bank", "kanb")

const arr = [1, 2]
[arr[0], arr[1]] = [arr[1], arr[0]]
console.log(arr);