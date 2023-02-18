function introduction(name) {
    return `Hi, my name is ${name}.`;
  }
console.log(introduction("Aki"));
  
function introductionWithLanguage(name, language) {
    return `Hi, my name is ${name} and I am learning to program in ${language}.`;
  }
console.log(introductionWithLanguage("Sam", "Ember"));




  function introductionWithLanguageOptional(name, language = "JavaScript") {
  
    return `Hi, my name is ${name} and I am learning to program in ${language}.`;
  }
  // introductionWithLanguageOptional("Gracie", lang)
//   function introductionWithLanguageOptional(Grace, Language = "JavaScript") {
//   Language = typeof Language !== "undefined" ? Language : "JavaScript";
//   return `Hi, my name is ${Gracie} and I am learning to program in ${Language}.`;
// }

 console.log(introductionWithLanguageOptional("Tim"));


  // function introductionWithLanguageOptional(Gracie, Python) {
  //   return `Hi, my name is ${Gracie} and I am learning to program in ${Python}.`;
  // }
   