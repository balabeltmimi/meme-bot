class Preset {
    constructor(word, weight) {
        this.word = word;
        this.weight = weight;
    }
}

function getMemeWording() {
    var result = '';
    var sumPreset = 0;

    const presetList = [
        new Preset('Ehe', 20),
        new Preset('Fuiyoh', 20),
        new Preset('Bonk', 15),
        new Preset('Stonk', 25),
        new Preset('Ahaahaaha', 5),
        new Preset('เ ก เ ร', 35),
        new Preset('SIMP', 20),
        new Preset('ไม่เชื่อครับ โม้', 15),
        new Preset('เกลียดความหวั่นไหวที่อยู่ภายในใจฉัน', 35)
    ];

    const random = Math.floor(Math.random() * 100);

    for (let i = 0; i < presetList.length; i++) {
        sumPreset += presetList[i].weight
        if (random < sumPreset) {
            result = presetList[i].word;

            console.log(result);
            break;
        }
    }
    return result;
}

module.exports = { getMemeWording };