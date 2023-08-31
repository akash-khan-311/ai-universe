const handleLoadData = async (isSeeMore) => {
  const res = await fetch("https://openapi.programming-hero.com/api/ai/tools");
  const data = await res.json();

  const aiData = data.data.tools;
  showAiData(aiData, isSeeMore);
};

const showAiData = (data, isSeeMore) => {
  const seeMoreBtn = document.getElementById("see-more");
  if (data.length > 6 && !isSeeMore) {
    seeMoreBtn.classList.remove("hidden");
  } else {
    seeMoreBtn.classList.add("hidden");
  }

  if (!isSeeMore) {
    data = data.slice(0, 6);
  }
  console.log(data);
  const cardContainer = document.getElementById("card-container");
  data.forEach((singleData) => {
    const card = document.createElement("div");

    card.classList = "card text-white card-bg shadow-xl";
    card.innerHTML = `
    
            <figure>
                <img
                  src="${singleData?.image}"
                  alt="Shoes"
                />
              </figure>
              <div class="card-body">
                <div>
                    <h2 class="card-title">Feature</h2>
                    <ol class="list-decimal list-inside">
                        <li>${singleData.features[0]}</li>
                        <li>${singleData.features[1]}</li>
                        <li>${singleData.features[2]}</li>
                    </ol>
                
                </div>
                <hr class="my-4"/>
                <div class="card-actions justify-between">
                    <div>
                        <h2 class="text-xl font-semibold">${singleData.name}</h2>
                        <p>Date: ${singleData?.published_in}</p>
                    </div>
                  <button onclick="handleShowModal('${singleData.id}'); show_modal_1.showModal()" class="btn btn-primary">Details</button>
                </div>
              </div>
    

    
    
    `;
    cardContainer.appendChild(card);
  });
};

const handleShowModal = (id) => {
  fetch(`https://openapi.programming-hero.com/api/ai/tool/${id}`)
    .then((res) => res.json())
    .then((data) => showModal(data.data));
};

const showModal = (data) => {
  console.log(data);
  const modalContainer = document.getElementById("modal-container");
  modalContainer.textContent = "";
  const modal = document.createElement("div");
  modal.classList = "grid grid-cols-2 gap-5 justify-center mx-auto";
  modal.innerHTML = `
  
  
    <div class="card  bg-red-100 shadow-xl">
  
  <div class="card-body">
    <h2 class="card-title">${data.description}</h2>
    <div class="flex justify-center items-center gap-3">
    
        <div class="p-5 bg-white rounded-lg">
          <p>${data.pricing[0].price} ${data.pricing[0].plan}</p>
        </div>
        <div class="p-5 bg-white rounded-lg">
          <p>${data.pricing[0].price} ${data.pricing[0].plan}</p>
        </div>
        <div class="p-5 bg-white rounded-lg">
          <p>${data.pricing[0].price} ${data.pricing[0].plan}</p>
        </div>
    
    </div>
    <div class="flex justify-between">
      <div>
        <h4 class="text-xl font-semibold">Features</h4>
        <ol>
          <li>${data.features[1].feature_name}</li>
          <li>${data.features[2].feature_name}</li>
          <li>${data.features[3].feature_name}</li>
        </ol>
      </div>
      <div>
        <h4 class="text-xl font-semibold">Integrations</h4>
        <ol>
          <li>${data.integrations[0]}</li>
          <li>${data.integrations[1]}</li>
          <li>${data.integrations[2]}</li>
        </ol>
      </div>
    
    </div>
    <div class="card-actions justify-end">
      <button class="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>



<div class="card  bg-base-100 shadow-xl">
  <figure><img src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
  <div class="card-body">
    <h2 class="card-title">Shoes!</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div class="card-actions justify-end">
      <button class="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
  
  `;
  modalContainer.appendChild(modal);
};

const handleShowAll = () => {
  handleLoadData(true);
};

handleLoadData();
