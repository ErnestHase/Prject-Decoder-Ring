// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  function polybius(input, encode = true) {
    const split = input.toLowerCase().split("");

    const encoder = [
      ["a", "b", "c", "d", "e"],
      ["f", "g", "h", "(i/j)", "k"],
      ["l", "m", "n", "o", "p"],
      ["q", "r", "s", "t", "u"],
      ["v", "w", "x", "y", "z"],
    ];

    if (encode) {
      const secret = split.map((letter) => {
        const ascii = letter.charCodeAt(0);
        if ((ascii < 97 || ascii > 122) && ascii != 32) return;
        for (let i = 0; i < encoder.length; i++) {
          for (let j = 0; j < encoder[i].length; j++) {
            if (encoder[i][j] === letter) return `${j + 1}${i + 1}`;
            if (letter === "i" || letter === "j") return "42";
            if (letter === " ") return " ";
          }
        }
      });
      return secret.join("");
    }

    let secret = "";
    for (let i = 0; i < split.length; i += 2) {
      if (split[i] === " ") {
        secret += " ";
        i--;
        continue;
      }
      if (!split[i + 1]) return false; 
      secret += encoder[split[i + 1] - 1][split[i] - 1];
    }
    return secret;
  }

  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };
