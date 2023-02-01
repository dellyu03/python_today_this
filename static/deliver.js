axios.get("http://127.0.0.1:5001/deliverdata")
    .then(function(result){
        var infoArray = result.data
        shop_name = infoArray[0];
        min_price = infoArray[1];
        deliver_fee = infoArray[2];
        rate = infoArray[3];
        shop_url = infoArray[4];
        shop_img = infoArray[5];
        console.log(shop_img)
        document.getElementById("store_name").innerHTML = '가게 이름 : ' + shop_name;
        document.getElementById("min").innerHTML = '최소 주문 금액 : ' + min_price;
        document.getElementById("deliver_fee").innerHTML = '배달비 : ' + deliver_fee;
        document.getElementById("rate").innerHTML = '평점 : ' + rate;
        document.getElementById("url").href = shop_url;
        document.getElementById("url").innerHTML = '클릭하여 주문 링크로 가기';
        document.getElementById("shop-image").src = shop_img;
    }).catch(function(eroor){
        console.error('error 발생 :',error);
    });
