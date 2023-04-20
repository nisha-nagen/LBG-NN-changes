<script>
    // Please note there are 4 sections where customisation can be applied for this design incl. flickerless script

    // =========================== USER DEFINED CONFIGURATION STARTS FOR PROGESS BAR===========================

    var att_config = {

    //Existing progressbar to remove, add selector of progress bar below
    exisProgressBar:".layout-progressbar",
    
    // Add selector where progressbar needs to add 
    prependSelector: ".csl-main__container", 
    prependSelector2: "#page-container", 

     //Add top padding for progress bar i.e space from top(e.g 10px)
    topPadding:"0px",

    // Progressbar color
    progressColor:"#006A4D",

    // Default color:
    defaultColor:"grey",

    //Width of progressbar (Desktop)
    deskWidth: "100%",

    // Width of mobile progressbar
     mobWidth: "100%",

    //Height of progressbar
     pheight:"15px"
      

 // =========================== USER DEFINED CONFIGURATION ENDS FOR PROGRESS BAR ===========================


  };

function initProgressBar(){

var css = `
  @media (max-width: 927px) {
    .percentage-progress-bar {
      width:`+ att_config.mobWidth +`;
      margin-left: 0;
      margin-right: 0;
      margin-top: `+ att_config.topPadding +`;
    }

  }


  /* Generic Style */

  .percentage-progress-bar {
    display: inline-block;    
    width:`+ att_config.deskWidth +`;
     margin-bottom: 2.4em;
    vertical-align: top;
     margin-top: `+ att_config.topPadding +`;

  }

  .percentage-progress-bar .content {

    height: `+ att_config.pheight +`;
    display: flex;
    background-color:`+ att_config.defaultColor +`;

  }


  .percentage-progress-bar .content .bar {
    height: 100%;
    background-color: `+att_config.progressColor +`;
    transition: width 0.5s linear;
    min-width: 0;

  }`;


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


initProgressBar();

  // =========================== FLICKERLESS SCRIPT STARTS ===========================


  Flickerlessly = window.Flickerlessly || {};

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

        "{animation-duration:0.001s;animation-name:" +

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

  })(Flickerlessly);

  Flickerlessly.onReady({

    //Righ click From the page>Element> Copy Selector of the element to replcae or update.Place the element selector in selector: section as below

    selector:

      "#app > div > div > main > div > div > div:nth-child(1) > div > h1,#page-container > div > div > div.col-md-10.col-md-offset-1.page-heading > h1",
      
    persist: false,

    success: function (el) {

      if (document.querySelector(att_config.exisProgressBar))

        document.querySelector(att_config.exisProgressBar).style.display = "none";

        let steps = [];

        

// ====================== USER DEFINED CONFIGURATION STARTS FOR DEFINING TOTAL NUMBER OF STEPS =========================

     // Amend the total value of step count for individual application journey

      let totalSteps = 8;

// ====================== USER DEFINED CONFIGURATION ENDS FOR DEFINING TOTAL NUMBER OF STEPS =========================

      let oneUnit = 100 / totalSteps;

      for (let i = 0; i < totalSteps; i++) {

        steps.push(`<div class="percentage-progress-bar" role="progressbar" aria-valuetext="Step ${

          i + 1
        } of ${totalSteps}" aria-valuenow="${
          oneUnit * (i + 1)
        }" aria-valuemin="0" aria-valuemax="100">
        <div class="content"><div class="bar" style="width: ${
          oneUnit * (i + 1)

        }%";></div>
    </div>
    </div>`);
      }
      var progressBarContainer = document.querySelector(att_config.prependSelector) || document.querySelector(att_config.prependSelector2);
      let earlierProgressBar = progressBarContainer.querySelectorAll(
        ".att_progress_section"
      );
      console.log("earlierProgressBar", earlierProgressBar);
      for (let i = 0; i < earlierProgressBar.length; i++) {
        earlierProgressBar[i].remove();
      }

// =========================== USER DEFINED CONFIGURATION STARTS FOR DEFINING SPA STEPS ===========================

      // Add URI for each step of the single page application journey. At LBG, each SPA step is defined by hash

      let urlsArr = ["#/landing", "#/about-you", "#/household", "#/income", "#/contact", "#/switch", "#/offer", "#/register"];

      // begin changes for offer and register page
      let urlsArrNew = ["#/offer", "#/register"];
      // end changes for offer and register page

// =========================== USER DEFINED CONFIGURATION ENDS FOR DEFINING SPA STEPS ===========================


      let progressSection = document.createElement("div");
      progressSection.classList.add("att_progress_section");
      for(let i = 0; i<urlsArr.length; i++){

          if(document.location.href.indexOf(urlsArr[i]) > -1){
            progressSection.innerHTML = steps[i];
            progressBarContainer.prepend(progressSection);
            // begin changes for offer and register page
            for(let j = 0; j<urlsArrNew.length; j++){
              if(document.location.href.indexOf(urlsArrNew[j]) > -1){
                progressSection.setAttribute("style","max-width: 92rem;margin: 0px auto 40px;");
                break;
              }
            }
            // end changes for offer and register page
            break;
          }
      }
         
      //  Remove earlier created progressbar
    },
  });

    </script>