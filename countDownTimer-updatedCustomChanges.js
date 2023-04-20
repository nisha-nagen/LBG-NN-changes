<script>
  var att_config = {

  // =========================== USER DEFINED CONFIGURATION ===========================

  // Add the count down deadline in below format
  deadline: "Tue Oct 05 2023 23:59:59 GMT+0000",
  //Replace with background image url 
    //commenting img1 for count down timer
  //img1: "",
  //Add element selector(.class or #id) to replace the banner
  elementToReplace: ".col-xs-12.col-sm-12.col-md-6.col-lg-6.hero-content-wrapper.print-always",
  //Add space between days/hpurs/seconds/minutes section for Desktop
  clockRightAlignDesk:"1.6rem",

  //Add space between days/hpurs/seconds/minutes section for Mobile
  clockRightAlignMob:"1rem",


  //Add box background color
  bgColor: "#005eb8",
  //Header text to update
  headerText: "ISA Deadline - 5 October 2023",
   //CTA label
  ctaText: "Invest ISA today",
  //CTA text color change on mouse hover
  ctaHoverColor: "#071d49",
  // CTA links
  ctaUrl: "https://www.halifax.co.uk/isas/cash-isas.html ",
  //text below CTA
  legalText: "Make the most of this year ISA's allownce",
  //background color of CTA
  ctaBgColor: "#fff",
 // Count down  color
  timerColor: "#005eb8",
  //cta text color
  btnColor:"black !important",
  //Color of text i.e Days,Months,Hours,Seconds
  timerTextColor: "#005eb8",
  // =========================== END USER DEFINED CONFIGURATION ===========================
};

function tempInit() {
  var template =
    `<section class="att_hero">
    <div class="att_hero_content">
      <h1 class="att_header_text">` +
    att_config.headerText +
    `</h1>
  <div id="clockdiv">

    <div class="att_countdown_timer days-timer"> <span class="days_remain"></span><span class="days_text"> DAYS</span></div>
    <div class="att_countdown_timer hours-timer"> <span class="hours_remain "></span><span class="hours_text"> HOURS</span></div>
     <div class="att_countdown_timer minutes-timer"> <span class="minutes_remain"></span><span class="minutes_text"> MINUTES</span></div>
      <div class="att_countdown_timer seconds-timer"> <span class="seconds_remain"></span><span class="seconds_text"> SECONDS</span></div>
  </div>
         <p class="legal">` +
    att_config.legalText +
    `</p>
      <a
        class="att_btn att_btn-primary"
        href=` +
    att_config.ctaUrl +
    `
        ><span class="btn-text" itemprop="name">` +
    att_config.ctaText +
    `</span></a
      >

    </div>

    <img
      class="att_hero_mobile_image"
      src=` +
    att_config.img1 +
    `
    
    />
  </section>`;

  var css =
    `

    .hero-link-wrapper{
      display:none !important;
    }

/* removing margin-top:120px for count down timer*/
    .att_hero {
      background: none;
      display: flex;
      flex-direction: column;
      color: white;
     
    }

   .hero-content-wrapper .att_hero{
      position:relative;
    }

    /* adding transform for count down timer*/
    .att_hero_content {
      background: ` +
    att_config.bgColor +
    `;
      max-width: 1100px;
      min-width: 0;
      padding: 18px 18px 30px;
      margin-top:80px;
      transform: translateY(-17%);
    }

    .att_header_text {
      line-height: 2.889rem;
      margin-bottom: 12px;
      max-width: 100%;
      text-transform: none;
      width: 100%;
      font-size: 1.8rem;
    }
     .att_countdown_timer{
      display: inline-block;
       width: 4rem;
       height: 4rem;
       background : white;
       margin-right: `+att_config.clockRightAlignDesk + `;
       
     }
    .att_hero_content .btn-text{
      color: `+att_config.btnColor+`;
     }

     #clockdiv {
    text-align: center;
    }
   @media (max-width: 767px){ .seconds-timer{display:none;}
   .att_countdown_timer{margin-right: `+att_config.clockRightAlignMob+`;}
  }
  


  /* display set to none for count down timer*/
    .att_hero_mobile_image {
      height: 320px;
      object-fit: cover;
      display: none;
      width: 100%;
      border-style: none;
    }

    .att_btn-primary {
      background-color: ` +
    att_config.ctaBgColor +
    `;
      max-width: 278px;
      min-width: 168px;
      text-align: center;
      padding: 8px 12px;
      border-radius: 28px;
      display: inline-block;
      font-size: 1rem;
      font-weight: 600;
      line-height: 1.5rem;
      margin-top: 1rem;
      color: #005eb8;
      word-break: break-word;

    }
    a.att_btn:link {
      text-decoration: none;
      border-bottom:none;
    }
    a.att_btn:hover {
      cursor:pointer;
      text-decoration: underline;
      color: ` +
    att_config.ctaHoverColor +
    `;
    }
    .legal {
      padding-top: 0.8rem;
      font-size: 1.04rem;
      line-height: .9rem;;
      margin-bottom: 0.3rem;
    }

    span.days_text,span.hours_text,span.minutes_text,span.seconds_text{display:block;line-height:1rem;font-size: .7rem;
    color:` +
    att_config.timerTextColor +
    `;}

  span.days_remain,span.hours_remain,span.minutes_remain,span.seconds_remain{
    display: inline-block;
  padding-top: 30%;
  font-size: 1.7rem;
  font-weight : 1000;
  color:` +
    att_config.timerColor +
    `;
  }


    @media (min-width: 768px) {
      .att_hero {
            background-image: url(` +
    att_config.img1 +
    `);
        background-position: 50%;
        background-repeat: no-repeat;
        background-size: cover;
        width: 1040px;
        display: block;
        margin: 0 auto;
      }

      /* changes made in padding, margin-left, transform for cound down timer*/
      .att_hero_content {
        margin-left: 0px;
        zoom: 1;
        background: ` +
    att_config.bgColor +
    `;
        border-radius: 6px;
        padding: 20px 30px 39px;
        position: absolute;
        top: 50%;
        transform: translateY(-20%);
        width: 480px;
        margin-top: 0px;
      }


      .att_btn-primary {
        display: inline-block;
      }

     .att_hero_mobile_image {
        display: none;
      }

       .seconds-timer{display:inine-block ;}


    }
  `;

  var element = document.createElement("link");
  element.setAttribute("rel", "stylesheet");
  element.setAttribute("type", "text/css");

  document.getElementsByTagName("head")[0].appendChild(element);

  var head = document.head || document.getElementsByTagName("head")[0];
  var style = document.createElement("style");

  head.appendChild(style);

  style.type = "text/css";
  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }

  document.querySelector(att_config.elementToReplace).innerHTML = template;
}
//Activate count down timer if it;s future time
if((Date.parse(att_config.deadline) - Date.now())>0){
tempInit();
initializeClock("clockdiv", att_config.deadline);
}


// Write count down timer logic
function getTimeRemaining(endtime) {
  var t = Date.parse(endtime) - Date.now();
  var seconds = Math.floor((t / 1000) % 60);
  var minutes = Math.floor((t / 1000 / 60) % 60);
  var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
  var days = Math.floor(t / (1000 * 60 * 60 * 24));
  return {
    total: t,
    days: days,
    hours: hours,
    minutes: minutes,
    seconds: seconds,
  };
}

function initializeClock(id, endtime) {
  var clock = document.getElementById(id);
  var daysSpan = clock.querySelector(".days_remain");
  var hoursSpan = clock.querySelector(".hours_remain");
  var minutesSpan = clock.querySelector(".minutes_remain");
  var secondsSpan = clock.querySelector(".seconds_remain");

  function updateClock() {
    var t = getTimeRemaining(endtime);

    daysSpan.innerHTML = t.days;
    hoursSpan.innerHTML = ("0" + t.hours).slice(-2);
    minutesSpan.innerHTML = ("0" + t.minutes).slice(-2);
    secondsSpan.innerHTML = ("0" + t.seconds).slice(-2);

    if (t.total <= 0) {
      clearInterval(timeinterval);
    }
  }

  updateClock();
  var timeinterval = setInterval(updateClock, 1000);
}
// count down timer:
// var deadline = "Thu Feb 23 2022 20:14:03 GMT+0530 (India Standard Time)";
// var deadline = new Date(Date.now() + 1 * 30 * 60 * 60 * 1000);


// End count down timer logic

</script>