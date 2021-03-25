   
   var buttonObject =  document.getElementById ('button')
    var inputValue = document.getElementById ('input')
    var showName = document.getElementById('name')
    var showTemp = document.getElementById ('temp')
    var showDesc = document.getElementById ('desc')
    var showIcon = document.getElementById ('icon')

    //Button starts here
        buttonObject.addEventListener('click', function() {
            fetch('https://api.openweathermap.org/data/2.5/weather?zip='+inputValue.value+'&units=metric&APPID=f6d7533860dd063d6f8b9a59a102d37e')
                .then(response => response.json())
                .then(data => {

            var nameValue = data['name'];
            var descValue = data['weather'][0]['description'];
            var tempValue = data['main']['temp'];
            var iconValue = data['weather'][0]['icon'];
                    
                    showName.innerHTML = nameValue;
                    showTemp.innerHTML = tempValue + "℃";
                    showDesc.innerHTML = descValue;
                    showIcon.src = "https://openweathermap.org/img/wn/"+ iconValue + ".png"
            })
            
        })


        var resetObject = document.getElementById('reset')

            resetObject.addEventListener('click', function() {

            inputValue.value = "";
            showName.innerHTML = "";
            showTemp.innerHTML = "";
            showDesc.innerHTML = "";
            showIcon.src = "";

               
               
           
            })
      



    
