define('conf', ['jquery'], function ($) {
  'use strict';

  var instance;
  if (instance) return instance;

  var lang = (/ja/.test(navigator.language)) ? 'ja' : 'en';
  var Conf = {
    lang: lang,
    storageKey: 'pokedexAll',
    max_stat: 255,
    max_all_stat: 780,
    jsonPath: {
      base: '/data/monster.json',
      type: '/data/type.json'
    }
  };
  var Lang = {
    ja: {
      jsonPath: {
        lang: '/data/lang/ja.json',
      },
      categories: {
         a: { key:  'a', label: 'ア', contents: ['ア']},
         i: { key:  'i', label: 'イ', contents: ['イ']},
         u: { key:  'u', label: 'ウ', contents: ['ウ']},
         e: { key:  'e', label: 'エ', contents: ['エ']},
         o: { key:  'o', label: 'オ', contents: ['オ']},
        ka: { key: 'ka', label: 'カ', contents: ['カ', 'ガ']},
        ki: { key: 'ki', label: 'キ', contents: ['キ', 'ギ']},
        ku: { key: 'ku', label: 'ク', contents: ['ク', 'グ']},
        ke: { key: 'ke', label: 'ケ', contents: ['ケ', 'ゲ']},
        ko: { key: 'ko', label: 'コ', contents: ['コ', 'ゴ']},
        sa: { key: 'sa', label: 'サ', contents: ['サ', 'ザ']},
        si: { key: 'si', label: 'シ', contents: ['シ', 'ジ']},
        su: { key: 'su', label: 'ス', contents: ['ス', 'ズ']},
        se: { key: 'se', label: 'セ', contents: ['セ', 'ゼ']},
        so: { key: 'so', label: 'ソ', contents: ['ソ', 'ゾ']},
        ta: { key: 'ta', label: 'タ', contents: ['タ', 'ダ']},
        ti: { key: 'ti', label: 'チ', contents: ['チ', 'ヂ']},
        tu: { key: 'tu', label: 'ツ', contents: ['ツ', 'ヅ']},
        te: { key: 'te', label: 'テ', contents: ['テ', 'デ']},
        to: { key: 'to', label: 'ト', contents: ['ト', 'ド']},
        na: { key: 'na', label: 'ナ', contents: ['ナ']},
        ni: { key: 'ni', label: 'ニ', contents: ['ニ']},
        nu: { key: 'nu', label: 'ヌ', contents: ['ヌ']},
        ne: { key: 'ne', label: 'ネ', contents: ['ネ']},
        no: { key: 'no', label: 'ノ', contents: ['ノ']},
        ha: { key: 'ha', label: 'ハ', contents: ['ハ', 'バ', 'パ']},
        hi: { key: 'hi', label: 'ヒ', contents: ['ヒ', 'ビ', 'ピ']},
        hu: { key: 'hu', label: 'フ', contents: ['フ', 'ブ', 'プ']},
        he: { key: 'he', label: 'ヘ', contents: ['ヘ', 'ベ', 'ペ']},
        ho: { key: 'ho', label: 'ホ', contents: ['ホ', 'ボ', 'ポ']},
        ma: { key: 'ma', label: 'マ', contents: ['マ']},
        mi: { key: 'mi', label: 'ミ', contents: ['ミ']},
        mu: { key: 'mu', label: 'ム', contents: ['ム']},
        me: { key: 'me', label: 'メ', contents: ['メ']},
        mo: { key: 'mo', label: 'モ', contents: ['モ']},
        ya: { key: 'ya', label: 'ヤ', contents: ['ヤ']},
        yi: { key: 'yi', isDummy: 1 },
        yu: { key: 'yu', label: 'ユ', contents: ['ユ']},
        ye: { key: 'ye', isDummy: 1 },
        yo: { key: 'yo', label: 'ヨ', contents: ['ヨ']},
        ra: { key: 'ra', label: 'ラ', contents: ['ラ']},
        ri: { key: 'ri', label: 'リ', contents: ['リ']},
        ru: { key: 'ru', label: 'ル', contents: ['ル']},
        re: { key: 're', label: 'レ', contents: ['レ']},
        ro: { key: 'ro', label: 'ロ', contents: ['ロ']},
        wa: { key: 'wa', label: 'ワ', contents: ['ワ', 'ヲ', 'ン']},
        wi: { key: 'wi', isDummy: 1 },
        wu: { key: 'wu', isDummy: 1 },
        we: { key: 'we', isDummy: 1 },
        wo: { key: 'wo', isDummy: 1 },
      },
      words: {
        type: 'タイプ',
        typeChart: 'タイプ相性',
        types: {
          normal: 'ノーマル',
          fire: 'ほのお',
          water: 'みず',
          electric: 'でんき',
          grass: 'くさ',
          ice: 'こおり',
          fighting: 'かくとう',
          poison: 'どく',
          ground: 'じめん',
          flying: 'ひこう',
          psychic: 'エスパー',
          bug: 'むし',
          rock: 'いわ',
          ghost: 'ゴースト',
          dragon: 'ドラゴン',
          dark: 'あく',
          steel: 'はがね',
          fairy: 'フェアリー'
        },
        baseStats: {
          title: '種族値',
          hp: 'HP',
          attack: 'こうげき',
          defense: 'ぼうぎょ',
          specialAttack: 'とくこう',
          specialDefense: 'とくぼう',
          speed: 'すばやさ',
          total: '合計'
        },
        abilities: {
          normal: '特性',
          hidden: '夢特性'
        },
        height: '高さ',
        weight: '重さ',
        nationalPokedex: 'ぜんこく図鑑',
        misc: 'その他',
        mega: 'メガシンカ'
      },
      titles: {
        index: 'Simple Pokédex',
        list: 'ポケモン一覧',
        categorisedList: '%sから始まるポケモン一覧',
        detail: '%sについて',
        about: 'このサイトについて'
      },
      texts: {
        misc: {
          clearStorage: '端末に保存されたデータを削除し、\n最新のデータを取得しています...。\n更新後は、ページを自動的に再読み込みします。'
        },
        index: {
          howto: {
            h: 'つかいかた',
            c: '目の前にいるポケモンのことが知りたい？<br>索引から調べたいポケモンの頭文字を選ぶか、全ポケモン一覧から調べよう！'
          },
          indexes: { h: 'さくいん' },
          list: { h: 'いちらん' }
        },
        about: {
          desc: {
            h: 'はじめに',
            c: '「Simple Pokédex」は、ポケモンのWiFi対戦中「・・・コイツどんなポケモンやっけ？」ってなったときに、サクッと見れるシンプルなポケモン図鑑です。<br>そのため、データは最低限必要なものだけに絞ってあります。<br>覚えるわざをきっちり見たいとか、努力値振りまで見極めて云々・・は、<a href="http://www57.atwiki.jp/pokemon6th/m/" target="_blank" class="anchor-txt">対戦考察まとめwiki</a>とかへどうぞ。'
          },
          data: {
            h: 'データについて',
            c: '本サイトで確認できる各データは、最新作である「X・Y(いわゆる第六世代)」のものです。<br>今作で種族値が変更になったポケモンや、特性に変更があったものも反映してあります。'
          },
          feature: {
            h: '実装について',
            c: 'このサイトは、はじめてサイトを訪れた時にだけ通信が発生し、以降はネットワークがつながってないところでも使えるような仕組みを使っています。<br>ただその利点とひきかえに、サーバー側のデータが更新されていても、手元のデータが更新されないケースがありえます。<br>そういう場合は、<a href="#" class="anchor-txt" id="js-clear-storage">このリンク</a>を使ってください。'
          },
          contact: {
            h: '不具合・ご要望あれば',
            c: '「○○のデータが間違ってる・・」や、「こういう機能ほしい！」というものがあれば、<a href="https://twitter.com/leader22" target="_blank" class="anchor-txt">@leader22</a>までご報告いただけると嬉しいです。<br>単なる感想とかでもうぇるかむですので！'
          }
        }
      }
    },
    en: {
      jsonPath: {
        lang: '/data/lang/en.json',
      },
      categories: {
        a: { key: 'a', label: 'A', contents: ['A']},
        b: { key: 'b', label: 'B', contents: ['B']},
        c: { key: 'c', label: 'C', contents: ['C']},
        d: { key: 'd', label: 'D', contents: ['D']},
        e: { key: 'e', label: 'E', contents: ['E']},
        f: { key: 'f', label: 'F', contents: ['F']},
        g: { key: 'g', label: 'G', contents: ['G']},
        h: { key: 'h', label: 'H', contents: ['H']},
        i: { key: 'i', label: 'I', contents: ['I']},
        j: { key: 'j', label: 'J', contents: ['J']},
        k: { key: 'k', label: 'K', contents: ['K']},
        l: { key: 'l', label: 'L', contents: ['L']},
        m: { key: 'm', label: 'M', contents: ['M']},
        n: { key: 'n', label: 'N', contents: ['N']},
        o: { key: 'o', label: 'O', contents: ['O']},
        p: { key: 'p', label: 'P', contents: ['P']},
        q: { key: 'q', label: 'Q', contents: ['Q']},
        r: { key: 'r', label: 'R', contents: ['R']},
        s: { key: 's', label: 'S', contents: ['S']},
        t: { key: 't', label: 'T', contents: ['T']},
        u: { key: 'u', label: 'U', contents: ['U']},
        v: { key: 'v', label: 'V', contents: ['V']},
        w: { key: 'w', label: 'W', contents: ['W']},
        x: { key: 'x', label: 'X', contents: ['X']},
        y: { key: 'y', label: 'Y', contents: ['Y']},
        z: { key: 'z', label: 'Z', contents: ['Z']}
      },
      words: {
        type: 'Type',
        typeChart: 'Type Chart',
        types: {
          normal: 'Normal',
          fire: 'Fire',
          water: 'Water',
          electric: 'Electric',
          grass: 'Grass',
          ice: 'Ice',
          fighting: 'Fighting',
          poison: 'Poison',
          ground: 'Ground',
          flying: 'Flying',
          psychic: 'Psychic',
          bug: 'Bug',
          rock: 'Rock',
          ghost: 'Ghost',
          dragon: 'Dragon',
          dark: 'Dark',
          steel: 'Steel',
          fairy: 'Fairy'
        },
        baseStats: {
          title: 'Base Stats',
          hp: 'Hp',
          attack: 'Attack',
          defense: 'Defense',
          specialAttack: 'Special Attack',
          specialDefense: 'Special Defense',
          speed: 'Speed',
          total: 'Total'
        },
        abilities: {
          normal: 'Normal Ability',
          hidden: 'Hidden Ability'
        },
        height: 'Height',
        weight: 'Weight',
        nationalPokedex: 'National Pokédex',
        misc: 'Misc',
        mega: 'Mega Evolution'
      },
      titles: {
        index: 'Simple Pokédex',
        list: 'Pokémon List',
        categorisedList: 'Pokémon list names beginning with %s',
        detail: 'vs %s',
        about: 'About this site'
      },
      texts: {
        misc: {
          clearStorage: 'Clear and fetch the latest data...\nAfter this, page will automatically reload.'
        },
        index: {
          howto: {
            h: 'How to use',
            c: 'Select name from indexes, or check all Pokémon list!'
          },
          indexes: { h: 'Indexes' },
          list: { h: 'List' }
        },
        about: {
          desc: {
            h: 'Welcome',
            c: '"Simple Pokédex", according to the name, it is a "simple" Pokédex.'
          },
          data: {
            h: 'Data',
            c: 'Data on this site is compatible with the latest version "X・Y".'
          },
          feature: {
            h: 'Feature of this site',
            c: 'This site saves some data to your device for the first time.<br>So after this, you do not need communicate with server.<br>Use <a href="#" class="anchor-txt" id="js-clear-storage">this link</a> to clear your local data and fetch latest data.'
          },
          contact: {
            h: 'Contact',
            c: 'Mention me on Twitter <a href="https://twitter.com/leader22" target="_blank" class="anchor-txt">@leader22</a>. Thanks :D'
          }
        }
      }
    }
  };

  instance = $.extend(true, Conf, Lang[lang]);
  return instance;

});
