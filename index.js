// btns

const btn = document.querySelectorAll('.btn')
const submitB = document.querySelector('.submitB')
const submit = document.querySelector('.submit')

const contentStart = document.querySelectorAll('.page1')
const contentEnd = document.querySelectorAll('.page2')
const rating = document.querySelector('.rating')

// rating value
let ratingStar;

// looping through the buttons
btn.forEach(btn=> btn.addEventListener('click',function(){
    // looping through the buttons again to remove the 'pressed' class from the rest and add it to the clicked one
    submitB.style.backgroundColor = 'hsl(25, 97%, 53%)';
    submitB.disabled = false;
    const btns = document.querySelectorAll('.btn')
    btns.forEach(btn => btn.classList.remove('btnPressed'))
    this.classList.toggle('btnPressed')
    ratingStar = this.textContent
    return rating
}))

submitB.addEventListener('click',function(){
        // hide all the parts of the 1st section
        contentStart.forEach(section => section.style.display ="none");
        // show the parts of the 2nd section
        contentEnd.forEach(section => section.classList.remove('page2'))
        rating.textContent = `You have selected ${ratingStar} out of 5`
})