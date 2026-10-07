/* =========================
   ANIME DATA
========================= */

/* =========================
   ANIME DATA - 50 ANIME
========================= */

const animeList = [

    /* =========================
       ACTION / ADVENTURE
    ========================= */

    {
        id: 1,
        title: "One Piece",
        rating: 9.0,
        image: "https://cdn.myanimelist.net/images/anime/1244/138851.jpg",
        genres: ["Action", "Adventure", "Fantasy"],
        watchUrl: "https://animesalt.cx/series/one-piece/"
    },

    {
        id: 2,
        title: "Hunter x Hunter",
        rating: 9.1,
        image: "https://cdn.myanimelist.net/images/anime/1337/99013.jpg",
        genres: ["Action", "Adventure", "Fantasy"],
        watchUrl: "https://animesalt.cx/series/hunter-x-hunter/"
    },

    {
        id: 3,
        title: "Bleach",
        rating: 8.9,
        image: "https://cdn.myanimelist.net/images/anime/1908/135431.jpg",
        genres: ["Action", "Adventure", "Supernatural"],
        watchUrl: "https://animesalt.cx/series/bleach-thousand-year-blood-war/"
    },

    {
        id: 4,
        title: "Naruto Shippuden",
        rating: 8.7,
        image: "https://cdn.myanimelist.net/images/anime/1565/111305.jpg",
        genres: ["Action", "Adventure", "Fantasy"],
        watchUrl: "https://animesalt.cx/series/naruto-shippuden/"
    },

    {
        id: 5,
        title: "Demon Slayer",
        rating: 8.6,
        image: "https://cdn.myanimelist.net/images/anime/1286/99889.jpg",
        genres: ["Action", "Fantasy", "Supernatural"],
        watchUrl: "https://animesalt.cx/series/demon-slayer/"
    },

    {
        id: 6,
        title: "Attack on Titan",
        rating: 9.1,
        image: "https://cdn.myanimelist.net/images/anime/10/47347.jpg",
        genres: ["Action", "Thriller", "Fantasy"],
        watchUrl: "https://animesalt.cx/series/attack-on-titan/"
    },

    {
        id: 7,
        title: "Jujutsu Kaisen",
        rating: 8.6,
        image: "https://cdn.myanimelist.net/images/anime/1171/109222.jpg",
        genres: ["Action", "Supernatural", "Fantasy"],
        watchUrl: "#"
    },

    {
        id: 8,
        title: "My Hero Academia",
        rating: 8.0,
        image: "https://cdn.myanimelist.net/images/anime/10/78745.jpg",
        genres: ["Action", "Adventure", "Supernatural"],
        watchUrl: "#"
    },

    {
        id: 9,
        title: "Black Clover",
        rating: 8.1,
        image: "https://cdn.myanimelist.net/images/anime/2/88336.jpg",
        genres: ["Action", "Adventure", "Fantasy"],
        watchUrl: "#"
    },

    {
        id: 10,
        title: "Fairy Tail",
        rating: 7.9,
        image: "https://cdn.myanimelist.net/images/anime/5/18179.jpg",
        genres: ["Action", "Adventure", "Fantasy"],
        watchUrl: "#"
    },


    /* =========================
       SHONEN / FIGHTING
    ========================= */

    {
        id: 11,
        title: "Dragon Ball",
        rating: 8.0,
        image: "https://cdn.myanimelist.net/images/anime/1887/92364.jpg",
        genres: ["Action", "Adventure", "Comedy"],
        watchUrl: "#"
    },

    {
        id: 12,
        title: "Dragon Ball Z",
        rating: 8.4,
        image: "https://cdn.myanimelist.net/images/anime/1277/142022.jpg",
        genres: ["Action", "Adventure", "Fantasy"],
        watchUrl: "#"
    },

    {
        id: 13,
        title: "Dragon Ball Super",
        rating: 7.4,
        image: "https://cdn.myanimelist.net/images/anime/7/74606.jpg",
        genres: ["Action", "Adventure", "Fantasy"],
        watchUrl: "#"
    },

    {
        id: 14,
        title: "Fullmetal Alchemist: Brotherhood",
        rating: 9.1,
        image: "https://cdn.myanimelist.net/images/anime/1208/94745.jpg",
        genres: ["Action", "Adventure", "Fantasy"],
        watchUrl: "#"
    },

    {
        id: 15,
        title: "JoJo's Bizarre Adventure",
        rating: 8.5,
        image: "https://cdn.myanimelist.net/images/anime/3/40409.jpg",
        genres: ["Action", "Adventure", "Supernatural"],
        watchUrl: "#"
    },

    {
        id: 16,
        title: "Mob Psycho 100",
        rating: 8.8,
        image: "https://cdn.myanimelist.net/images/anime/8/80356.jpg",
        genres: ["Action", "Comedy", "Supernatural"],
        watchUrl: "#"
    },

    {
        id: 17,
        title: "One Punch Man",
        rating: 8.5,
        image: "https://cdn.myanimelist.net/images/anime/12/76049.jpg",
        genres: ["Action", "Comedy", "Supernatural"],
        watchUrl: "#"
    },

    {
        id: 18,
        title: "Chainsaw Man",
        rating: 8.5,
        image: "https://cdn.myanimelist.net/images/anime/1806/126216.jpg",
        genres: ["Action", "Fantasy", "Supernatural"],
        watchUrl: "#"
    },

    {
        id: 19,
        title: "Kaiju No. 8",
        rating: 8.8,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDAOCOykmUyaIjuu7OGC2MXghizur2KTRfKQZ4AKhLpywgjL6UDru8_tj-07m09_F6FvERm8_E35Z80gyO0qx-3aBNSZVdbJW7s2T3oyAd&s=10",
        genres: ["Action", "Fantasy", "Supernatural"],
        watchUrl: "https://animesalt.cx/series/kaiju-no-8/"
    },

    {
        id: 20,
        title: "Solo Leveling",
        rating: 8.8,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQ-6-hVd5MzlqOpzot2ASAMmnwLW9KJO4fQK4_AE-K2vQTUP6i3nGrLdo6NHDbI03gUqMnUpyqAQitc4HWCK1bM7PrBzIJ5wv4uL3y-1Hu&s=10",
        genres: ["Action", "Adventure", "Fantasy"],
        watchUrl: "#"
    },


    /* =========================
       FANTASY / ISEKAI
    ========================= */

    {
        id: 21,
        title: "That Time I Got Reincarnated as a Slime",
        rating: 8.1,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEsOxqWKWyuU923SAz0iKNKrwZox3gty5DS4JUQKqfhY8fNu03BsJxjFGafsNKqSMIpGE4uIJjeJ58hsy2QNS20xY1c4fDmSLRXYKx-tJt&s=10",
        genres: ["Isekai", "Fantasy", "Adventure"],
        watchUrl: "https://animesalt.cx/series/that-time-i-got-reincarnated-as-a-slime/"
    },

    {
        id: 22,
        title: "Re:ZERO -Starting Life in Another World-",
        rating: 8.2,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTigxqJpH_OrMVQvDFtWaAUTZp5mMabu517z8e0OeMuWFVe284p7sZ93GCYlrrw-bs7I-L4FzcMvjqme-qQHgYoF5vtjT_gy9HglnrkgOik&s=10",
        genres: ["Isekai", "Fantasy", "Thriller"],
        watchUrl: "#"
    },

    {
        id: 23,
        title: "Mushoku Tensei",
        rating: 8.3,
        image: "https://cdn.myanimelist.net/images/anime/1530/117776.jpg",
        genres: ["Isekai", "Fantasy", "Adventure"],
        watchUrl: "#"
    },

    {
        id: 24,
        title: "Sword Art Online",
        rating: 7.5,
        image: "https://cdn.myanimelist.net/images/anime/11/39717.jpg",
        genres: ["Isekai", "Action", "Fantasy"],
        watchUrl: "#"
    },

    {
        id: 25,
        title: "Overlord",
        rating: 8.0,
        image: "https://cdn.myanimelist.net/images/anime/7/88019.jpg",
        genres: ["Isekai", "Fantasy", "Action"],
        watchUrl: "#"
    },

    {
        id: 26,
        title: "KonoSuba",
        rating: 8.1,
        image: "https://cdn.myanimelist.net/images/anime/8/77831.jpg",
        genres: ["Isekai", "Fantasy", "Comedy"],
        watchUrl: "#"
    },

    {
        id: 27,
        title: "Frieren: Beyond Journey's End",
        rating: 9.3,
        image: "https://cdn.myanimelist.net/images/anime/1015/138006.jpg",
        genres: ["Fantasy", "Adventure", "Drama"],
        watchUrl: "#"
    },

    {
        id: 28,
        title: "The Rising of the Shield Hero",
        rating: 7.9,
        image: "https://cdn.myanimelist.net/images/anime/1490/101365.jpg",
        genres: ["Isekai", "Fantasy", "Adventure"],
        watchUrl: "#"
    },

    {
        id: 29,
        title: "No Game No Life",
        rating: 8.1,
        image: "https://cdn.myanimelist.net/images/anime/5/65187.jpg",
        genres: ["Isekai", "Fantasy", "Comedy"],
        watchUrl: "#"
    },

    {
        id: 30,
        title: "The Eminence in Shadow",
        rating: 8.3,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwFh1Z94h1GkalEyJJoqtoxYX-9MvT6XbtyFvYDvTPEtQfLprgW4snIekLNJwPbYdKI_VH9QP9Bw7Cv907axgUPiHoi_9HjQLVuUj2Fi09pw&s=10",
        genres: ["Isekai", "Action", "Fantasy"],
        watchUrl: "#"
    },


    /* =========================
       ROMANCE / SLICE OF LIFE
    ========================= */

    {
        id: 31,
        title: "Your Name",
        rating: 8.8,
        image: "https://cdn.myanimelist.net/images/anime/5/87048.jpg",
        genres: ["Romance", "Fantasy", "Drama"],
        watchUrl: "#"
    },

    {
        id: 32,
        title: "A Silent Voice",
        rating: 8.9,
        image: "https://cdn.myanimelist.net/images/anime/1122/96435.jpg",
        genres: ["Romance", "Drama", "School"],
        watchUrl: "#"
    },

    {
        id: 33,
        title: "Your Lie in April",
        rating: 8.6,
        image: "https://cdn.myanimelist.net/images/anime/3/67177.jpg",
        genres: ["Romance", "Drama", "School"],
        watchUrl: "#"
    },

    {
        id: 34,
        title: "Horimiya",
        rating: 8.4,
        image: "https://cdn.myanimelist.net/images/anime/1695/111486.jpg",
        genres: ["Romance", "Comedy", "School"],
        watchUrl: "#"
    },

    {
        id: 35,
        title: "Toradora!",
        rating: 8.0,
        image: "https://cdn.myanimelist.net/images/anime/13/22128.jpg",
        genres: ["Romance", "Comedy", "School"],
        watchUrl: "#"
    },

    {
        id: 36,
        title: "My Dress-Up Darling",
        rating: 8.2,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwFrrxBCpiXkIJ2rUADa69uGhNrCywSSfKtMqylaVsIG_IARuk8eysQ20fYmXisB5sR2p8qcqNFNyGPTuiazGxh8F1Uu8wnzkSMeKV1v3RVA&s=10",
        genres: ["Romance", "Comedy", "School"],
        watchUrl: "#"
    },

    {
        id: 37,
        title: "Kaguya-sama: Love Is War",
        rating: 8.4,
        image: "https://cdn.myanimelist.net/images/anime/1295/106551.jpg",
        genres: ["Romance", "Comedy", "School"],
        watchUrl: "#"
    },

    {
        id: 38,
        title: "Rascal Does Not Dream of Bunny Girl Senpai",
        rating: 8.2,
        image: "https://cdn.myanimelist.net/images/anime/1301/93586.jpg",
        genres: ["Romance", "Drama", "Supernatural"],
        watchUrl: "#"
    },


    /* =========================
       SPORTS
    ========================= */

    {
        id: 39,
        title: "Blue Lock",
        rating: 8.2,
        image: "https://cdn.myanimelist.net/images/anime/1258/126929.jpg",
        genres: ["Sports", "Action", "Drama"],
        watchUrl: "#"
    },

    {
        id: 40,
        title: "Haikyuu!!",
        rating: 8.8,
        image: "https://cdn.myanimelist.net/images/anime/7/76014.jpg",
        genres: ["Sports", "Comedy", "Drama"],
        watchUrl: "#"
    },

    {
        id: 41,
        title: "Kuroko's Basketball",
        rating: 8.0,
        image: "https://cdn.myanimelist.net/images/anime/11/50453.jpg",
        genres: ["Sports", "Action", "Comedy"],
        watchUrl: "#"
    },

    {
        id: 42,
        title: "Slam Dunk",
        rating: 8.5,
        image: "https://cdn.myanimelist.net/images/anime/7/20898.jpg",
        genres: ["Sports", "Comedy", "Drama"],
        watchUrl: "#"
    },


    /* =========================
       THRILLER / MYSTERY
    ========================= */

    {
        id: 43,
        title: "Death Note",
        rating: 8.6,
        image: "https://cdn.myanimelist.net/images/anime/9/9453.jpg",
        genres: ["Thriller", "Supernatural", "Mystery"],
        watchUrl: "#"
    },

    {
        id: 44,
        title: "Steins;Gate",
        rating: 9.1,
        image: "https://cdn.myanimelist.net/images/anime/1935/127974.jpg",
        genres: ["Thriller", "Sci-Fi", "Drama"],
        watchUrl: "#"
    },

    {
        id: 45,
        title: "Monster",
        rating: 8.9,
        image: "https://cdn.myanimelist.net/images/anime/10/18793.jpg",
        genres: ["Thriller", "Mystery", "Drama"],
        watchUrl: "#"
    },

    {
        id: 46,
        title: "Code Geass",
        rating: 8.7,
        image: "https://cdn.myanimelist.net/images/anime/1032/135088.jpg",
        genres: ["Action", "Thriller", "Drama"],
        watchUrl: "#"
    },


    /* =========================
       COMEDY
    ========================= */

    {
        id: 47,
        title: "Spy x Family",
        rating: 8.5,
        image: "https://cdn.myanimelist.net/images/anime/1441/122795.jpg",
        genres: ["Comedy", "Action", "Family"],
        watchUrl: "#"
    },

    {
        id: 48,
        title: "Gintama",
        rating: 8.9,
        image: "https://cdn.myanimelist.net/images/anime/10/73274.jpg",
        genres: ["Comedy", "Action", "Adventure"],
        watchUrl: "#"
    },

    {
        id: 49,
        title: "The Disastrous Life of Saiki K.",
        rating: 8.4,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxGMweldvMxfvi8pqYhhOwvolCztoeRpNLMNkymR5MhhPK66ZbvDz1jzgo4M9ixKmppuLJUtNHj7SWpNmQSVzyT57-_3lCq4D0f7su3eJL&s=10",
        genres: ["Comedy", "Supernatural", "School"],
        watchUrl: "#"
    },

    {
        id: 50,
        title: "Mashle: Magic and Muscles",
        rating: 8.0,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9wIslfAwanLTnN5qKaTOB4bI-olV5gr638PHyzna8BcPBd5hLjMJCUhInvUt4x_WYaVD6rjzb7r6RaqlizAUCJBuRgDjnb4-YJBE5Q9p_&s=10",
        genres: ["Action", "Comedy", "Fantasy"],
        watchUrl: "#"
    }

];

/* =========================
   HTML ELEMENTS
========================= */

const animeContainer =
    document.getElementById("animeContainer");

const recommendationContainer =
    document.getElementById("recommendationContainer");

const favoritesContainer =
    document.getElementById("favoritesContainer");

const searchInput =
    document.getElementById("searchInput");

const searchBtn =
    document.getElementById("searchBtn");

const recommendBtn =
    document.getElementById("recommendBtn");

const themeBtn =
    document.getElementById("themeBtn");

const genreButtons =
    document.querySelectorAll(".genre-btn");


/* =========================
   FAVORITES
========================= */

let favorites =
    JSON.parse(localStorage.getItem("favorites")) || [];


/* =========================
   SELECTED GENRES
========================= */

let selectedGenres = [];


/* =========================
   CREATE ANIME CARD
========================= */

function createAnimeCard(anime) {

    const isFavorite =
        favorites.includes(anime.id);


    const card =
        document.createElement("div");

    card.className = "anime-card";


    card.innerHTML = `

        <button
            class="favorite-btn ${isFavorite ? "active" : ""}"
            onclick="toggleFavorite(${anime.id})"
        >

            ${isFavorite ? "❤️" : "🤍"}

        </button>


        <img
            class="anime-image"
            src="${anime.image}"
            alt="${anime.title}"
        >


        <div class="anime-info">

            <h3>
                ${anime.title}
            </h3>

            <div class="rating">

                ⭐ ${anime.rating}

            </div>


            <div class="genres">

                ${anime.genres
                    .map(
                        genre =>
                        `<span class="genre">${genre}</span>`
                    )
                    .join("")
                }

            </div>

            <button class="watch-btn" onclick="openWatchMenu(${anime.id})">
                ▶ Watch Anime
            </button>

        </div>

    `;


    return card;
}


/* =========================
   WATCH SOURCE MENU
========================= */

const watchSources = [
    { name: "AnimeSalt", url: "https://animesalt.cx/" },
    { name: "Anime World", url: "https://watchanimeworld.one/" },
    { name: "9anime", url: "https://9anime.org.lv/" },
    { name: "Animlex", url: "https://animlex.site/" }
];

function openWatchMenu(animeId) {
    const anime = animeList.find(item => item.id === animeId);
    if (!anime) return;

    let modal = document.getElementById("watchModal");
    if (!modal) {
        modal = document.createElement("div");
        modal.id = "watchModal";
        modal.className = "watch-modal";
        modal.innerHTML = `
            <div class="watch-modal-backdrop" onclick="closeWatchMenu()"></div>
            <div class="watch-modal-content" role="dialog" aria-modal="true">
                <button class="watch-close" onclick="closeWatchMenu()" aria-label="Close">×</button>
                <div class="watch-modal-icon">▶</div>
                <h2 id="watchModalTitle"></h2>
                <p>Choose a watch source</p>
                <div id="watchSourceList" class="watch-source-list"></div>
            </div>`;
        document.body.appendChild(modal);
    }

    document.getElementById("watchModalTitle").textContent = `Watch ${anime.title}`;
    const list = document.getElementById("watchSourceList");
    list.innerHTML = watchSources.map(source => {
        const disabled = !source.url;
        return `<button class="watch-source ${disabled ? "disabled" : ""}" ${disabled ? "disabled" : `onclick="window.open('${source.url}', '_blank', 'noopener,noreferrer')"`}>
            <span>${source.name}</span>
            <span>${disabled ? "Link not configured" : "Open ↗"}</span>
        </button>`;
    }).join("");

    modal.classList.add("show");
    document.body.classList.add("modal-open");
}

function closeWatchMenu() {
    const modal = document.getElementById("watchModal");
    if (modal) modal.classList.remove("show");
    document.body.classList.remove("modal-open");
}

document.addEventListener("keydown", event => {
    if (event.key === "Escape") closeWatchMenu();
});


/* =========================
   DISPLAY ANIME
========================= */

function displayAnime(list) {

    animeContainer.innerHTML = "";


    if (list.length === 0) {

        animeContainer.innerHTML = `

            <p class="empty-message">
                No anime found 😢
            </p>

        `;

        return;
    }


    list.forEach(anime => {

        animeContainer.appendChild(
            createAnimeCard(anime)
        );

    });

}


/* =========================
   DISPLAY FAVORITES
========================= */

function displayFavorites() {

    favoritesContainer.innerHTML = "";


    const favoriteAnime =
        animeList.filter(anime =>
            favorites.includes(anime.id)
        );


    if (favoriteAnime.length === 0) {

        favoritesContainer.innerHTML = `

            <p class="empty-message">
                You haven't added any favorites yet.
            </p>

        `;

        return;
    }


    favoriteAnime.forEach(anime => {

        favoritesContainer.appendChild(
            createAnimeCard(anime)
        );

    });

}


/* =========================
   TOGGLE FAVORITE
========================= */

function toggleFavorite(id) {

    if (favorites.includes(id)) {

        favorites =
            favorites.filter(
                favoriteId => favoriteId !== id
            );

    } else {

        favorites.push(id);

    }


    localStorage.setItem(
        "favorites",
        JSON.stringify(favorites)
    );


    displayAnime(animeList);

    displayFavorites();

}


/* =========================
   SEARCH
========================= */

function searchAnime() {

    const searchText =
        searchInput.value
            .toLowerCase()
            .trim();


    const results =
        animeList.filter(anime =>
            anime.title
                .toLowerCase()
                .includes(searchText)
        );


    displayAnime(results);


    document
        .getElementById("anime")
        .scrollIntoView({
            behavior: "smooth"
        });

}


/* =========================
   SEARCH BUTTON
========================= */

searchBtn.addEventListener(
    "click",
    searchAnime
);


/* =========================
   SEARCH WHILE TYPING
========================= */

searchInput.addEventListener(
    "input",
    searchAnime
);


/* =========================
   GENRE SELECTION
========================= */

genreButtons.forEach(button => {

    button.addEventListener(
        "click",
        () => {

            const genre =
                button.dataset.genre;


            if (selectedGenres.includes(genre)) {

                selectedGenres =
                    selectedGenres.filter(
                        item => item !== genre
                    );

                button.classList.remove(
                    "selected"
                );

            } else {

                selectedGenres.push(genre);

                button.classList.add(
                    "selected"
                );

            }

        }
    );

});


/* =========================
   RECOMMENDATION SYSTEM
========================= */

recommendBtn.addEventListener(
    "click",
    getRecommendations
);


function getRecommendations() {

    recommendationContainer.innerHTML = "";


    if (selectedGenres.length === 0) {

        recommendationContainer.innerHTML = `

            <p class="empty-message">
                Please select at least one genre.
            </p>

        `;

        return;
    }


    const recommendations =
        animeList
            .map(anime => {

                let score = 0;


                anime.genres.forEach(genre => {

                    if (
                        selectedGenres.includes(genre)
                    ) {

                        score++;

                    }

                });


                return {
                    anime,
                    score
                };

            })


            .filter(item =>
                item.score > 0
            )


            .sort(
                (a, b) =>
                    b.score - a.score
            );


    if (recommendations.length === 0) {

        recommendationContainer.innerHTML = `

            <p class="empty-message">
                No recommendations found.
            </p>

        `;

        return;
    }


    recommendations.forEach(item => {

        recommendationContainer.appendChild(
            createAnimeCard(item.anime)
        );

    });


    recommendationContainer.scrollIntoView({
        behavior: "smooth"
    });

}


/* =========================
   DARK / LIGHT MODE
========================= */

themeBtn.addEventListener(
    "click",
    () => {

        document.body.classList.toggle(
            "light"
        );


        if (
            document.body.classList.contains(
                "light"
            )
        ) {

            themeBtn.textContent = "☀️";

        } else {

            themeBtn.textContent = "🌙";

        }

    }
);


/* =========================
   INITIAL LOAD
========================= */

displayAnime(animeList);

displayFavorites();