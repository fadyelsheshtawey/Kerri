import Typed from './typed.js';

$('document').ready(function () {

  let colorBox = "-" + $(".select-box").innerWidth() + "px"  
  let mainColor = '#e65f78';
  $('body,html').css('--mainColor', mainColor)

  for (let i = 0; i < $(".color-item").length; i++) {

    let red = Math.round(Math.random() * 255)
    let green = Math.round(Math.random() * 255)
    let blow = Math.round(Math.random() * 255)

    $('.color-item').eq(i).css("background-color", `rgb(${red},${green},${blow})`)
}

  $('.switcher').css('left',colorBox)


  $(".setting").click(function () {
    
    let space = $(".switcher").css("left")

    if (space == colorBox) {
      $(".switcher").animate({ left: `0` }, 1000)
    }
    else {
      $(".switcher").animate({ left: colorBox }, 1000)}
     })



  $('.color-item').click(function () {
    mainColor = $(this).css("background-color")
    $('body,html').css('--mainColor', mainColor)

  })






  var typed = new Typed('#typed', {
    strings: ['A Graphic Designer.', 'A Photographer.', 'Kerri Deo.'],
    backSpeed: 30,
    typeSpeed: 70,
    loop: true,
    autoInsertCss: false,
    backDelay: 2000,
  });







  $(window).scroll(function () {
    let headerScroll = $("header").offset().top;
    let aboutScroll = $("#about").offset().top;
    let clientsScroll = $("#Clients").offset().top;
    let serviceScroll = $("#service").offset().top;
    let worksScroll = $("#Works").offset().top;
    let blogScroll = $("#blog").offset().top;
    let contactScroll = $("#contact").offset().top;
    let wScroll = $(window).scrollTop();


    if (wScroll > 100) {
      $(".navbar").css("background-color", "#fff")
      $(".navbar-light .navbar-nav .nav-link").css("color", "#000")
      $(".navbar .navbar-brand").css("color", "#000")
      $(".navbar").removeClass("py-4")
      $(".navbar").addClass("shadow")


    }
    else {
      $(".navbar").css("background-color", "transparent")
      $(".navbar-light .navbar-nav .nav-link").css("color", "white")
      $(".navbar .navbar-brand").css("color", "#fff")
      $(".navbar").addClass("py-4")
      $(".navbar").removeClass("shadow")

    }

    if (wScroll > headerScroll) {

      $(".up-arrow").css("display", "block")
    }
    else if (wScroll < 50) {
      $(".up-arrow").css("display", "none")

    }

    if (wScroll < aboutScroll - 100) {
      $(".navbar-light .navbar-nav .nav-link ").eq(0).css("color", "red")

    }
    if (wScroll > aboutScroll - 100 && wScroll < serviceScroll - 100) {
      $(".navbar-light .navbar-nav .nav-link ").eq(1).css("color", "red")
      $(".navbar-light .navbar-nav .nav-link ").eq(1).parent().siblings().children(".nav-link").css("color", "#000")

    }

    else if (wScroll > serviceScroll - 100 && wScroll < clientsScroll - 100) {
      $(".navbar-light .navbar-nav .nav-link ").eq(2).css("color", "red")
      $(".navbar-light .navbar-nav .nav-link ").eq(2).parent().siblings().children(".nav-link").css("color", "#000")

    }
    else if (wScroll > clientsScroll - 100 && wScroll < worksScroll - 100) {
      $(".navbar-light .navbar-nav .nav-link ").eq(3).css("color", "red")
      $(".navbar-light .navbar-nav .nav-link ").eq(3).parent().siblings().children(".nav-link").css("color", "#000")
    }
    else if (wScroll > worksScroll - 100 && wScroll < blogScroll - 100) {
      $(".navbar-light .navbar-nav .nav-link ").eq(4).css("color", "red")
      $(".navbar-light .navbar-nav .nav-link ").eq(4).parent().siblings().children(".nav-link").css("color", "#000")
    }
    else if (wScroll > blogScroll - 100 && wScroll < contactScroll - 100) {
      $(".navbar-light .navbar-nav .nav-link ").eq(5).css("color", "red")
      $(".navbar-light .navbar-nav .nav-link ").eq(5).parent().siblings().children(".nav-link").css("color", "#000")

    }


    else if (wScroll > contactScroll - 100) {
      $(".navbar-light .navbar-nav .nav-link ").eq(6).css("color", "red")
      $(".navbar-light .navbar-nav .nav-link ").eq(6).parent().siblings().children(".nav-link").css("color", "#000")

    }
  })

  $(".up-arrow").click(function () {
    $("html,body").animate({ scrollTop: $("#home").offset().top }, 1500)
  })
  $(".navbar-light .navbar-nav .nav-link").click(function () {
    let linkName = $(this).text()

    let selectorLink = `#${linkName}`.toLocaleLowerCase()
    console.log(selectorLink)

    if (selectorLink == '#portfolio') {
      $("html,body").animate({ scrollTop: $("#Works").offset().top }, 1500)
    }
    else if (selectorLink == '#clients') {
      $("html,body").animate({ scrollTop: $("#Clients").offset().top }, 1500)

    }
    else {

      $("html,body").animate({ scrollTop: $(selectorLink).offset().top }, 1500)
    }
  })

})
