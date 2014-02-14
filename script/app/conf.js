define('conf', ['jquery'], function ($) {
  'use strict';

  var instance;
  if (instance) return instance;

  var lang = (/ja/.test(navigator.language)) ? 'ja' : 'en';
  var Conf = {
    lang: lang,
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
        a: { key: 'a', label: 'ア', contents: ['ア', 'イ', 'ウ', 'エ', 'オ']},
        k: { key: 'k', label: 'カ', contents: ['カ', 'キ', 'ク', 'ケ', 'コ']},
        s: { key: 's', label: 'サ', contents: ['サ', 'シ', 'ス', 'セ', 'ソ']},
        t: { key: 't', label: 'タ', contents: ['タ', 'チ', 'ツ', 'テ', 'ト']},
        n: { key: 'n', label: 'ナ', contents: ['ナ', 'ニ', 'ヌ', 'ネ', 'ノ']},
        h: { key: 'h', label: 'ハ', contents: ['ハ', 'ヒ', 'フ', 'ヘ', 'ホ']},
        m: { key: 'm', label: 'マ', contents: ['マ', 'ミ', 'ム', 'メ', 'モ']},
        y: { key: 'y', label: 'ヤ', contents: ['ヤ', 'ユ', 'ヨ']},
        r: { key: 'r', label: 'ラ', contents: ['ラ', 'リ', 'ル', 'レ', 'ロ']},
        w: { key: 'w', label: 'ワ', contents: ['ワ']}
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
        misc: 'その他'
      },
      titles: {
        index: 'Simple Pokédex',
        list: 'ポケモン一覧',
        detail: 'vs %s',
        about: 'このサイトについて'
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
        misc: 'Misc'
      },
      titles: {
        index: 'Simple Pokédex',
        list: 'Pokémon List',
        detail: 'vs %s',
        about: 'About this site'
      }
    }
  };

  instance = $.extend(true, Conf, Lang[lang]);
  return instance;

});
