const myGameContainer = document.querySelector(".row")

window.onload = oyunlariGetir

async function oyunlariGetir() {
    let unvan = "mycustomdb.json"
    const gelenData = await fetch(unvan)
    const hazirlanmisData = await gelenData.json()
    console.log(hazirlanmisData)
    for(let i=0; i<hazirlanmisData.length; i++){
        myGameContainer.innerHTML += `<div class="col-12 col-md-6 col-lg-3">
        <div class="card" style="width: 18rem;">
          <img src="${hazirlanmisData[i].image}" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">${hazirlanmisData[i].oyun_adi}</h5>
            <p class="card-text">${hazirlanmisData[i].oyun_qiymeti}</p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
          </div>
        </div> `
    }

}



{/* <div class="col-12 col-md-6 col-lg-3">
        <div class="card" style="width: 18rem;">
          <img src="..." class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
          </div>
        </div>
</div> */}