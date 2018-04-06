import '../styles/main.scss'
import $ from 'jquery'

$(document).ready(function () {
  const window_height = window.innerHeight
  const header_height = $(".default-header").height()
  const fitscreen = window_height - header_height


  $(".fullscreen").css("height", window_height)
  $(".fitscreen").css("height", fitscreen)


  // -------   Active Mobile Menu-----//

  $(".menu-bar").on('click', function (e) {
    e.preventDefault()
    $("nav").toggleClass('hide')
    $("span", this).toggleClass("lnr-menu lnr-cross")
    $(".main-menu").addClass('mobile-menu')
  })

  $('select').niceSelect()
  $('.img-pop-up').magnificPopup({
    type: 'image',
    gallery: {
      enabled: true
    }
  })

  $('.active-bottle-carousel').owlCarousel({
    items: 1,
    loop: true,
    nav: false,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true
  })

  $('.play-btn').magnificPopup({
    disableOn: 700,
    type: 'iframe',
    mainClass: 'mfp-fade',
    removalDelay: 160,
    preloader: false,
    fixedContentPos: false
  })

})
