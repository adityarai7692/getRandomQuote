let btn = document.getElementById("btn");
let quoteContent = document.getElementById("quote_content");
let quoteAuthor = document.getElementById("quote_author");

async function fetching() {
    try {
        btn.disabled=true;
        quoteContent.innerText = "Loading...";
        quoteAuthor.innerText = "";
        const response = await fetch("https://api.quotable.io/random")
        if (!response.ok) { throw new Error("Response Not Genrated") }
        
        const data = await response.json();
        quoteContent.innerText = `❝ ${data.content} ❞`;;
        quoteAuthor.innerText = data.author;

    } catch (error) {
        console.log(error);
    } finally{
        btn.disabled=false;
    }
}

btn.addEventListener('click', fetching)
fetching();