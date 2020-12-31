export default function scrollFix(hashbang /* valid fragment id */) {
    const nextPoint = document.querySelector(hashbang);
    nextPoint.focus();
}