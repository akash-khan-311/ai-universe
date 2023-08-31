const handleLoadData = async () => {
  const res = await fetch("https://openapi.programming-hero.com/api/ai/tools");
  const data = await res.json();

  const aiData = data.data.tools;
  showAiData(aiData);
};

const showAiData = (data) => {
  const cardContainer = document.getElementById("card-container");

  data.forEach((singleData) => {
    const card = document.createElement("div");
    console.log(singleData);
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
                  <button class="btn btn-primary">Buy Now</button>
                </div>
              </div>
    

    
    
    `;
    cardContainer.appendChild(card);
  });
};

handleLoadData();
