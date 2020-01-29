let type = prompt('Digite o número para 1 - Criptografar ou 2 - Descriptografar?');
let key = prompt('Digite a chave (de 1 a 26):');
let phrase = prompt('Digite a frase/palavra:');

//verificando se a chave está entre 1 e 26
if (key > 0 && key < 27){
    //verificando o tipo de operação
    switch (type) {
        //processo de criptografia
        case '1': 
            document.write('A opção digitada foi: <b>', type, ' - Criptografia </b><br>');
            document.write('A chave digitada foi: <b>', key, '</b><br>');
            document.write('A frase digitada foi: <b>', phrase, '</b><br>');
            document.write('Frase Criptografada: ');

            //quebrando a frase
            const brokenPhraseEncrypt = phrase.split("");

            for (let i = 0; i < brokenPhraseEncrypt.length; i++) {
                //tornando a frase maiuscula e pegando seu ascii decimal
                phraseCode = brokenPhraseEncrypt[i].toLowerCase().charCodeAt(0);

                //criptografando de acordo com a chave
                cryptography = parseInt(phraseCode) + parseInt(key);                

                //verificando se estoura os 26 caracteres, de acordo com a ascii
                if(cryptography >= 97 && cryptography <= 122) {
                    let phraseConvert = String.fromCharCode(cryptography);//convertendo em caracter novamente
                    document.write('<b>',phraseConvert.toUpperCase(),'</b>');
                    
                }else{
                    cryptography = parseInt(phraseCode) + parseInt(key) - 26;
                    let phraseConvert = String.fromCharCode(cryptography);
                    document.write('<b>',phraseConvert.toUpperCase(),'</b>');
                }
            }
            break;

        case '2': //processo de descriptografia
            document.write('A opção digitada foi: <b>', type, ' - Descriptografar </b><br>');
            document.write('A chave digitada foi: <b>', key, '</b><br>');
            document.write('A frase digitada foi: <b>', phrase, '</b><br>');
            document.write('Frase Descriptografada: ');

            //quebrando a frase
            const brokenPhraseDescrypt = phrase.split("");

            for (let i = 0; i < brokenPhraseDescrypt.length; i++) {
                //tornando a frase maiuscula e pegando seu ascii decimal
                phraseCode = brokenPhraseDescrypt[i].toLowerCase().charCodeAt(0);

                //descriptografando de acordo com a chave
                descrypt = parseInt(phraseCode) - parseInt(key);                

                //verificando se estoura os 26 caracteres, de acordo com a ascii
                if(descrypt >= 97 && descrypt <= 122) {
                    let phraseConvert = String.fromCharCode(descrypt);//convertendo em caracter novamente
                    document.write('<b>',phraseConvert.toUpperCase(),'</b>');
                    
                }else{
                    descrypt = parseInt(phraseCode) - parseInt(key) + 26;
                    let phraseConvert = String.fromCharCode(descrypt);
                    document.write('<b>',phraseConvert.toUpperCase(),'</b>');
                }
            }
            break;

        default:
            alert('Opção Inválida');
            window.location.reload()
            break;
    }
}else {
    alert('Chave Negada');
    window.location.reload()
}