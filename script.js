const recipes = [
  {
    name: "ピザ",
    image: "images/piza.png",
    time: "40分",
    level: "普通",
    ingredients: ["小麦粉", "チーズ", "トマト", "トマトソース", "牛肉", "豚肉", "ピーマン", "たまねぎ"],
    steps: ["生地を作る", "ソースをぬる", "具をのせる", "チーズをかける", "オーブンで焼く"]
  },
  {
    name: "カレー",
    image: "images/curry.png",
    time: "30分",
    level: "かんたん",
    ingredients: ["にんじん", "たまねぎ", "じゃがいも", "牛肉", "豚肉", "鶏肉", "カレールー", "水"],
    steps: ["材料を切る", "肉と野菜を炒める", "水を入れて煮る", "カレールーを入れる"]
  },
  {
    name: "肉じゃが",
    image: "images/nikuzyaga.png",
    time: "35分",
    level: "普通",
    ingredients: ["じゃがいも", "にんじん", "たまねぎ", "牛肉", "豚肉", "しょうゆ", "砂糖", "みりん", "だし"],
    steps: ["材料を切る", "肉と野菜を炒める", "だしで煮る", "しょうゆ・砂糖・みりんで味をつける"]
  },
  {
    name: "野菜炒め",
    image: "images/yasaiitame.png",
    time: "15分",
    level: "かんたん",
    ingredients: ["にんじん", "たまねぎ", "ピーマン", "キャベツ", "もやし", "豚肉", "塩", "こしょう"],
    steps: ["材料を切る", "肉を炒める", "野菜を入れて炒める", "塩こしょうで味をつける"]
  },
  {
    name: "味噌汁",
    image: "images/miso.png",
    time: "10分",
    level: "かんたん",
    ingredients: ["豆腐", "わかめ", "ネギ", "たまねぎ", "味噌", "だし"],
    steps: ["だしを温める", "具を入れる", "味噌をとく"]
  },
  {
    name: "チャーハン",
    image: "images/tya-ha.png",
    time: "15分",
    level: "かんたん",
    ingredients: ["ごはん", "卵", "ネギ", "ハム", "豚肉", "しょうゆ", "塩", "こしょう"],
    steps: ["具材を切る", "卵を炒める", "ごはんを入れる", "具材を入れて味つけする"]
  },
  {
    name: "親子丼",
    image: "images/oyako.png",
    time: "20分",
    level: "普通",
    ingredients: ["鶏肉", "卵", "たまねぎ", "ごはん", "しょうゆ", "みりん", "だし"],
    steps: ["鶏肉とたまねぎを切る", "だしで煮る", "卵を入れる", "ごはんにのせる"]
  },
  {
    name: "パスタ",
    image: "images/pasta.png",
    time: "20分",
    level: "かんたん",
    ingredients: ["パスタ", "麺", "トマト", "にんにく", "ベーコン", "牛肉", "オリーブオイル", "塩"],
    steps: ["麺をゆでる", "ソースを作る", "麺とソースを混ぜる"]
  },
  {
    name: "オムレツ",
    image: "images/omu.png",
    time: "10分",
    level: "かんたん",
    ingredients: ["卵", "牛乳", "バター", "チーズ", "塩", "こしょう"],
    steps: ["卵と牛乳を混ぜる", "フライパンで焼く", "形を整える"]
  },
  {
    name: "ハンバーグ",
    image: "images/hannba-.png",
    time: "35分",
    level: "普通",
    ingredients: ["ひき肉", "牛ひき肉", "豚ひき肉", "たまねぎ", "卵", "パン粉", "牛乳", "塩", "こしょう"],
    steps: ["たまねぎをみじん切りにする", "材料を混ぜる", "形を作る", "フライパンで焼く"]
  },
  {
    name: "サラダ",
    image: "images/sarada.png",
    time: "10分",
    level: "かんたん",
    ingredients: ["きゅうり", "トマト", "レタス", "ブロッコリー", "ドレッシング"],
    steps: ["材料を洗う", "食べやすく切る", "盛りつける", "ドレッシングをかける"]
  },
  {
    name: "焼きそば",
    image: "images/yakisoba.png",
    time: "20分",
    level: "かんたん",
    ingredients: ["焼きそば麺", "麺", "キャベツ", "にんじん", "豚肉", "もやし", "ソース"],
    steps: ["材料を切る", "肉と野菜を炒める", "麺を入れる", "ソースで味つけする"]
  },

  {
    name: "唐揚げ",
    image: "images/karaage.png",
    time: "25分",
    level: "普通",
    ingredients: ["鶏肉", "しょうゆ", "酒", "にんにく", "しょうが", "片栗粉", "油"],
    steps: ["鶏肉を切る", "しょうゆ・酒・にんにく・しょうがで下味をつける", "片栗粉をまぶす", "油で揚げる"]
  },
  {
    name: "うどん",
    image: "images/udon.png",
    time: "15分",
    level: "かんたん",
    ingredients: ["うどん", "ネギ", "だし", "しょうゆ", "みりん", "卵", "わかめ"],
    steps: ["だしを温める", "しょうゆとみりんで味をつける", "うどんを入れる", "具をのせる"]
  },
  {
    name: "ラーメン",
    image: "images/ramen.png",
    time: "20分",
    level: "かんたん",
    ingredients: ["中華麺", "麺", "スープ", "ネギ", "卵", "チャーシュー", "もやし", "メンマ"],
    steps: ["スープを温める", "麺をゆでる", "器にスープと麺を入れる", "具をのせる"]
  },
  {
    name: "餃子",
    image: "images/gyoza.png",
    time: "30分",
    level: "普通",
    ingredients: ["餃子の皮", "豚ひき肉", "キャベツ", "ニラ", "にんにく", "しょうが", "しょうゆ", "ごま油"],
    steps: ["具材を細かく切る", "ひき肉と混ぜる", "皮で包む", "フライパンで焼く"]
  },
  {
    name: "春巻き",
    image: "images/harumaki.png",
    time: "35分",
    level: "普通",
    ingredients: ["春巻きの皮", "豚肉", "たけのこ", "しいたけ", "にんじん", "もやし", "しょうゆ", "油"],
    steps: ["具材を切る", "具材を炒める", "皮で包む", "油で揚げる"]
  },
  {
    name: "鍋",
    image: "images/nabe.png",
    time: "30分",
    level: "かんたん",
    ingredients: ["白菜", "ネギ", "豆腐", "しいたけ", "えのき", "鶏肉", "豚肉", "だし"],
    steps: ["材料を切る", "鍋にだしを入れる", "具材を入れて煮る"]
  },
  {
    name: "卵焼き",
    image: "images/tamagoyaki.png",
    time: "10分",
    level: "かんたん",
    ingredients: ["卵", "砂糖", "しょうゆ", "だし", "油"],
    steps: ["卵を混ぜる", "調味料を入れる", "フライパンで少しずつ焼く", "巻いて形を整える"]
  },
  {
    name: "きんぴら",
    image: "images/kinpira.png",
    time: "20分",
    level: "かんたん",
    ingredients: ["ごぼう", "にんじん", "しょうゆ", "砂糖", "みりん", "ごま", "ごま油", "唐辛子"],
    steps: ["ごぼうとにんじんを細く切る", "ごま油で炒める", "調味料を入れる", "ごまをかける"]
  },
  {
    name: "生姜焼き",
    image: "images/syougayaki.png",
    time: "20分",
    level: "かんたん",
    ingredients: ["豚肉", "しょうが", "しょうゆ", "みりん", "酒", "たまねぎ", "油"],
    steps: ["しょうがをすりおろす", "調味料を混ぜる", "豚肉を焼く", "たれをからめる"]
  },
  {
    name: "ホイル焼き",
    image: "images/hoiruyaki.png",
    time: "25分",
    level: "かんたん",
    ingredients: ["鮭", "きのこ", "えのき", "しいたけ", "たまねぎ", "バター", "塩", "こしょう"],
    steps: ["材料を切る", "アルミホイルにのせる", "バターをのせる", "包んで焼く"]
  },
  {
    name: "すき焼き",
    image: "images/sukiyaki.png",
    time: "30分",
    level: "普通",
    ingredients: ["牛肉", "白菜", "ネギ", "豆腐", "しらたき", "しいたけ", "卵", "しょうゆ", "砂糖"],
    steps: ["材料を切る", "牛肉を焼く", "調味料を入れる", "野菜と豆腐を入れて煮る"]
  },
  {
    name: "豚汁",
    image: "images/tonjiru.png",
    time: "30分",
    level: "普通",
    ingredients: ["豚肉", "だいこん", "にんじん", "ごぼう", "こんにゃく", "ネギ", "味噌", "だし"],
    steps: ["材料を切る", "豚肉と野菜を炒める", "だしで煮る", "味噌をとく"]
  },
  {
    name: "茶わん蒸し",
    image: "images/tyawanmushi.png",
    time: "30分",
    level: "むずかしい",
    ingredients: ["卵", "だし", "鶏肉", "しいたけ", "えび", "かまぼこ", "しょうゆ"],
    steps: ["卵とだしを混ぜる", "具材を器に入れる", "卵液を入れる", "蒸す"]
  },
  {
    name: "エビフライ",
    image: "images/ebifurai.png",
    time: "30分",
    level: "普通",
    ingredients: ["えび", "小麦粉", "卵", "パン粉", "油", "塩", "こしょう"],
    steps: ["えびの下処理をする", "小麦粉・卵・パン粉をつける", "油で揚げる"]
  },
  {
    name: "ローストビーフ",
    image: "images/roastbeef.png",
    time: "60分",
    level: "むずかしい",
    ingredients: ["牛肉", "塩", "こしょう", "にんにく", "油", "しょうゆ", "みりん"],
    steps: ["牛肉に下味をつける", "表面を焼く", "低温で火を通す", "薄く切る"]
  },
  {
    name: "ロールキャベツ",
    image: "images/rollcabbage.png",
    time: "45分",
    level: "普通",
    ingredients: ["キャベツ", "ひき肉", "たまねぎ", "卵", "パン粉", "トマト", "コンソメ"],
    steps: ["キャベツをゆでる", "具を混ぜる", "キャベツで包む", "スープで煮る"]
  },
  {
    name: "グラタン",
    image: "images/gratin.png",
    time: "40分",
    level: "普通",
    ingredients: ["マカロニ", "鶏肉", "たまねぎ", "牛乳", "バター", "小麦粉", "チーズ"],
    steps: ["マカロニをゆでる", "具材を炒める", "ホワイトソースを作る", "チーズをのせて焼く"]
  },
  {
    name: "ポテトサラダ",
    image: "images/potatosalad.png",
    time: "25分",
    level: "かんたん",
    ingredients: ["じゃがいも", "きゅうり", "にんじん", "ハム", "卵", "マヨネーズ", "塩", "こしょう"],
    steps: ["じゃがいもをゆでる", "野菜を切る", "材料を混ぜる", "マヨネーズで味つけする"]
  },
  {
    name: "コロッケ",
    image: "images/korokke.png",
    time: "40分",
    level: "普通",
    ingredients: ["じゃがいも", "ひき肉", "たまねぎ", "小麦粉", "卵", "パン粉", "油"],
    steps: ["じゃがいもをゆでる", "ひき肉とたまねぎを炒める", "形を作る", "衣をつけて揚げる"]
  },
  {
    name: "シチュー",
    image: "images/stew.png",
    time: "35分",
    level: "かんたん",
    ingredients: ["鶏肉", "にんじん", "たまねぎ", "じゃがいも", "ブロッコリー", "牛乳", "シチュールー"],
    steps: ["材料を切る", "肉と野菜を炒める", "水を入れて煮る", "シチュールーと牛乳を入れる"]
  },
  {
    name: "担々麺",
    image: "images/tantanmen.png",
    time: "30分",
    level: "普通",
    ingredients: ["中華麺", "豚ひき肉", "チンゲンサイ", "ネギ", "にんにく", "しょうが", "味噌", "ごま", "ラー油"],
    steps: ["ひき肉を炒める", "スープを作る", "麺をゆでる", "具材をのせる"]
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

  if (userIngredients.length === 0) {
    recipeList.innerHTML = `
      <div class="no-result">
        材料を入力してください。
      </div>
    `;
    return;
  }

  const matchedRecipes = recipes
    .map(recipe => {
      const matchCount = recipe.ingredients.filter(ingredient =>
        userIngredients.includes(ingredient)
      ).length;

      return {
        ...recipe,
        matchCount
      };
    })
    .filter(recipe => recipe.matchCount > 0)
    .sort((a, b) => b.matchCount - a.matchCount);

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
      return `
        <div class="recipe-item" data-index="${index}">
          <img 
            class="recipe-image" 
            src="${recipe.image}" 
            alt="${recipe.name}"
            onerror="this.src='images/no-image.png'"
          >

          <div class="recipe-body">
            <h2 class="recipe-title">${recipe.name}</h2>

            <div class="recipe-meta">
              <span class="badge">⏱ ${recipe.time}</span>
              <span class="badge">🔥 ${recipe.level}</span>
              <span class="badge">✅ ${recipe.matchCount}個一致</span>
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