var dt = new Date(2020, 07, 11, 00, 00, 00, 00);

var a = new Date();

var dias = (a - dt) / 1000 / 60 / 60 / 24;

var h = (a - dt) / 1000 / 60 / 60;

var min = (a - dt) / 1000 / 60;

var segs = (a - dt) / 1000;

var div = (document.querySelector(".a").innerHTML =
  "horas " + Math.trunc(h) + "<br>");

var div = (document.querySelector(".d").innerHTML =
  "dias " + Math.trunc(dias) + "<br>");

var div = (document.querySelector(".min").innerHTML =
  "minutos " + Math.trunc(min) + "<br>");

var div = (document.querySelector(".segs").innerHTML =
  "segundos " + Math.trunc(segs) + "<br>");
