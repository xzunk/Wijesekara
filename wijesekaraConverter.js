// Complete mapping for English to Sinhala Wijesekara Layout
const wijesekaraMapping = {
    'q': 'ු', 'Q': 'ූ', 'w': 'අ', 'W': 'උ',
    'e': 'ැ', 'E': 'ෑ', 'r': 'ර', 'R': 'ඍ', 
    't': 'එ', 'T': 'ඔ', 'y': 'හ', 'Y': 'ශ',
    'u': 'ම', 'U': 'ඹ', 'i': 'ස', 'I': 'ෂ',
    'o': 'ද', 'O': 'ධ', 'p': 'ච', 'P': 'ඡ',
    '[': 'ඤ', '{': 'ඥ', ']': ';', '}': ':',
    'a': '්', 'A': 'ෟ', 's': 'ි',
    'S': 'ී', 'd': 'ා', 'D': 'ෘ','f': 'ෙ','F': 'ෆ',
    'g': 'ට', 'G': 'ඨ', 'h': 'ය','H': '්‍ය','j': 'ව',
    'J': 'ළු', 'k': 'න', 'K': 'ණ','l': 'ක','L': 'ඛ', 
    ';': 'ත', ':': 'ථ', 'z': '','L': 'ඛ',
    'x': 'ං', 'c': 'ජ', 'C': 'ඣ','v': 'ඩ',
    'V': 'ඪ', 'b': 'ඊ', 'n': 'බ','N': 'භ',
    'm': 'ප', 'M': 'ඵ', ',': 'ල','<': 'ළ',
    '.': 'ග', '>': 'ඝ', '`': '්‍ර','~': 'ර්‍',                
};

// Function to convert input text
function convertToSinhala(inputText) {
    let sinhalaText = '';
    for (let char of inputText) {
        sinhalaText += wijesekaraMapping[char] || char;  // Fallback to the same character if not mapped
    }
    return sinhalaText;
}

// Event listener for input
document.getElementById('inputText').addEventListener('input', function() {
    const inputText = this.value;
    const outputText = convertToSinhala(inputText);
    document.getElementById('outputText').value = outputText;
});
