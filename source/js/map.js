// var map = null;


function initMap() {

  var cities = [{
      id: 1,
      name: 'Санкт-Петербург',
      center: {
        lat: 60.2379579,
        lng: 30.337719
      },
      builds: [{
          name: 'Офис',
          address: '195248 г. Санкт-Петербург, ул.Партизанская, д.27',
          phones: ['8 (812) 676-98-00', '8 (812) 676-98-01'],
          emails: ['mail@nescospb.ru'],
          button: 'Смотреть на карте',
          location: {
            lat: 59.9479071,
            lng: 30.439998
          }
        },
        {
          name: 'Склад',
          address: '188681, Лен. обл., Всеволожский р-н, Свердловское гор-е п., в р-не д. Новосаратовка',
          phones: ['8 (812) 416-30-93'],
          emails: ['skladspb@nescospb.ru', 'logistika@nescospb.ru'],
          button: 'Смотреть на карте',
          location: {
            lat: 60.286854,
            lng: 30.710875
          }
        }
      ]
    },
    {
      id: 2,
      name: 'Архангельск',
      center: {
        lat: 64.5612228,
        lng: 40.2758267
      },
      builds: [{
          name: 'Офис',
          address: 'Архангельск',
          phones: ['8 (812) 676-98-00', '8 (812) 676-98-01'],
          emails: ['mail@nescospb.ru'],
          button: 'Смотреть на карте',
          location: {
            lat: 64.5612228,
            lng: 40.2758267
          }
        },
        {
          name: 'Склад',
          address: 'Архангельск',
          phones: ['8 (812) 416-30-93'],
          emails: ['skladspb@nescospb.ru', 'logistika@nescospb.ru'],
          button: 'Смотреть на карте',
          location: {
            lat: 64.5612228,
            lng: 40.2758267
          }
        }
      ]
    },
    {
      id: 3,
      name: 'Великий Новгород',
      center: {
        lat: 58.5562984,
        lng: 31.1723537
      },
      builds: [{
          name: 'Офис',
          address: 'Великий Новгород',
          phones: ['8 (812) 676-98-00', '8 (812) 676-98-01'],
          emails: ['mail@nescospb.ru'],
          button: 'Смотреть на карте',
          location: {
            lat: 58.5562984,
            lng: 31.1723537
          }
        },
        {
          name: 'Склад',
          address: 'Великий Новгород',
          phones: ['8 (812) 416-30-93'],
          emails: ['skladspb@nescospb.ru', 'logistika@nescospb.ru'],
          button: 'Смотреть на карте',
          location: {
            lat: 58.5562984,
            lng: 31.1723537
          }
        }
      ]
    },
    {
      id: 4,
      name: 'Калининград',
      center: {
        lat: 54.7116885,
        lng: 20.3944907
      },
      builds: [{
          name: 'Офис',
          address: 'Калининград',
          phones: ['8 (812) 676-98-00', '8 (812) 676-98-01'],
          emails: ['mail@nescospb.ru'],
          button: 'Смотреть на карте',
          location: {
            lat: 54.7116885,
            lng: 20.3944907
          }
        },
        {
          name: 'Склад',
          address: 'Калининград',
          phones: ['8 (812) 416-30-93'],
          emails: ['skladspb@nescospb.ru', 'logistika@nescospb.ru'],
          button: 'Смотреть на карте',
          location: {
            lat: 54.7116885,
            lng: 20.3944907
          }
        }
      ]
    },
    {
      id: 5,
      name: 'Псков',
      center: {
        lat: 57.8004488,
        lng: 28.2082531
      },
      builds: [{
          name: 'Офис',
          address: 'Псков',
          phones: ['8 (812) 676-98-00', '8 (812) 676-98-01'],
          emails: ['mail@nescospb.ru'],
          button: 'Смотреть на карте',
          location: {
            lat: 57.8004488,
            lng: 28.2082531
          }
        },
        {
          name: 'Склад',
          address: 'Псков',
          phones: ['8 (812) 416-30-93'],
          emails: ['skladspb@nescospb.ru', 'logistika@nescospb.ru'],
          button: 'Смотреть на карте',
          location: {
            lat: 57.8004488,
            lng: 28.2082531
          }
        }
      ]
    }
  ]

  var activeCity = cities[0];

  // Styles a map in night mode.
  var map = new google.maps.Map(document.getElementById('map'), {
    center: activeCity.center,
    zoom: 9,
    styles: [{
        "featureType": "landscape",
        "stylers": [{
            "hue": "#FFBB00"
          },
          {
            "saturation": 43.400000000000006
          },
          {
            "lightness": 37.599999999999994
          },
          {
            "gamma": 1
          }
        ]
      },
      {
        "featureType": "road.highway",
        "stylers": [{
            "hue": "#FFC200"
          },
          {
            "saturation": -61.8
          },
          {
            "lightness": 45.599999999999994
          },
          {
            "gamma": 1
          }
        ]
      },
      {
        "featureType": "road.arterial",
        "stylers": [{
            "hue": "#FF0300"
          },
          {
            "saturation": -100
          },
          {
            "lightness": 51.19999999999999
          },
          {
            "gamma": 1
          }
        ]
      },
      {
        "featureType": "road.local",
        "stylers": [{
            "hue": "#FF0300"
          },
          {
            "saturation": -100
          },
          {
            "lightness": 52
          },
          {
            "gamma": 1
          }
        ]
      },
      {
        "featureType": "water",
        "stylers": [{
            "hue": "#0078FF"
          },
          {
            "saturation": -13.200000000000003
          },
          {
            "lightness": 2.4000000000000057
          },
          {
            "gamma": 1
          }
        ]
      },
      {
        "featureType": "poi",
        "stylers": [{
            "hue": "#00FF6A"
          },
          {
            "saturation": -1.0989010989011234
          },
          {
            "lightness": 11.200000000000017
          },
          {
            "gamma": 1
          }
        ]
      }
    ]
  });


  var markers = activeCity.builds.map(function (build) {
    return new google.maps.Marker({
      map: map,
      position: build.location
    });
  });

  // Add a marker clusterer to manage the markers.
  var markerCluster = new MarkerClusterer(map, markers, {
    imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'
  });



  var select = document.querySelector('.select__gap');
  select.innerHTML = activeCity.name;

  var selectList = document.querySelector('.select__list');
  selectList.innerHTML = '';
  cities.forEach(function (city) {
    var option = createElementFromHtmlList('<li class="select__item" data-value=""></li>');
    // option.value = city.id;
    option.innerHTML = '<span>' + city.name + '</span>';
    option.attributes[1].value = city.id;
    selectList.appendChild(option);
  });
  selectList.addEventListener('click', function (evt) {
    var city = cities.find(function (c) {
      select.classList.remove('on');
      selectList.style.display = 'none';
      select.innerHTML = c.name;
      return c.id == evt.target.parentNode.attributes[1].value;
    })

    if (city) activeCity = city;

    map.setCenter(activeCity.center);
    console.log(activeCity);
    markers.forEach(function (marker) {
      marker.setMap(null);
    })
    markers = activeCity.builds.map(function (build) {
      return new google.maps.Marker({
        map: map,
        position: build.location
      });
    });

    var wrapper = document.querySelector('.page-contacts__address__wrapper');
    wrapper.innerHTML = '';
    activeCity.builds.forEach(function (build) {
      var item = createElementFromHtml('<div class="page-contacts__address-item"><h3></h3><p></p><button class="button page-contacts__btn-mob" data-href=""></button></div>');
      item.querySelector('h3').innerText = build.name + ':';
      item.querySelector('p').innerText = build.address;
      build.phones.forEach(function (phone) {
        var a = document.createElement('a');
        a.href = 'tel:' + clearPhone(phone);
        a.innerText = phone;
        item.appendChild(a);
      })
      build.emails.forEach(function (email) {
        var a = document.createElement('a');
        a.href = 'mailto:' + email;
        a.innerText = email;
        item.appendChild(a);
      })

      item.querySelector('button').innerText = build.button;
      item.querySelector('button').attributes[1].value == build.location;

      wrapper.appendChild(item);
    })

  });

}

function createElementFromHtml(html) {
  var wrapper = document.createElement('div');
  wrapper.innerHTML = html;
  return wrapper.children[0];
}

function createElementFromHtmlList(html) {
  var selectList = document.createElement('li');
  selectList.innerHTML = html;
  return selectList.children[0];
}

function clearPhone(phone) {
  return phone.replace(/[-,(,),\s]/g, '');
}