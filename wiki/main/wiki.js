document.addEventListener("DOMContentLoaded", function () {
    items = [
        { term: "warriors band", site: "https://warriorsband.uwaterloo.ca/wiki/main/index.html#Warriors" },
        { term: "history", site: "https://warriorsband.uwaterloo.ca/wiki/main/index.html#history" },
        { term: "year numbering system", site: "https://warriorsband.uwaterloo.ca/wiki/main/index.html#year" },
        { term: "executive", site: "https://warriorsband.uwaterloo.ca/wiki/govern/index.html#exec" },
        { term: "culture", site: "https://warriorsband.uwaterloo.ca/wiki/main/index.html#culture" },
        { term: "awards", site: "https://warriorsband.uwaterloo.ca/wiki/main/index.html#award" },
        { term: "traditions", site: "https://warriorsband.uwaterloo.ca/wiki/main/index.html#trad" },
        { term: "sports", site: "https://warriorsband.uwaterloo.ca/wiki/main/index.html#Warriors" },
        { term: "events", site: "https://warriorsband.uwaterloo.ca/wiki/main/index.html#Warriors" },
        {
            term: "chief centurian of the warriors band",
            site: "https://warriorsband.uwaterloo.ca/wiki/govern/index.html#chief",
        },
        { term: "ccwb", site: "https://warriorsband.uwaterloo.ca/wiki/govern/index.html#chief" },
        {
            term: "deputy chief centurian of the warriors band",
            site: "https://warriorsband.uwaterloo.ca/wiki/govern/index.html#deputy",
        },
        { term: "dccwb", site: "https://warriorsband.uwaterloo.ca/wiki/govern/index.html#deputy" },
        { term: "navigator", site: "https://warriorsband.uwaterloo.ca/wiki/govern/index.html#gps" },
        { term: "quartermaster", site: "https://warriorsband.uwaterloo.ca/wiki/govern/index.html#quart" },
        { term: "secretary", site: "https://warriorsband.uwaterloo.ca/wiki/govern/index.html#sec" },
        { term: "social media manager", site: "https://warriorsband.uwaterloo.ca/wiki/govern/index.html#social" },
        { term: "technomancer", site: "https://warriorsband.uwaterloo.ca/wiki/govern/index.html#tech" },
        { term: "treasurer", site: "https://warriorsband.uwaterloo.ca/wiki/govern/index.html#money" },
        { term: "2:30", site: "https://warriorsband.uwaterloo.ca/wiki/main/index.html#jokes" },
        { term: "graduation", site: "https://warriorsband.uwaterloo.ca/wiki/main/index.html#trad" },
        { term: "birthday", site: "https://warriorsband.uwaterloo.ca/wiki/main/index.html#trad" },
        { term: "taglines", site: "https://warriorsband.uwaterloo.ca/wiki/main/index.html" },
        { term: "cheers", site: "https://warriorsband.uwaterloo.ca/wiki/main/index.html#cheer" },
        { term: "dates", site: "https://warriorsband.uwaterloo.ca/wiki/main/index.html#year" },
        { term: "jokes", site: "https://warriorsband.uwaterloo.ca/wiki/main/index.html#jokes" },
        { term: "constitution", site: "https://warriorsband.uwaterloo.ca/wiki/cons/index.html" },
        { term: "constitutional role", site: "https://warriorsband.uwaterloo.ca/wiki/cons/index.html#role" },
        { term: "christmas parade 2022", site: "https://warriorsband.uwaterloo.ca/wiki/stories/index.html#c2022" },
        { term: "cassette tapes", site: "https://warriorsband.uwaterloo.ca/wiki/stories/index.html#ct" },
        { term: "executive roles", site: "https://warriorsband.uwaterloo.ca/wiki/main/index.html#exec" },
        { term: "equipment manager", site: "https://warriorsband.uwaterloo.ca/wiki/govern/index.html#equip" },
        { term: "eva pearson", site: "https://warriorsband.uwaterloo.ca/wiki/govern/index.html#edfp" },
        { term: "elections", site: "https://warriorsband.uwaterloo.ca/wiki/cons/index.html#elec" },
        { term: "evas wiki", site: "https://warriorsband.uwaterloo.ca/wiki/cons/index.html#ewiki" },
        { term: "evas website updates", site: "https://warriorsband.uwaterloo.ca/wiki/cons/index.html#esite" },
        { term: "general information", site: "https://warriorsband.uwaterloo.ca/wiki/main/index.html#gen" },
        { term: "game etiquette", site: "https://warriorsband.uwaterloo.ca/wiki/main/index.html#ed" },
        { term: "introduction", site: "https://warriorsband.uwaterloo.ca/wiki/main/index.html#intro" },
        { term: "impeachment", site: "https://warriorsband.uwaterloo.ca/wiki/cons/index.html#impeach" },
        { term: "impeachment of nick boyko", site: "https://warriorsband.uwaterloo.ca/wiki/stories/index.html#tionb" },
        { term: "kickoff", site: "https://warriorsband.uwaterloo.ca/wiki/stories/index.html#kick" },
        { term: "main page", site: "https://warriorsband.uwaterloo.ca/wiki/main/index.html" },
        { term: "media liaison", site: "https://warriorsband.uwaterloo.ca/wiki/govern/index.html#liason" },
        { term: "music manager", site: "https://warriorsband.uwaterloo.ca/wiki/govern/index.html#music" },
        { term: "mcmaster rivalry", site: "https://warriorsband.uwaterloo.ca/wiki/stories/index.html#mmr" },
        { term: "music from mcgill", site: "https://warriorsband.uwaterloo.ca/wiki/stories/index.html#mfm" },
        { term: "missing stories", site: "https://warriorsband.uwaterloo.ca/wiki/stories/index.html#missing" },
        { term: "matts massive erection", site: "https://warriorsband.uwaterloo.ca/wiki/stories/index.html#mme" },
        { term: "music book format", site: "https://warriorsband.uwaterloo.ca/wiki/songs/index.html#form" },
        { term: "olympic basketball", site: "https://warriorsband.uwaterloo.ca/wiki/stories/index.html#ob" },
        { term: "old time rock and roll", site: "https://warriorsband.uwaterloo.ca/wiki/songs/index.html#otrr" },
        { term: "steve hayman", site: "https://warriorsband.uwaterloo.ca/wiki/govern/index.html#sh" },
        { term: "safety policy", site: "https://warriorsband.uwaterloo.ca/wiki/cons/index.html#safe" },
        { term: "stories", site: "https://warriorsband.uwaterloo.ca/wiki/stories/index.html" },
        { term: "lore", site: "https://warriorsband.uwaterloo.ca/wiki/stories/index.html" },
        { term: "songs", site: "https://warriorsband.uwaterloo.ca/wiki/songs/index.html" },
        { term: "updated music books", site: "https://warriorsband.uwaterloo.ca/wiki/stories/index.html#umb" },
        { term: "usaf", site: "https://warriorsband.uwaterloo.ca/wiki/songs/index.html#usaf" },
        { term: "united states airforce", site: "https://warriorsband.uwaterloo.ca/wiki/songs/index.html#usaf" },
        { term: "warriors band", site: "https://warriorsband.uwaterloo.ca/wiki/main/index.html#Warriors" },
        { term: "womens basketball situation", site: "https://warriorsband.uwaterloo.ca/wiki/stories/index.html#wbs" },
        { term: "waterloo waterloo", site: "https://warriorsband.uwaterloo.ca/wiki/songs/index.html#ww" },
        { term: "34 high street", site: "https://warriorsband.uwaterloo.ca/wiki/cons/index.html#34" },
        { term: "25th anniversary", site: "https://warriorsband.uwaterloo.ca/wiki/stories/index.html#25" },
        { term: "45th anniversary", site: "https://warriorsband.uwaterloo.ca/wiki/stories/index.html#45" },
        { term: "50th anniversary", site: "https://warriorsband.uwaterloo.ca/wiki/stories/index.html#50" },
        {
            term: "kitchener waterloo santa claus parade",
            site: "https://warriorsband.uwaterloo.ca/wiki/stories/index.html#ks2023",
        },
        { term: "battery captain", site: "https://warriorsband.uwaterloo.ca/wiki/govern/index.html#Battery" },
        { term: "band bases", site: "https://warriorsband.uwaterloo.ca/wiki/cons/index.html#base" },
        { term: "storage room", site: "https://warriorsband.uwaterloo.ca/wiki/cons/index.html#store" },
        { term: "band house", site: "https://warriorsband.uwaterloo.ca/wiki/cons/index.html#house" },
        { term: "band lounge time", site: "https://warriorsband.uwaterloo.ca/wiki/stories/index.html#blt" },
        { term: "blt", site: "https://warriorsband.uwaterloo.ca/wiki/stories/index.html#blt" },
        { term: "david greenburg", site: "https://warriorsband.uwaterloo.ca/wiki/govern/index.html#dg" },
        { term: "drumline ontario", site: "https://warriorsband.uwaterloo.ca/wiki/stories/index.html#do" },
        { term: "death march to elora", site: "https://warriorsband.uwaterloo.ca/wiki/stories/index.html#dme" },
        { term: "dont worry be happy", site: "https://warriorsband.uwaterloo.ca/wiki/songs/index.html#dwbh" },
        { term: "fees", site: "https://warriorsband.uwaterloo.ca/wiki/cons/index.html#fees" },
        { term: "fruit bat keeper", site: "https://warriorsband.uwaterloo.ca/wiki/govern/index.html#fruit" },
        { term: "fall 2024 elections", site: "https://warriorsband.uwaterloo.ca/wiki/stories/index.html#f2024" },
        { term: "history", site: "https://warriorsband.uwaterloo.ca/wiki/main/index.html#history" },
        { term: "hockey game shenanigans", site: "https://warriorsband.uwaterloo.ca/wiki/stories/index.html#hgs" },
        { term: "halloween 2023", site: "https://warriorsband.uwaterloo.ca/wiki/stories/index.html#h2023" },
        { term: "hail to the warriors", site: "https://warriorsband.uwaterloo.ca/wiki/songs/index.html#httw" },
        { term: "johann tutor", site: "https://warriorsband.uwaterloo.ca/wiki/govern/index.html#jt" },
        { term: "johanns website", site: "https://warriorsband.uwaterloo.ca/wiki/cons/index.html#jsite" },
        { term: "johanns wiki", site: "https://warriorsband.uwaterloo.ca/wiki/cons/index.html#jwiki" },
        { term: "locations", site: "https://warriorsband.uwaterloo.ca/wiki/govern/index.html#loc" },
        { term: "loopholes of the constitution", site: "https://warriorsband.uwaterloo.ca/wiki/cons/index.html#loop" },
        { term: "nick boyko", site: "https://warriorsband.uwaterloo.ca/wiki/govern/index.html#nb" },
        { term: "notre dame victory march", site: "https://warriorsband.uwaterloo.ca/wiki/songs/index.html#ndvm" },
        { term: "pac", site: "https://warriorsband.uwaterloo.ca/wiki/govern/index.html#pac" },
        { term: "practice locations", site: "https://warriorsband.uwaterloo.ca/wiki/cons/practice" },
        { term: "playboy letter", site: "https://warriorsband.uwaterloo.ca/wiki/stories/index.html#pl" },
        { term: "retired roles", site: "https://warriorsband.uwaterloo.ca/wiki/govern/index.html#retired" },
        { term: "website", site: "https://warriorsband.uwaterloo.ca/wiki/cons/index.html#web" },
        { term: "thermostat incident", site: "https://warriorsband.uwaterloo.ca/wiki/stories/index.html#tti" },
        { term: "tmu baseball", site: "https://warriorsband.uwaterloo.ca/wiki/stories/index.html#tmu" },
        { term: "trip to slc", site: "https://warriorsband.uwaterloo.ca/wiki/stories/index.html#slc2013" },
        { term: "black white and gold song", site: "https://warriorsband.uwaterloo.ca/wiki/songs/index.html#bwg" },
        { term: "vhs tapes", site: "https://warriorsband.uwaterloo.ca/wiki/stories/index.html#vhs" },
        {
            term: "sacred order of the broken cymbal",
            site: "https://warriorsband.uwaterloo.ca/wiki/main/index.html#award",
        },
        { term: "battered drumstick award", site: "https://warriorsband.uwaterloo.ca/wiki/main/index.html#award" },
        { term: "official school song", site: "https://warriorsband.uwaterloo.ca/wiki/songs/index.html#bwg" },
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
