let sentence = prompt("So'z kriting:");

if (sentence && sentence.includes(" ")) {
    let firstSpacePos = sentence.indexOf(" ");
    let firstWord = sentence.substring(0, firstSpacePos);
    
    alert(`Birinchi bo'shliqning joylashuvi: ${firstSpacePos}`);
    alert(`Birinchi so'zning boshlanishi: "${firstWord}"`);
    let rep = sentence.replace(" ", firstWord);
    alert(sentence + " => " + rep);
} else if (sentence) {
    alert(`Bu yerda bo'shliqdan foydalanishmagan: "${sentence}"`);
} else {
    alert("To'g'ri qiymat kiriting.");
}