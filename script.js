const recipes = [
  {
    name: "ピザ",
    image: "images/piza.png",
    time: "40分",
    level: "普通",
    ingredients: ["小麦粉", "チーズ", "トマト", "お肉"],
    steps: ["生地を作る", "具をのせる", "オーブンで焼く"]
  },
  {
    name: "カレー",
    image: "images/curry.png",
    time: "30分",
    level: "かんたん",
    ingredients: ["にんじん", "たまねぎ", "じゃがいも", "お肉"],
    steps: ["材料を切る", "炒める", "煮る", "ルーを入れて完成"]
  },
  {
    name: "肉じゃが",
    image: "images/nikuzyaga.png",
    time: "35分",
    level: "普通",
    ingredients: ["じゃがいも", "にんじん", "たまねぎ", "お肉"],
    steps: ["材料を切る", "炒める", "だしで煮る", "味をつける"]
  },
  {
    name: "野菜炒め",
    image: "images/yasaiitame.png",
    time: "15分",
    level: "かんたん",
    ingredients: ["にんじん", "たまねぎ", "ピーマン", "キャベツ"],
    steps: ["材料を切る", "フライパンで炒める", "塩こしょうで味をつける"]
  },
  {
    name: "味噌汁",
    image: "images/miso.png",
    time: "10分",
    level: "かんたん",
    ingredients: ["たまねぎ", "豆腐", "わかめ", "ネギ"],
    steps: ["だしを作る", "具を入れる", "味噌をとく"]
  },
  {
    name: "チャーハン",
    image: "images/tya-ha.png",
    time: "15分",
    level: "かんたん",
    ingredients: ["ごはん", "卵", "ネギ", "ハム"],
    steps: ["材料を切る", "卵を炒める", "ごはんを入れる", "味をつける"]
  },
  {
    name: "親子丼",
    image: "images/oyako.png",
    time: "20分",
    level: "普通",
    ingredients: ["鶏肉", "卵", "たまねぎ", "ごはん"],
    steps: ["材料を切る", "鶏肉とたまねぎを煮る", "卵を入れる", "ごはんにのせる"]
  },
  {
    name: "パスタ",
    image: "images/pasta.png",
    time: "20分",
    level: "かんたん",
    ingredients: ["麺", "トマト", "にんにく", "お肉"],
    steps: ["麺をゆでる", "ソースを作る", "麺と混ぜる"]
  },
  {
    name: "オムレツ",
    image: "images/omu.png",
    time: "10分",
    level: "かんたん",
    ingredients: ["卵", "牛乳", "バター"],
    steps: ["卵と牛乳を混ぜる", "フライパンで焼く", "形を整える"]
  },
  {
    name: "ハンバーグ",
    image: "images/hannba-.png",
    time: "35分",
    level: "普通",
    ingredients: ["お肉", "たまねぎ", "卵", "パン粉"],
    steps: ["材料を混ぜる", "形を作る", "フライパンで焼く"]
  },
  {
    name: "サラダ",
    image: "images/sarada.png",
    time: "10分",
    level: "かんたん",
    ingredients: ["きゅうり", "トマト", "レタス", "ブロッコリー"],
    steps: ["材料を洗う", "食べやすく切る", "盛りつける"]
  },
  {
    name: "焼きそば",
    image: "images/yakisoba.png",
    time: "20分",
    level: "かんたん",
    ingredients: ["麺", "キャベツ", "にんじん", "お肉"],
    steps: ["材料を切る", "炒める", "麺を入れる", "ソースで味つけする"]
  }
];

const searchBtn = document.getElementById("searchBtn");
const recipeList = document.getElementById("recipeList");
const ingredientsInput = document.getElementById("ingredientsInput");

searchBtn.addEventListener("click", searchRecipes);

ingredientsInput.addEventListener("keydown", event => {
  if (event.key === "Enter") {
    searchRecipes();
  }
});

function searchRecipes() {
  const input = ingredientsInput.value;

  const userIngredients = input
    .split(",")
    .map(item => item.trim())
    .filter(item => item !== "");

  const matchedRecipes = recipes.filter(recipe =>
    recipe.ingredients.some(ingredient => userIngredients.includes(ingredient))
  );

  if (userIngredients.length === 0) {
    recipeList.innerHTML = `
      <div class="no-result">
        材料を入力してください。
      </div>
    `;
    return;
  }

  if (matchedRecipes.length === 0) {
    recipeList.innerHTML = `
      <div class="no-result">
        作れる料理が見つかりませんでした。
      </div>
    `;
    return;
  }

  recipeList.innerHTML = matchedRecipes
    .map((recipe, index) => {
      const matchCount = recipe.ingredients.filter(ingredient =>
        userIngredients.includes(ingredient)
      ).length;

      return `
        <div class="recipe-item" data-index="${index}">
          <img class="recipe-image" src="${recipe.image}" alt="${recipe.name}">

          <div class="recipe-body">
            <h2 class="recipe-title">${recipe.name}</h2>

            <div class="recipe-meta">
              <span class="badge">⏱ ${recipe.time}</span>
              <span class="badge">🔥 ${recipe.level}</span>
              <span class="badge">✅ ${matchCount}個一致</span>
            </div>

            <p class="recipe-text">クリックして作り方を見る</p>
            <div class="detail" id="detail-${index}"></div>
          </div>
        </div>
      `;
    })
    .join("");

  document.querySelectorAll(".recipe-item").forEach(item => {
    item.addEventListener("click", () => {
      const index = item.dataset.index;
      const recipe = matchedRecipes[index];
      const detail = document.getElementById(`detail-${index}`);

      if (detail.innerHTML === "") {
        detail.innerHTML = `
          <div class="detail-content">
            <p><strong>必要な材料:</strong> ${recipe.ingredients.join("、")}</p>
            <p><strong>作り方:</strong></p>
            <ol>
              ${recipe.steps.map(step => `<li>${step}</li>`).join("")}
            </ol>
          </div>
        `;
      } else {
        detail.innerHTML = "";
      }
    });
  });
}