// для бургер меню появление
const burger = document.querySelector('.burger');
const menu = document.querySelector('.header__nav');
const menuLinks = menu.querySelectorAll('.nav__link');

burger.addEventListener('click',
  function () {

    burger.classList.toggle('burger--active');

    menu.classList.toggle('header__nav--active');

    document.body.classList.toggle('stop-scroll');
  })

menuLinks.forEach(function (elem) {
  elem.addEventListener('click', function () {

    burger.classList.remove('burger--active');

    menu.classList.remove('header__nav--active');

    document.body.classList.remove('stop-scroll');
  })
})

// Появление формы поиска
const headerLoupe = document.querySelector('.header__loupe');
const headerSearchForm = document.querySelector('.header__search');
const headerClose = document.querySelector('.header__button-close');

headerLoupe.addEventListener('click',
  function () {

    headerLoupe.classList.toggle('header__loupe--active');

    headerSearchForm.classList.toggle('header__search--active');

  })

headerClose.addEventListener('click', 

  function () {

    headerLoupe.classList.remove('header__loupe--active');

    headerSearchForm.classList.remove('header__search--active');

  })

// появление модального окна
const modalOpen = document.querySelector('.gallery__slide-2');
const modalWindow = document.querySelector('.modal');
const modalClose = document.querySelector('.modal__button-close');

modalOpen.addEventListener('click',
  function () {

    modalOpen.classList.toggle('gallery__slide-2--active');

    modalWindow.classList.toggle('modal--active');

    document.body.classList.toggle('stop-scroll');

  })

modalClose.addEventListener('click', 

  function () {

    modalOpen.classList.remove('gallery__slide-2--active');

    modalWindow.classList.remove('modal--active');

    document.body.classList.remove('stop-scroll');

  })


// для работы в секции bar скроллбара
document.querySelectorAll(".dropdown__simplebar").forEach(dropdown => {
  new SimpleBar(dropdown, {
  autoHide: false,
  scrollbarMaxSize: 25,
});
})

// для работы в секции bar переключения между кнопками
const dropdownBtns = document.querySelectorAll('.bar__button');
const dropdownItems = Array.from(dropdownBtns).map((btn) => {
  return [btn, btn.nextElementSibling];
});

dropdownItems.forEach(([btn, content]) => {
  
  content.setAttribute('inert', '');

  btn.addEventListener('click', function() {
    
    btn.classList.toggle('bar__button--active');
    btn.setAttribute('aria-expanded', !JSON.parse(btn.getAttribute('aria-expanded')));
    content.classList.toggle('bar__scroll--active');
    content.toggleAttribute('inert')
    
  });
});

document.addEventListener('click', function(event) {
  
  dropdownItems.forEach(([btn, content]) => {
    
    if ( !(event.composedPath().includes(btn) || event.composedPath().includes(content)) ) {
      
      btn.classList.remove('bar__button--active');
      btn.setAttribute('aria-expanded', 'false');
      content.classList.remove('bar__scroll--active');
      content.setAttribute('inert', '');
      
    };
    
  });
  
});

document.querySelectorAll('.bar__scroll').forEach((e) => {
  e.setAttribute('aria-label', 'Прокручиваемый список');
})

// для работы слайдера в секции hero
const swipper1 = new Swiper('.swiper1', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  slidesPerView: 1,
  
  autoplay: {
    delay: 2000,
  },
});


// для работы слайдера в секции gallery
const swiper2 = new Swiper('.gallery__swipper', {
  
  // Optional parameters
  direction: 'horizontal',
  loop: false,
  slidesPerView: 3,
  slidesPerGroup:3,
  spaceBetween: 50,
  
  
    // навигация
    navigation: {
      nextEl: '.gallery__button-next',
      prevEl: '.gallery__button-perv',
    },
    
    pagination: {
      el: ".gallery__pagination",
      type: "fraction",
    },
    
    breakpoints: {
      
      320: {
        slidesPerView: 1,
        slidesPerGroup:1,
        spaceBetween: 0
      },
      
      768: {
        slidesPerView: 2,
        spaceBetween: 30
      },
      
      1024: {
        slidesPerView: 2,
        spaceBetween: 35
      },
      
      1630: {
        slidesPerView: 3,
        slidesPerGroup:3,
        spaceBetween: 50
      },
      
      1920: {
        slidesPerView: 3,
        slidesPerGroup:3,
        spaceBetween: 50,
    },
  },
});


// кастомный селек в секции gallery
const element = document.querySelector('.gallery__select');
const choices = new Choices(element, {
  allowHTML: true,
  searchEnabled: false,
  placeholder: false,
  
});

// в catalogue работа accordion
new Accordion('.accordion-list', {
  elementClass: 'accordion',
  triggerClass: 'accordion__control',
  panelClass: 'accordion__content',
  activeClass: 'accordion--active',
  showMultiple: true,
});

// для работы таба в в секции catalogue
const catBtn = document.querySelectorAll('.listing__button');
const catItem = document.querySelectorAll('.case__left');

catBtn.forEach(function(element){
  element.addEventListener('click', function(e){
    
    const path = e.currentTarget.dataset.path;
    
    catBtn.forEach(function(btn){ btn.classList.remove('listing__button--active')});
    e.currentTarget.classList.add('listing__button--active');
    
    catItem.forEach(function(element){ element.classList.remove('case__left--active')});
    document.querySelector(`[data-target="${path}"]`).classList.add('case__left--active');
  });
});

// для работы слайдера в секции events
const swiper3 = new Swiper('.events__swipper', {
  
  // Optional parameters
  direction: 'horizontal',
  loop: false,
  slidesPerView: 3,
  slidesPerGroup:3,
  spaceBetween: 50,
  
  
  // навигация
  navigation: {
    nextEl: '.events__button--next',
    prevEl: '.events__button--prev',
  },
  
  pagination: {
    el: ".events__pagination",
  },
  
  breakpoints: {
    
    320: {
      slidesPerView: 1,
      slidesPerGroup:1,
      spaceBetween: 10
    },
    
    768: {
      slidesPerView: 2,
      slidesPerGroup:2,
      spaceBetween: 30
    },
    
    1024: {
      slidesPerView: 3,
      slidesPerGroup:3,
      spaceBetween: 30
    },

    1920: {
      slidesPerView: 3,
      slidesPerGroup:3,
      spaceBetween: 50
    },  
  },
});


// свайпер в секции проекты
const swiper4 = new Swiper('.projects__swipper', {
  slidesPerView: 1,
  loop: true,
  slidesPerView: 3,
  slidesPerGroup:3,
  spaceBetween: 50,
  
  // навигация
  navigation: {
    nextEl: '.projects__button--next',
    prevEl: '.projects__button--prev',
  },
  
  breakpoints: {
    
    320: {
      slidesPerView: 1,
      spaceBetween: 0
    },
    
    768: {
      slidesPerView: 2,
      spaceBetween: 30
    },
    
    1024: {
      slidesPerView: 2,
      spaceBetween: 50
    },
    
    1440: {
      slidesPerView: 3,
      slidesPerGroup:3,
      spaceBetween: 50,
    },
    
    1920: {
      slidesPerView: 3,
      slidesPerGroup:3,
      spaceBetween: 50,
    },
  },
});




// секция map

// Функция ymaps.ready() будет вызвана, когда
// загрузятся все компоненты API, а также когда будет готово DOM-дерево.
ymaps.ready(init);
function init(){
  // Создание карты.
  var myMap = new ymaps.Map("map", {
    // Координаты центра карты.
    // Порядок по умолчанию: «широта, долгота».
    // Чтобы не определять координаты центра карты вручную,
    // воспользуйтесь инструментом Определение координат.
    center: [55.76046750577876,37.61466864544679],
    // Уровень масштабирования. Допустимые значения:
    // от 0 (весь мир) до 19.
    zoom: 14,
            controls: ['smallMapDefaultSet'],
          });
          
          myMap.behaviors.disable('scrollZoom');
          
          myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
            hintContent: 'Собственный значок метки',
            balloonContent: 'Это красивая метка'
          }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'img/map__point.svg',
            // Размеры метки.
            iconImageSize: [30, 42],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [-5, -38]
          });
          
          myMap.geoObjects
          .add(myPlacemark)
          
        }
        
    // форма валидации
    const selector = document.querySelector("input[type='tel']");
    const im = new Inputmask("+7 (999) 999-99-99");
    im.mask(selector);

    const validator = function(selector, rules, successModal,yaGoal){
      new window.JustValidate(selector, {
        rules:rules,
        messages: {
          name: {
            required:'Вы не ввели имя',
            minLength: 'Вы не ввели имя',
            maxLength: 'Вы ввели больше чем положено'
          },
          tel: 'Вы не ввели телефон'
        },
        submitHandler:function(form){
          let formData = new FormData(form);

          let xhr = new XMLHttpRequest();
          xhr.onreadystatechange = function() {
            if (xhr.readyState === 4 ) {
              if (xhr.status === 200) {
                console.log('Отправлено');
              }
            }
          }

          xhr.open('POST', 'mail.php', true);
          xhr.send(formData);

          form.reset();
        }
      })
    }

    validator('.form-2', 
    {
      name: {
        required:true,
        minLength: 3,
        maxLength: 15,
      },
      tel: {
        required:true,
        function: (name, value) => {
          const phone = selector.inputmask.unmaskedvalue()
          return Number(phone) && phone.length === 10
        }
      }
    })

  // тул типы в секции projects
  tippy('.projects__tooltip--1', {
    content: 'Пример современных тенденций — современная методология разработки',
  });
  
  tippy('.projects__tooltip--2', {
    content: 'Приятно, граждане, наблюдать, как сделанные на базе аналитики выводы вызывают у вас эмоции',
  });
  
  tippy('.projects__tooltip--3', {
    content: 'В стремлении повысить качество',
  });
  
  
  // плавная навигация на jQuery
  $('.scrollto a').on('click', function() {
    
    let href = $(this).attr('href');

    $('html, body').animate({
      scrollTop: $(href).offset().top
    }, {
      duration: 500,   // по умолчанию «400» 
      easing: "linear" // по умолчанию «swing» 
    });
    
    return false;
  });



      
      // для работы в секции bar переключения между кнопками
      
      // const tabsBtn = document.querySelectorAll('.bar__button');
      // const tabsItem = document.querySelectorAll('.bar__scroll');
      // // задача заключается в том что бы найти все кнопки и все элементы табов в переменных а затем пройтись по всем кнопкам и спрева удалить классы у всех элементов таба, а затем добавить только определенному.
      
      // tabsBtn.forEach(function(element){
      //   element.addEventListener('click', function(e){
      //     // задаем переменную path и помещаем в нее некое значение (e) - идентификатор события которое произошло, хрпнится информация о клике
      //     // .dataset.path позволяет получить значение атрибута data-path
      //     const path = e.currentTarget.dataset.path;
       
      //     tabsBtn.forEach(function(btn){ btn.classList.remove('bar__button--active')});
      //     e.currentTarget.classList.add('bar__button--active');
       
      //     tabsItem.forEach(function(element){ element.classList.remove('bar__scroll--active')});
      //     document.querySelector(`[data-target="${path}"]`).classList.add('bar__scroll--active');
      //   });
      // });



  //   Валидация форм в Новой версии just Validate 
  //   const validation = new JustValidate('.showroom__form');
    
  //   validation
    
  // .addField('.showroom__form-text', [{
  //   rule: 'minLength',
  //   value: 3,
  //   errorMessage: "Вы не ввели имя"
  // },
  // {
  //   rule: 'maxLength',
  //   value: 15,
  //   errorMessage: "Вы ввели больше чем положено"
  // }
  // ])
  // .addField('.showroom__form-tel', [{
  //   rule: "function",
  //   validator: function (name, value) {
  //     const phone = selector.inputmask.unmaskedvalue();
  //     return phone.length === 10
  //   },
  //   errorMessage: 'Вы не ввели телефон',
  // }]);


  // // Тестирование
  // НЕ СРАБОТАЛО

  //  // отправка формы на почту
  //   .onSuccess('.showroom__form-button', [{
  //       rules: rules,
  //       submitHandler: function (form, values, ajax) {
  //           console.log(form);

  //           let formData = new FormData(form);

  //           fetch("mail.php", {
  //               method: "POST",
  //               body: formData
  //           })
  //           .then(function(data) {
  //               console.log(data);
  //               console.log('Отправлено');
  //               form.reset();
  //           });
  //       }
  //   }]);


    // тестирование