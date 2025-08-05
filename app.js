let url = window.location.href;
// console.log(url)

let url_segment = url.split("?");
// console.log(url_segment[1])//Jawan

let play_btn = document.getElementById("play");
let video = document.getElementById("video");

play_btn.addEventListener("click",()=>{
    if (video.paused) {
        video.play();
        video.style.display="unset";
        play_btn.classList.remove("bi-play-fill")
        play_btn.classList.add("bi-pause")
        
    } else {
        video.pause();
         video.style.display="none";
        play_btn.classList.add("bi-play-fill")
        play_btn.classList.remove("bi-pause")
    }
})

video.addEventListener("ended",()=>{
    video.play();
})

let date= new Date();
let main_date=date.getDate();
// console.log(main_date);

Array.from(document.getElementsByClassName("date_point")).forEach((el)=>{

    if (el.innerText == main_date) {

        el.classList.add('h6_active');    
    }
})
let pvr = [
    {
        pvr: 'PVR Vegus',
        movie: 'Jawan',
        loc: 'Dwarka Sector 14 , New Delhi',
        audi: 1,
        type: '4DX',
        series: [ 'J', 'H', 'F', 'E', 'D', 'C', 'B', 'A' ],
        row_section: 3,
        seat: 24,
        j: [ 2, 6, 24, 23, 7, 16, 17, 18, 19, 13, 12 ],
        h: [ 1, 2, 78, 20, 23, 8, 11, 18, 19, 13, 12 ],
        f: [ 5, 6, 15, 17, 18 ],
        e: [ 2, 7, 8, 17, 18 ],
        d: [ 5, 16, 15, 23, 22 ],
        c: [ 1, 2, 11, 12, 19 ],
        b: [ 8, 5 ],
        a: [],
        price: [ 800, 800, 560, 560, 560, 560, 430, 430 ],
        date: 5,
    
    },
   
    {
        pvr: 'PVR Vegus',
        movie: 'Jawan',
        loc: 'Dwarka Sector 14 , New Delhi',
        audi: 2,
        type: '4DX',
        series: [ 'J', 'H', 'F', 'E', 'D', 'C', 'B', 'A' ],
        row_section: 3,
        seat: 24,
        j: [ 2, 6, 24, 23, 7, 16, 17, 18, 19, 13, 12 ],
        h: [ 1, 2, 78, 20, 23, 8, 11, 18, 19, 13, 12 ],
        f: [ 5, 6, 15, 17, 18 ],
        e: [ 2, 7, 8, 17, 18 ],
        d: [ 5, 16, 15, 23, 22 ],
        c: [ 1, 2, 11, 12, 19 ],
        b: [ 8, 5 ],
        a: [18,10],
        price: [ 800, 800, 560, 560, 560, 560, 430, 430 ],
        date: 6,
    
    }
    
]


//filter



let addSeats = (arr)=>{
   arr.forEach((el,i)=>{
    const {series,row_section,seat} =el;
   })
}
let data = pvr.filter(obj=> obj.date === main_date && obj.movie === url_segment[1]);
// console.log(data)
addSeats(data)