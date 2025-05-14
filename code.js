const mapLinks = {
    1: "https://nshn.ir/sYIs4CPVkLob",
    2: "https://nshn.ir/7YIsgqIVH5tA",
    3: "https://nshn.ir/7YIsgqIVH5tA",
    4: "https://nshn.ir/7YIsgqIVH5tA",
    5: "https://nshn.ir/7YIBfc2JUttf",
    6: "https://nshn.ir/sYKY7kIJwpqE",
    7: "https://nshn.ir/7YmjckGJDYQL",
    8: "https://map.ir/location8",
    9: "https://map.ir/location9",
    10: "https://nshn.ir/7YIsgqIVH5tA",
    11: "https://nshn.ir/7YIsgqIVH5tA",
};

function openMap(index) {
    const link = mapLinks[index];
    if (link) {
        window.open(link, '_blank');
    } else {
        alert("آدرس برای این جلسه ثبت نشده است.");
    }
} 


const messages = [
    "انجمن معتادان گمنام ایران",
    "شورای منطقه ایران",
    "ناحیه 27 هیئت 6",
    "تنها لازمه عضویت تمایل به قطع مصرف است",
    "پیام ما امید, وعده ما آزادی",
    "شماره ثبت 21065"
];

let messageIndex = 0;
let charIndex = 0;
let typing = true;
const typeElement = document.createElement("div");
typeElement.className = "typewriter";
document.body.prepend(typeElement);

function typeWriter() {
    if (typing) {
        if (charIndex < messages[messageIndex].length) {
            typeElement.textContent += messages[messageIndex].charAt(charIndex);
            charIndex++;
            setTimeout(typeWriter, 100);
        } else {
            typing = false;
            setTimeout(typeWriter, 2000);
        }
    } else {
        if (charIndex > 0) {
            typeElement.textContent = typeElement.textContent.slice(0, -1);
            charIndex--;
            setTimeout(typeWriter, 50);
        } else {
            typing = true;
            messageIndex = (messageIndex + 1) % messages.length;
            setTimeout(typeWriter, 1000);
        }
    }
}

typeWriter();
