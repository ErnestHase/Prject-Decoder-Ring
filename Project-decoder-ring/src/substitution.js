// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function() {
    function mapCharacters(message, languageA, languageB) {
        return message.map((character) => {
            const index = languageA.indexOf(character);
            if (index === -1) return character;
            return languageB[index];
        });
    }

    function substitution(input, alphabet, encode = true) {
        if (!alphabet || alphabet.length != 26) return false;

        const english = "abcdefghijklmnopqrstuvwxyz".split("");
        const alpha = alphabet.toLowerCase().split("");
        const message = input.toLowerCase().split("");

        for (let i = 0; i < alpha.length; i++) {
            for (let j = i + 1; j < alpha.length; j++) {
                if (alpha[i] === alpha[j]) return false;
            }
        }

        if (encode) return mapCharacters(message, english, alpha).join("");
        return mapCharacters(message, alpha, english).join("");
    }

    return {
        substitution,
    };
})();


module.exports = { substitution: substitutionModule.substitution };
