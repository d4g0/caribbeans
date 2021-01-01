export function focusEl(selector) {
    console.log('focusing ' + selector)
    let elem = document.querySelector(selector)
    if (elem) {
        elem.focus()
    }
}

export function scrollFix(hashbang /* valid fragment id */) {
    const nextPoint = document.querySelector(hashbang);
    if (nextPoint) { nextPoint.focus() }

}

export function focusElAsync(selector, delay = 1) {
    let elem = document.querySelector(selector)
    if (elem) {
        const tID = setTimeout(
            () => {
                console.log('focusing ' + selector)
                clearTimeout(tID)
                elem.focus()
            }, delay
        )
    }
}


// export default {
//     focusEl
// }