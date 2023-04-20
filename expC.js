
<script> 
console.log("Activity Entered");

  //**************************Use configuration starts************************** 

 

    // Add existing progress bar element elector to remove 

    var att_config = { 

        //Existing progressbar to remove, add selector of progress bar below 

        exisProgressBar: ".csl-progress-bar", 

 

    // Add selector where progressbar needs to add 

    prependSelector: ".csl-main__container", 
    prependSelector2: "#page-container", 


 

    // Progressbar color 

    progressColor: "#006A4D;", 

 

    // Default color: 

    defaultColor: "#2D8259;", 

 

    //Width of progressbar (Desktop) 

    deskWidth: "100%", 

 

    // Width of mobile progressbar 

    mobWidth: "98.5%", 

 

    //Height of progressbar 

    pheight: "32px", 

 

    //Color of text 

    txtColor: "white", 

  }; 

    //Add the category Name and url against earch other in below format .  

    let data = [ 

    {categoryName: "Step 1", url: "#/landing" }, 

    {categoryName: "2", url: "#/about-you" }, 

    {categoryName: "3", url: "#/household" }, 

    {categoryName: "4", url: "#/income" }, 

    {categoryName: "5", url: "#/contact" }, 

    {categoryName: "6", url: "#/switch"}, 

    {categoryName: "7", url: "#/offer", wrapperElm: '.offer-page'}, 

    {categoryName: "8", url: "#/register"}, 


    ]; 

 

    //**************************Use configuration Ends************************** 

 

    function initAngularProgressBar() { 

    var css = 

    `.progress-container { 

        width: ` + 

    att_config.deskWidth + 

    `; 

    margin-bottom: 30px; 

    background-color: ` + 

    att_config.defaultColor + 

    `; 

    position: relative; 

    display: flex; 

      } 

    .box{ 

        position: relative; 

    height: ` + 

    att_config.pheight + 

    `; 

    flex-grow:1; 

    display: flex; 

    justify-content: space-between; 

    align-items: center; 

    justify-content: center; 

      } 

    .box-arrow{ 

        position: absolute; 

    justify-content: space-between; 

    left: 100%; 

    width: 0; 

    height: 0; 

    border-top: 1rem solid transparent; 

    border-bottom: 1rem solid transparent; 

    border-left: .5rem solid ` + 

    att_config.defaultColor + 

    `; 

    z-index:2; 

      } 

    .box-visited{ 

        background-color: ` + 

    att_config.progressColor + 

    `; 

      } 

    .box-unvisited{ 

        background-color: ` + 

    att_config.defaultColor + 

    `; 

      } 

      .step-text,.box>span{ 

        color: white; 

    font-size: 1rem; 

   

    font-size: 16px; 

    font-weight: bold; 

    font-family: system-ui; 

   

      } 

 

    @media only screen and (max-width: 600px) { 

        .progress-container { 

        width:` + 

    att_config.mobWidth + 

    `; 

    margin-left: 0; 

    margin-right: 0; 

      } 

    .step-text,.box>span{ 

        padding:0; 

    font-size: 12px; 

    z-index:2; 

 

    } 

  } 

 

    `; 

 

    var head = document.head || document.getElementsByTagName("head")[0]; 

    var style = document.createElement("style"); 

 

    head.appendChild(style); 

 

    style.type = "text/css"; 

    if (style.styleSheet) { 

        style.styleSheet.cssText = css; 

    } else { 

        style.appendChild(document.createTextNode(css)); 

    } 

  } 

 

    initAngularProgressBar(); 

 

    Flickerlessly = window.Flickerlessly || { }; 

    !(function (A) { 

        "use strict"; 

    var init = function (id, sel, callback, persist) { 

      var animationName = "atNodeInserted" + id; 

    var cssStr = 

    "@keyframes " + 

    animationName + 

    " {from {opacity:0.99} to {opacity:1} }\n"; 

    cssStr += 

    sel + 

    "{animation - duration:0.001s;animation-name:" + 

    animationName + 

        ";visibility:hidden}"; 

    var head = document.getElementsByTagName("head")[0]; 

    if (head) { 

        var style = document.createElement("style"); 

    style.setAttribute("type", "text/css"); 

    if (style.styleSheet) style.styleSheet.cssText = cssStr; 

    else style.appendChild(document.createTextNode(cssStr)); 

    head.insertBefore(style, head.firstChild); 

      } 

    var _insertListener = function (event) { 

        if ( 

    event.animationName === animationName && 

    typeof event.target === "object" 

    ) { 

          var isExecute = 

    persist === true || 

    (persist === false && 

    event.target.getAttribute("data-flk-success") === null) 

    ? true 

    : false; 

    if (console && console.info) 

    console.info( 

    "Node " + sel + " ready! Execute: " + isExecute, 

    event.target 

    ); 

    if (typeof callback === "function" && isExecute) { 

        callback(event.target); 

    event.target.setAttribute("data-flk-success", animationName); 

          } 

    event.target.style.visibility = "visible"; 

        } 

      }; 

    ["animationstart", "MSAnimationStart", "webkitAnimationStart"].forEach( 

    function (item, index) { 

        document.addEventListener(item, _insertListener, false); 

        } 

    ); 

    }; 

    A.onReady = function () { 

      for (var i = 0; i < arguments.length; i++) { 

        var obj = arguments[i]; 

    var selector = obj.selector; 

    var success = obj.success || null; 

    var persist = obj.persist || false; 

    var rand = Math.floor(Math.random() * 100 + 1); 

    init(rand, selector, success, persist); 

      } 

    }; 

 

  // =================================== FLICKERLESS SCRIPT STARTS HERE =================================== 

 

  })(Flickerlessly); 

    Flickerlessly.onReady({ 

        //Righ click From the page>Element> Copy Selector of the element to replace or update. Place the element selector in selector: section as below 

        selector: 

      "#app > div > div > main > div > div > div:nth-child(1) > div > h1,#page-container > div > div > div.col-md-10.col-md-offset-1.page-heading > h1",

    persist: true, 

    success: function (el) {  
      console.log("Exp Entered");

        window.addEventListener("hashchange", (event) => { 

            setTimeout(() => { 

                traverseSystem(event); 

            }, 300); 

        }); 

 

    let stepsCounter = -1; 

    let hashURLS = []; 

    let currentPosition = 0; 

 

    function traverseSystem(event = null) { 

        let hash = location.hash; 

 

    for (let i = 0; i < data.length; i++) { 

      if (hash === data[i].url) { 

        currentPosition = i; 

    break; 

      } 

    } 

 

    // temp(); 

    logic(currentPosition); 

  } 

 

    function logic(stepsCounter) { 

        let olderProgressbar = document.querySelector( 

    att_config.exisProgressBar 

    ); 

    if (olderProgressbar) { 

        olderProgressbar.style.display = "none"; 

    } 

 

    let holder = document.querySelector(att_config.prependSelector) || document.querySelector(att_config.prependSelector2);

    

    if (holder) { 

        let earlierProgressBar = holder.querySelectorAll(".newProgressBar"); 

 

      if (holder.querySelectorAll(".newProgressBar").length > 0) { 

        for (let i = 0; i < earlierProgressBar.length; i++) { 

        earlierProgressBar[i].remove(); 

        } 

      } 

    } 

 

    if (holder) { 

        let divParent = document.createElement("div"); 

    divParent.classList.add("newProgressBar"); 

    holder.prepend(divParent); 

 

    uiCreater(divParent); 

    } 

  } 

 

    function uiCreater(divParent) { 

        let dataClone = JSON.parse(JSON.stringify(data)); 

 

    dataClone = dataClone.filter( 

      (value, index, self) => 

        index === self.findIndex((t) => t.categoryName === value.categoryName) 

    ); 

 

    let activeTill = 0; 

 

    for (let i = 0; i < dataClone.length; i++) { 

      if (dataClone[i].categoryName === data[currentPosition].categoryName) { 

        activeTill = i; 

    break; 

      } 

    } 

 

    let html = `<div class="progress-container"> <div class="box">`; 

        for (let i = 0; i < dataClone.length; i++) { 

            let item = dataClone[i]; 

        html += 

        `<div class="box ${ 

          i <= activeTill ? "box-visited" : "box-unvisited" 

        }"> 

 

        <div class="step-text">` + 

            item.categoryName + 

            `</div> 

 

        <div class="box-arrow" style=" 

                ${ 

                  i <= activeTill ? "border-left: .5rem solid #006A4D;" : "" 

                }"> 

    </div> 

    </div>`; 

    } 

    html += ` 

</div> 

      </div > `; 

 

    divParent.innerHTML = html; 

  } 

  setTimeout(() => { 

    traverseSystem(); 

  }, 300); 

    }, 

  }); 

 

</script>