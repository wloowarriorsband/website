document.addEventListener("DOMContentLoaded", function () {
    items = [
        { term: "warriors band", site: "../main/index.html#Warriors" },
        { term: "history", site: "../main/index.html#history" },
        { term: "year numbering system", site: "../main/index.html#year" },
        { term: "executive", site: "../govern/index.html#exec" },
        { term: "culture", site: "../main/index.html#culture" },
        { term: "awards", site: "../main/index.html#award" },
        { term: "traditions", site: "../main/index.html#trad" },
        { term: "sports", site: "../main/index.html#Warriors" },
        { term: "events", site: "../main/index.html#Warriors" },
        {
            term: "chief centurian of the warriors band",
            site: "../govern/index.html#chief",
        },
        { term: "ccwb", site: "../govern/index.html#chief" },
        {
            term: "deputy chief centurian of the warriors band",
            site: "../govern/index.html#deputy",
        },
        { term: "dccwb", site: "../govern/index.html#deputy" },
        { term: "navigator", site: "../govern/index.html#gps" },
        { term: "quartermaster", site: "../govern/index.html#quart" },
        { term: "secretary", site: "../govern/index.html#sec" },
        { term: "social media manager", site: "../govern/index.html#social" },
        { term: "technomancer", site: "../govern/index.html#tech" },
        { term: "treasurer", site: "../govern/index.html#money" },
        { term: "2:30", site: "../main/index.html#jokes" },
        { term: "graduation", site: "../main/index.html#trad" },
        { term: "birthday", site: "../main/index.html#trad" },
        { term: "taglines", site: "../main/index.html" },
        { term: "cheers", site: "../main/index.html#cheer" },
        { term: "dates", site: "../main/index.html#year" },
        { term: "jokes", site: "../main/index.html#jokes" },
        { term: "constitution", site: "../cons/index.html" },
        { term: "constitutional role", site: "../cons/index.html#role" },
        { term: "christmas parade 2022", site: "../stories/index.html#c2022" },
        { term: "cassette tapes", site: "../stories/index.html#ct" },
        { term: "executive roles", site: "../main/index.html#exec" },
        { term: "equipment manager", site: "../govern/index.html#equip" },
        { term: "eva pearson", site: "../govern/index.html#edfp" },
        { term: "elections", site: "../cons/index.html#elec" },
        { term: "evas wiki", site: "../cons/index.html#ewiki" },
        { term: "evas website updates", site: "../cons/index.html#esite" },
        { term: "general information", site: "../main/index.html#gen" },
        { term: "game etiquette", site: "../main/index.html#ed" },
        { term: "introduction", site: "../main/index.html#intro" },
        { term: "impeachment", site: "../cons/index.html#impeach" },
        { term: "impeachment of nick boyko", site: "../stories/index.html#tionb" },
        { term: "kickoff", site: "../stories/index.html#kick" },
        { term: "main page", site: "../main/index.html" },
        { term: "media liaison", site: "../govern/index.html#liason" },
        { term: "music manager", site: "../govern/index.html#music" },
        { term: "mcmaster rivalry", site: "../stories/index.html#mmr" },
        { term: "music from mcgill", site: "../stories/index.html#mfm" },
        { term: "missing stories", site: "../stories/index.html#missing" },
        { term: "matts massive erection", site: "../stories/index.html#mme" },
        { term: "music book format", site: "../songs/index.html#form" },
        { term: "olympic basketball", site: "../stories/index.html#ob" },
        { term: "old time rock and roll", site: "../songs/index.html#otrr" },
        { term: "steve hayman", site: "../govern/index.html#sh" },
        { term: "safety policy", site: "../cons/index.html#safe" },
        { term: "stories", site: "../stories/index.html" },
        { term: "lore", site: "../stories/index.html" },
        { term: "songs", site: "../songs/index.html" },
        { term: "updated music books", site: "../stories/index.html#umb" },
        { term: "usaf", site: "../songs/index.html#usaf" },
        { term: "united states airforce", site: "../songs/index.html#usaf" },
        { term: "warriors band", site: "../main/index.html#Warriors" },
        { term: "womens basketball situation", site: "../stories/index.html#wbs" },
        { term: "waterloo waterloo", site: "../songs/index.html#ww" },
        { term: "34 high street", site: "../cons/index.html#34" },
        { term: "25th anniversary", site: "../stories/index.html#25" },
        { term: "45th anniversary", site: "../stories/index.html#45" },
        { term: "50th anniversary", site: "../stories/index.html#50" },
        {
            term: "kitchener waterloo santa claus parade",
            site: "../stories/index.html#ks2023",
        },
        { term: "battery captain", site: "../govern/index.html#Battery" },
        { term: "band bases", site: "../cons/index.html#base" },
        { term: "storage room", site: "../cons/index.html#store" },
        { term: "band house", site: "../cons/index.html#house" },
        { term: "band lounge time", site: "../stories/index.html#blt" },
        { term: "blt", site: "../stories/index.html#blt" },
        { term: "david greenburg", site: "../govern/index.html#dg" },
        { term: "drumline ontario", site: "../stories/index.html#do" },
        { term: "death march to elora", site: "../stories/index.html#dme" },
        { term: "dont worry be happy", site: "../songs/index.html#dwbh" },
        { term: "fees", site: "../cons/index.html#fees" },
        { term: "fruit bat keeper", site: "../govern/index.html#fruit" },
        { term: "fall 2024 elections", site: "../stories/index.html#f2024" },
        { term: "history", site: "../main/index.html#history" },
        { term: "hockey game shenanigans", site: "../stories/index.html#hgs" },
        { term: "halloween 2023", site: "../stories/index.html#h2023" },
        { term: "hail to the warriors", site: "../songs/index.html#httw" },
        { term: "johann tutor", site: "../govern/index.html#jt" },
        { term: "johanns website", site: "../cons/index.html#jsite" },
        { term: "johanns wiki", site: "../cons/index.html#jwiki" },
        { term: "locations", site: "../govern/index.html#loc" },
        { term: "loopholes of the constitution", site: "../cons/index.html#loop" },
        { term: "nick boyko", site: "../govern/index.html#nb" },
        { term: "notre dame victory march", site: "../songs/index.html#ndvm" },
        { term: "pac", site: "../govern/index.html#pac" },
        { term: "practice locations", site: "../cons/practice" },
        { term: "playboy letter", site: "../stories/index.html#pl" },
        { term: "retired roles", site: "../govern/index.html#retired" },
        { term: "website", site: "../cons/index.html#web" },
        { term: "thermostat incident", site: "../stories/index.html#tti" },
        { term: "tmu baseball", site: "../stories/index.html#tmu" },
        { term: "trip to slc", site: "../stories/index.html#slc2013" },
        { term: "black white and gold song", site: "../songs/index.html#bwg" },
        { term: "vhs tapes", site: "../stories/index.html#vhs" },
        {
            term: "sacred order of the broken cymbal",
            site: "../main/index.html#award",
        },
        { term: "battered drumstick award", site: "../main/index.html#award" },
        { term: "official school song", site: "../songs/index.html#bwg" },
    ];

    const searchInput = document.getElementById("search");
    const resultsContainer = document.getElementById("results-container");
    const list = document.getElementById("list");

    // Function to filter items based on input
    searchInput.addEventListener("input", function () {
        const query = searchInput.value.toLowerCase();
        list.innerHTML = ""; // Clear previous results
        resultsContainer.style.display = "none"; // Hide results by default

        if (!query.trim()) return; // Do nothing if query is empty

        const filteredItems = items.filter((item) => item.term.toLowerCase().includes(query));

        if (filteredItems.length > 0) {
            resultsContainer.style.display = "block"; // Show results container

            filteredItems.forEach((item) => {
                const listItem = document.createElement("li");
                const link = document.createElement("a");
                link.href = item.site;
                link.textContent = item.term;
                link.target = "_blank"; // Open the link in a new tab
                listItem.appendChild(link);
                list.appendChild(listItem);
            });
        } else {
            list.innerHTML = "<li>No results found</li>";
        }
    });

    // Hide results when clicking anywhere on the page except the search input and results container
    document.addEventListener("click", function (event) {
        if (!resultsContainer.contains(event.target) && event.target !== searchInput) {
            resultsContainer.style.display = "none";
        }
    });

    // Prevent the click event on the input from hiding the results
    searchInput.addEventListener("click", function (event) {
        event.stopPropagation();
    });
});
