function myFunction() {
    var myMusic = {
        001: {
            artist: "Billy Joel",
            title: "Piano Man",
            release_year: 1973,
            formats: {
                1: "CD",
                2: "8T",
                3: "LP"
            },
            gold: true
        },
        002: {
            artist: "Artist Artist",
            title: "Title",
            release_year: 2021,
            id: 10,
            formats: {
                1: "AA",
                2: "BB",
                3: "CC"
            }
        }
    }
    return myMusic
}
myFunction()[2];
module.exports = myFunction;