const buttons = document.querySelectorAll(".btn");
const description = document.querySelector(".description");
const articles =  document.querySelectorAll('.content');

description.addEventListener("click", (event) =>{
    const eventId = event.target.dataset.id;
    if (eventId){
        // remove active class from buttons
        buttons.forEach((btn) => {
            btn.classList.remove("active");
            event.target.classList.add("active");
        });
        // hide other articles
        articles.forEach((article) => {
            article.classList.remove("active");
        })
        const element = document.getElementById(eventId);
        element.classList.add("active");
    }
})