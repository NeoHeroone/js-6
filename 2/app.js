let user = prompt("Enter a word:");

if (user == "") {
    alert("Please enter a word.");
} else {
    let user1 = prompt("Enter So'z siz searching for:");
    if (user1 && user.includes(user1)) {
        alert(`True: So'z "${user1}" topildi.`);
    } else {
        alert(`False: So'z "${user1}" topilmadi.`);
    }
}