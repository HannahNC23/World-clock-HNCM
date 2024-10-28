function updateTime() {
  let nottinghamElement = document.querySelector("#nottingham");
  let nottinghamDateElement = nottinghamElement.querySelector(".date");
  let nottinghamTimeElement = nottinghamElement.querySelector(".time");
  let nottinghamTime = moment().tz("Europe/London");

  nottinghamDateElement.innerHTML = nottinghamTime.format("MMMM Do YYYY");
  nottinghamTimeElement.innerHTML = nottinghamTime.format(
    "h:mm:ss [<small>]A[</small>]"
  );

  let parisElement = document.querySelector("#paris");
  let parisDateElement = parisElement.querySelector(".date");
  let parisTimeElement = parisElement.querySelector(".time");
  let parisTime = moment().tz("Europe/Paris");

  parisDateElement.innerHTML = parisTime.format("MMMM Do YYYY");
  parisTimeElement.innerHTML = parisTime.format("h:mm:ss [<small>]A[</small>]");
}

updateTime();
setInterval(updateTime, 1000);
