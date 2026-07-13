export type KanaItem = {
  h: string;   // hiragana
  k: string;   // katakana
  r: string;   // romaji
  strokesh: number; // number of strokes required to write the kana
  strokek: number; // number of strokes required to write the kana
  pron?: string; // optional pronunciation hint, only when needed
  mh: string;  // mnemonic - hiragana
  mk: string;  // mnemonic - katakana
};

export type KanaRow = {
  key: string;        // "a", "ka", "sa"... used in the URL
  label: string;       // "あ / ア"
  items: KanaItem[];
};

export const ROWS: KanaRow[] = [
  { key: "a", label: "あ / ア", items: [
    { h: "あ", k: "ア", r: "a", strokesh: 3, strokek: 3, pron: "ah (not eh)", mh: "An antenna sticking up", mk: "A sharp antenna angle" },
    { h: "い", k: "イ", r: "i", strokesh: 2, strokek: 2, pron: "ee (not ai)", mh: "Two noodles hanging down", mk: "One noodle, sliced thin" },
    { h: "う", k: "ウ", r: "u", strokesh: 2, strokek: 2, pron: "oo (not yu)", mh: "A hood over a face", mk: "A cup catching rain" },
    { h: "え", k: "エ", r: "e", strokesh: 2, strokek: 2, pron: "eh (not e)", mh: "A person stretching an arm", mk: "A ladder on its side" },
    { h: "お", k: "オ", r: "o", strokesh: 2, strokek: 2, mh: "A kid tying an obi bow", mk: "A tail flicking outward" },
  ]},
  { key: "ka", label: "か / カ", items: [
    { h: "か", k: "カ", r: "ka", strokesh: 3, strokek: 3, mh: "A sickle cutting grass", mk: "A sharp sickle blade" },
    { h: "き", k: "キ", r: "ki", strokesh: 3, strokek: 3, mh: "A key with teeth", mk: "A key, simplified" },
    { h: "く", k: "ク", r: "ku", strokesh: 2, strokek: 2, mh: "A bent claw", mk: "A small crab claw" },
    { h: "け", k: "ケ", r: "ke", strokesh: 2, strokek: 2, mh: "A key on a ring", mk: "A skinny key" },
    { h: "こ", k: "コ", r: "ko", strokesh: 2, strokek: 2, mh: "Two little logs stacked", mk: "A box missing one side" },
  ]},
  { key: "sa", label: "さ / サ", items: [
    { h: "さ", k: "サ", r: "sa", strokesh: 2, strokek: 2, mh: "Scissors mid-snip", mk: "A dagger crossing a line" },
    { h: "し", k: "シ", r: "shi", strokesh: 3, strokek: 3, mh: "A fishing hook, 'sheesh'", mk: "Three drops falling" },
    { h: "す", k: "ス", r: "su", strokesh: 3, strokek: 3, mh: "A swirling straw", mk: "A swan's neck curving" },
    { h: "せ", k: "セ", r: "se", strokesh: 2, strokek: 2, mh: "A well with a bucket", mk: "A seal's flipper" },
    { h: "そ", k: "ソ", r: "so", strokesh: 3, strokek: 3, mh: "A zigzag sewing stitch", mk: "Two threads, 'so' close" },
  ]},
  { key: "ta", label: "た / タ", items: [
    { h: "た", k: "タ", r: "ta", strokesh: 3, strokek: 3, mh: "A rice paddy with a stalk", mk: "A tall tower" },
    { h: "ち", k: "チ", r: "chi", strokesh: 3, strokek: 3, mh: "A cheerful little chick", mk: "A cheeky 'chi' cross" },
    { h: "つ", k: "ツ", r: "tsu", strokesh: 3, strokek: 3, mh: "A tsunami wave", mk: "Three tsunami droplets" },
    { h: "て", k: "テ", r: "te", strokesh: 2, strokek: 2, mh: "A hand reaching, 'te'nnis", mk: "A TV antenna" },
    { h: "と", k: "ト", r: "to", strokesh: 3, strokek: 3, mh: "A door slightly ajar", mk: "A toe pointing out" },
  ]},
  { key: "na", label: "な / ナ", items: [
    { h: "な", k: "ナ", r: "na", strokesh: 3, strokek: 3, mh: "A knot tied with a cross", mk: "A knife's simple slash" },
    { h: "に", k: "ニ", r: "ni", strokesh: 2, strokek: 2, mh: "A needle and thread", mk: "Two chopsticks, 'ni' pair" },
    { h: "ぬ", k: "ヌ", r: "nu", strokesh: 3, strokek: 3, mh: "Noodles tangled in a loop", mk: "A noodle with a flick" },
    { h: "ね", k: "ネ", r: "ne", strokesh: 2, strokek: 2, mh: "A cat's tail, 'neko'", mk: "A cat's ear twitch" },
    { h: "の", k: "ノ", r: "no", strokesh: 3, strokek: 3, mh: "A single winding road", mk: "A single brush stroke" },
  ]},
  { key: "ha", label: "は / ハ", items: [
    { h: "は", k: "ハ", r: "ha", strokesh: 3, strokek: 3, mh: "A man laughing, 'ha ha'", mk: "Legs mid laugh-stumble" },
    { h: "ひ", k: "ヒ", r: "hi", strokesh: 3, strokek: 3, mh: "A crescent smile", mk: "A hip bone curve" },
    { h: "ふ", k: "フ", r: "fu", strokesh: 3, strokek: 3, mh: "Mount Fuji's silhouette", mk: "A hook, 'fu'll stop" },
    { h: "へ", k: "ヘ", r: "he", strokesh: 3, strokek: 3, mh: "A little mountain peak", mk: "The same small peak" },
    { h: "ほ", k: "ホ", r: "ho", strokesh: 3, strokek: 3, mh: "A signpost with a flag", mk: "A star-shaped signpost" },
  ]},
  { key: "ma", label: "ま / マ", items: [
    { h: "ま", k: "マ", r: "ma", strokesh: 3, strokek: 3, mh: "A mama wrapping a scarf", mk: "A checkmark, 'ma'tch" },
    { h: "み", k: "ミ", r: "mi", strokesh: 3, strokek: 3, mh: "A curled number 3", mk: "Three short strokes" },
    { h: "む", k: "ム", r: "mu", strokesh: 3, strokek: 3, mh: "A cow, 'moo'", mk: "A cow's mouth open" },
    { h: "め", k: "メ", r: "me", strokesh: 2, strokek: 2, mh: "An eye, 'me' means eye", mk: "A crossed 'x' glance" },
    { h: "も", k: "モ", r: "mo", strokesh: 3, strokek: 3, mh: "A fishing hook with bait", mk: "A hook with a bar" },
  ]},
  { key: "ya", label: "や / ヤ", items: [
    { h: "や", k: "ヤ", r: "ya", strokesh: 3, strokek: 3, mh: "A yak's horn", mk: "A slingshot 'ya'nk" },
    { h: "ゆ", k: "ユ", r: "yu", strokesh: 3, strokek: 3, mh: "A hot spring, 'yu' bath", mk: "A U-shaped cup" },
    { h: "よ", k: "ヨ", r: "yo", strokesh: 3, strokek: 3, mh: "A yo-yo mid-spin", mk: "Three shelves, 'yo'!" },
  ]},
  { key: "ra", label: "ら / ラ", items: [
    { h: "ら", k: "ラ", r: "ra", strokesh: 3, strokek: 3, mh: "A rabbit's ear flop", mk: "A rabbit's single ear" },
    { h: "り", k: "リ", r: "ri", strokesh: 3, strokek: 3, mh: "Two reeds by a river", mk: "Two thin reeds" },
    { h: "る", k: "ル", r: "ru", strokesh: 3, strokek: 3, mh: "A loop-the-loop", mk: "A small hook and tail" },
    { h: "れ", k: "レ", r: "re", strokesh: 3, strokek: 3, mh: "A person leaning, 'relax'", mk: "A ramp sloping down" },
    { h: "ろ", k: "ロ", r: "ro", strokesh: 3, strokek: 3, mh: "A maze box, 'ro'ute", mk: "A square box, 'ro'om" },
  ]},
  { key: "wa", label: "わ / ワ", items: [
    { h: "わ", k: "ワ", r: "wa", strokesh: 3, strokek: 3, mh: "A wave curling over", mk: "A wine glass tipping" },
    { h: "を", k: "ヲ", r: "wo", strokesh: 3, strokek: 3, mh: "A person carrying a load", mk: "A hook lifting a weight" },
    { h: "ん", k: "ン", r: "n", strokesh: 2, strokek: 2, mh: "A single closing swirl", mk: "Two final dots" },
  ]},
];