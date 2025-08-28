  let inputel = document.querySelector(".enter");
  let ser = document.querySelector('.go');
  let section = document.querySelector(".continer");

  ser.onclick = function(e) {
      section.innerHTML = '';

      if (inputel.value == "" || !isNaN(inputel.value)) {
          let oneel = document.createElement("div");
          oneel.className = "eror";
          let twoel = document.createElement("div");
          twoel.className = "image";
          let threeel = document.createElement('img');
          threeel.src = "nodata.jpg";
          threeel.style.width = "100%";
          threeel.style.height = "100%";
          threeel.style.marginTop = "10px";
          threeel.style.borderRadius = "10px";
          twoel.appendChild(threeel);
          let fourel = document.createElement("div");
          fourel.className = "text";
          let five = document.createElement("h4");
          let txt = document.createTextNode("404 Error Please Try Again");
          five.appendChild(txt);
          fourel.appendChild(five);
          oneel.appendChild(twoel);
          oneel.appendChild(fourel);
          section.appendChild(oneel);
      } else {
          let api_key = "774e49b8cbd128962ecd6e39e20d1988";
          let url = `https://api.openweathermap.org/data/2.5/weather?q=${inputel.value}&appid=${api_key}`;
          let data = new XMLHttpRequest();
          data.open("GET", url, true);
          data.send();
          data.onreadystatechange = function() {
              if (this.readyState == 4 && this.status == 200) {
                  section.innerHTML = '';
                  let all_data = JSON.parse(this.responseText);
                  let main = all_data.main;
                  let weather = all_data.weather[0];
                  let cases = document.createElement("div");
                  cases.className = "case";
                  let textcontent = `
                            <div class="image">
                                <img src="static/weather.svg" alt="Weather">
                            </div>
                            <div class="degree">
                                <i class="fas fa-thermometer-half" style="font-size: 30px; margin-bottom: 10px;"></i>
                                <h3>${Math.ceil(main.temp - 273)} °<sup>c</sup></h3>
                            </div>
                            <div class="weather">
                                <i class="fas fa-sun" style="font-size: 30px; margin-bottom: 10px;"></i>
                                <h3>${weather.description}</h3>
                            </div>
                        `;
                  let all = document.createElement("div");
                  all.className = "all-cases";
                  let texttwo = `
                            <div class="box">
                                <i class="fa-solid fa-temperature-full" style="font-size: 30px;"></i>
                                <div class="text">Temperature</div>
                                <h3>${Math.ceil(main.temp - 273)} °C</h3>
                            </div>
                            <div class="box">
                                <i class="fa-solid fa-temperature-full" style="font-size: 30px;"></i>
                                <div class="text">Temperature-Min</div>
                                <h3>${Math.ceil(main.temp_min - 273)} °C</h3>
                            </div>
                            <div class="box">
                                <i class="fa-solid fa-temperature-full" style="font-size: 30px;"></i>
                                <div class="text">Temperature-Max</div>
                                <h3>${Math.ceil(main.temp_max - 273)} °C</h3>
                            </div>
                            <div class="box">
                                <i class="fas fa-tachometer-alt" style="font-size: 30px;"></i>
                                <div class="text">Pressure</div>
                                <h3>${main.pressure} hPa</h3>
                            </div>
                            <div class="box">
                                <i class="fas fa-tint" style="font-size: 30px;"></i>
                                <div class="text">Humidity</div>
                                <h3>${main.humidity}%</h3>
                            </div>
                            <div class="box">
                                <i class="fa-solid fa-water" style="font-size: 30px;"></i>
                                <div class="text">Sea-level</div>
                                <h3>${main.sea_level || 'N/A'} hPa</h3>
                            </div>
                        `;
                  all.innerHTML = texttwo;
                  cases.innerHTML = textcontent;
                  section.appendChild(cases);
                  section.appendChild(all);
              } else if (this.readyState == 4 && this.status != 200) {
                  section.innerHTML = '';
                  let oneel = document.createElement("div");
                  oneel.className = "eror";
                  let twoel = document.createElement("div");
                  twoel.className = "image";
                  let threeel = document.createElement('img');
                  threeel.src = "nodata.jpg";
                  threeel.style.width = "300px";
                  threeel.style.height = "300px";
                  threeel.style.marginTop = "10px";
                  threeel.style.borderRadius = "10px";
                  twoel.appendChild(threeel);
                  let fourel = document.createElement("div");
                  fourel.className = "text";
                  let five = document.createElement("h4");
                  let txt = document.createTextNode("404 Error Please Try Again");
                  five.appendChild(txt);
                  fourel.appendChild(five);
                  oneel.appendChild(twoel);
                  oneel.appendChild(fourel);
                  section.appendChild(oneel);
              }
          };
      }
  };