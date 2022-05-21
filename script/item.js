import data from "./sample.js" 

function render(){
    for (var x of data.data){
        itemRender(x);
    }
}

function renderAddr(x){
    const addr = document.createElement("div");
    addr.innerHTML += (x.street)?(x.street + ", "):"";
    addr.innerHTML += x.ward?(x.ward + ", "):"";
    addr.innerHTML += x.district?(x.district + ", "):"";
    addr.innerHTML += x.province?x.province:"";
    addr.classList.add("house-addr")
    return addr
}


function itemRender(x){
    const list = document.getElementById('house-list')
    const item = document.createElement("a");
    item.href = "./product";
    item.classList.add("house-item")

    // create the img
    const img = document.createElement("div");
    img.classList.add("house-img");
    const status = document.createElement("div");
    status.innerText = x.status;
    status.classList.add("house-status");
    switch (x.status){
        case "Sẵn sàng":
            status.classList.add("ready");
            break;
        case "Trong 3 tháng":
            status.classList.add("nearly");
            break;
        default:
            status.classList.add("far");
            break
    }

    img.appendChild(status)
    item.appendChild(img)


    const addr = renderAddr(x.address)
    item.appendChild(addr)

    const title = document.createElement("div");
    title.innerText = x.title;
    title.classList.add("house-title");
    item.appendChild(title);

    const price = document.createElement("div");
    price.innerText = x.price + " VNĐ";
    price.classList.add("house-price");
    item.appendChild(price);

    const desc = document.createElement("div");
    desc.innerText = x.description;
    desc.classList.add("house-desc");
    item.appendChild(desc);

    list.appendChild(item)
}


function handleCagetory(){
    document.getElementById('house-list').innerHTML = null;
    var isBoarding = document.getElementById("boarding");
    var isApartment = document.getElementById("apartment");
    var isSelling = document.getElementById("selling");

    for (var x of data.data){
        if (!isBoarding.checked && !isApartment.checked && !isSelling.checked)
            itemRender(x);
        else{
            if (isBoarding.checked && x.cagetory == "Nhà trọ") itemRender(x);
            if (isApartment.checked && x.cagetory == "Chung Cư") itemRender(x);
            if (isSelling.checked && x.cagetory == "Nhà bán") itemRender(x);
        }
    }
}

function handleAddr(){
    document.getElementById('house-list').innerHTML = null;
    var province = document.getElementById("province").value;
    var district = document.getElementById("district").value;
    var ward = document.getElementById("ward").value;


    for (var x of data.data){
        if (!province) itemRender(x);
        else {
            if (province == x.address.province)
                if (!district) itemRender(x);
                else {
                    if (district == x.address.district)
                        if (!ward) itemRender(x);
                    else if (ward == x.address.ward) itemRender(x);
            }
        }
    }

}

function handlePrice(){
    
    document.getElementById('house-list').innerHTML = null;
    var floor = document.getElementById("floor").value;
    var cell = document.getElementById("cell").value;
    console.log(floor);
    console.log(cell)

    if (!floor && !cell) 
        for (var x of data.data){
            itemRender(x);
        }
    else if (!floor && cell){
        for (var x of data.data){
            if (x.price <= cell) itemRender(x);
        }
    }
    else if (floor && !cell){
        for (var x of data.data){
            if (x.price >= floor) itemRender(x);
        }
    }
    else if (floor && cell){
        for (var x of data.data){
            if (x.price <= cell && x.price >= floor) itemRender(x);
        }
    }
}

document.getElementById("boarding").addEventListener("change", handleCagetory)
document.getElementById("apartment").addEventListener("change", handleCagetory)
document.getElementById("selling").addEventListener("change", handleCagetory)
document.getElementById("province").addEventListener("change",handleAddr)
document.getElementById("district").addEventListener("change",handleAddr)
document.getElementById("ward").addEventListener("change",handleAddr)
document.getElementById("floor").addEventListener("change",handlePrice)
document.getElementById("cell").addEventListener("change",handlePrice)


render()
