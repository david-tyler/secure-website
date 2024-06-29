
document.getElementById("scroll-to-bottom").addEventListener("click", function () {
    document.getElementById("scroll-About").scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" })
  });

function toggleStyleSheet(){
    // Task 1
    // Steps
    // 1 (a) Get style element by ID (hint: getElementById)
    var style = document.getElementById('mainStyleSheet');

    // 1 (b) Check the current stylesheet file name. (hint: element.getAttribute)
    var att = style.getAttribute("href");
    

    // 1 (c) Determine new stylesheet file name
    var newStyle = "Styles/styles2.css";
    
    // 1 (d) replace stylesheet with new stylesheet (hint: element.setAttribute)
    if (att === 'Styles/styles.css'){
        
        style.setAttribute('href',newStyle);
    }
    else{
        newStyle = "Styles/styles.css";
        style.setAttribute('href',newStyle);
    }
    


    // TASK 2
    // 2 (d) For persistence when page is refreshed. save new stylesheet name to localStorage
    // hint: localStorage.setItem(name, value)
    
    localStorage.setItem("style", newStyle);
}


window.onload = function(){
    // TASK 2
    // TODO: Make the last div color persist even when someone refreshes the page.

    // Steps
    // 2 (a) get stylesheet name from local storage hint: localStorage.getItem(name)
    var styleName = localStorage.getItem("style");

    if(styleName == null)
    {
        styleName = "Styles/styles.css";
    }
    
    // 2 (b) get html style element by ID
    document.getElementById("mainStyleSheet").href = styleName;
    
    console.log(styleName)

    // 2 (c) replace href attribute of html element.
    

}