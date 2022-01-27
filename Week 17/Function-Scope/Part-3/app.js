function bankRobbery() {
    const heros = ['spideman', 'Batman', 'ironman'];
    function cryForHelp() {
        function inner() {
            for (let hero of heros) {
                console.log(`Please HElP ${hero.toUpperCase()}`);
            }
        }
        inner();
    }
    cryForHelp();
}