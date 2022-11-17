window.onload = function () {
  let pronoun = ["the", "our"];
  let adj = ["great", "big"];
  let noun = ["jogger", "racoon"];
  let domain = document.getElementById('domain')

  for (let i = 0; i < pronoun.length; i++) {
    for (let j = 0; j < adj.length; j++) {
      for (let k = 0; k < noun.length; k++) {
        let h1 = document.createElement('h1')
        h1.innerHTML=`${pronoun[i]}${adj[j]}${noun[k]}.com`
        domain.appendChild(h1);
      }
    }
  }
}
