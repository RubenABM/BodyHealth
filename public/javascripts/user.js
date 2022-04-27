window.onload = async function() {
    userId = sessionStorage.getItem("userId");
    console.log("setItem->userId = " + userId);
    try {

        let user = await $.ajax({
            url: "/api/users/" + userId,
            method: "get",
            dataType: "json"
        });
        console.log("[product] product = " + JSON.stringify(product));
        document.getElementById("name").innerHTML = product.prod_name;
        document.getElementById("price").innerHTML = product.prod_price;
        document.getElementById("type").innerHTML = product.type_name;
        document.getElementById("id").innerHTML = product.prod_id;
    } catch (err) {
        console.log(err);
        let mainElem = document.getElementById("main");
        if (err.status == 404)
            mainElem.innerHTML =
            "<h1>" + err.responseJSON.msg + "</h1>" + "<h2>Please select an existing product</h2>";
        else mainElem.innerHTML =
            "<h1>Server problems, please try later</h1>";
    }
}