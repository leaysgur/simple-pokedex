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
        baseStats: '種族値',
        abilities: {
          normal: '特性',
          hidden: '夢特性'
        }
      },
      titles: {
        site: 'ポケモン図鑑',
        index: '',
        detail: '%sについて | '
      }
    },
    en: {
      jsonPath: {
        lang: '/data/lang/en.json',
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
        baseStats: 'Base Stats',
        abilities: {
          normal: 'Normal Ability',
          hidden: 'Hidden Ability'
        }
      },
      titles: {
        site: 'Pokédex',
        index: '',
        detail: 'About %s | '
      }
    }
  };

  instance = $.extend(true, Conf, Lang[lang]);
  return instance;

});
