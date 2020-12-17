var express = require('express');
var router = express.Router();
var weather = require('openweather-apis');

/* GET home page. */
router.get('/', function(req, res, next) {
  weather.setLang('en');
  weather.setCity('Sarajevo, BA');
  weather.setUnits('metric');
  weather.setAPPID('c714fd204565cdd72c0557177b4ab322');

  var data = { };
  data.city = 'Sarajevo';
  data.cntry = 'BA';
  weather.getTemperature(function(err, temp){
    data.temp = temp;
    weather.getPressure(function(err, pres){
      data.pres = pres;
      weather.getHumidity(function(err, hum){
        data.hum = hum;
        weather.getDescription(function(err, desc){
          data.desc = desc;

          console.log(data);
          res.render('index', { title: 'Express', data: data});
        });
      });
    });
  });

});

router.get('/:city/:country', function(req, res, next) {
  let city = req.params.city;
  let cntry = req.params.country;
  let naziv = ""+city+","+cntry;
  weather.setLang('en');
  weather.setCity(naziv);
  weather.setUnits('metric');
  weather.setAPPID('c714fd204565cdd72c0557177b4ab322');
  console.log(naziv);

  var data = {};
  data.city = city;
  data.cntry = cntry;
  weather.getTemperature(function(err, temp){
    data.temp = temp;
    weather.getPressure(function(err, pres){
      data.pres = pres;
      weather.getHumidity(function(err, hum){
        data.hum = hum;
        weather.getDescription(function(err, desc){
          data.desc = desc;

          console.log(data);
          res.render('index', { title: 'Express', data: data});
        });
      });
    });
  });

});

router.post('/salji',function(req, res, next){
  let city = req.body.city;
  let cntry = req.body.sel1;
  let naziv = ""+city+","+cntry;
  weather.setLang('en');
  weather.setCity(naziv);
  weather.setUnits('metric');
  weather.setAPPID('c714fd204565cdd72c0557177b4ab322');
  console.log(naziv);

  var data = {};
  data.city = city;
  data.cntry = cntry;
  weather.getTemperature(function(err, temp){
    data.temp = temp;
    weather.getPressure(function(err, pres){
      data.pres = pres;
      weather.getHumidity(function(err, hum){
        data.hum = hum;
        weather.getDescription(function(err, desc){
          data.desc = desc;

          console.log(data);
          res.render('index', { title: 'Express', data: data});
        });
      });
    });
  });
});



module.exports = router;
