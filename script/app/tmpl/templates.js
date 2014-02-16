this["JST"] = this["JST"] || {};

this["JST"]["about"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<section>\n  <h2>' +
((__t = ( texts.desc.h )) == null ? '' : __t) +
'</h2>\n  <div class="texts">' +
((__t = ( texts.desc.c )) == null ? '' : __t) +
'</div>\n</section>\n<section>\n  <h2>' +
((__t = ( texts.data.h )) == null ? '' : __t) +
'</h2>\n  <div class="texts">' +
((__t = ( texts.data.c )) == null ? '' : __t) +
'</div>\n</section>\n<section>\n  <h2>' +
((__t = ( texts.feature.h )) == null ? '' : __t) +
'</h2>\n  <div class="texts">' +
((__t = ( texts.feature.c )) == null ? '' : __t) +
'</div>\n</section>\n<section>\n  <h2>' +
((__t = ( texts.contact.h )) == null ? '' : __t) +
'</h2>\n  <div class="texts">' +
((__t = ( texts.contact.c )) == null ? '' : __t) +
'</div>\n</section>\n\n<a href="#" class="b-anchor-btn js-back-to">' +
((__t = ( titles.index )) == null ? '' : __t) +
'</a>';

}
return __p
};

this["JST"]["detail"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<section class="b-monster-index-wrap box">\n  <div class="b-monster-icon m-icon-id-' +
((__t = ( _id )) == null ? '' : __t) +
'"></div>\n  <div class="e-monster-index flex">\n    <h2>' +
((__t = ( name )) == null ? '' : __t) +
'</h2>\n    ' +
((__t = ( words.nationalPokedex )) == null ? '' : __t) +
'No.' +
((__t = ( nationalPokedexNumber )) == null ? '' : __t) +
'\n  </div>\n</section>\n\n<section>\n  <h2>' +
((__t = ( words.baseStats.title )) == null ? '' : __t) +
'</h2>\n  <ul class="b-base-stats">\n    <li><div style="width: ' +
((__t = ( baseStatsRatio.hp )) == null ? '' : __t) +
'%" data-label="' +
((__t = ( words.baseStats.hp )) == null ? '' : __t) +
': ' +
((__t = ( baseStats.hp )) == null ? '' : __t) +
'"></div></li>\n    <li><div style="width: ' +
((__t = ( baseStatsRatio.attack )) == null ? '' : __t) +
'%" data-label="' +
((__t = ( words.baseStats.attack )) == null ? '' : __t) +
': ' +
((__t = ( baseStats.attack )) == null ? '' : __t) +
'"></div></li>\n    <li><div style="width: ' +
((__t = ( baseStatsRatio.defense )) == null ? '' : __t) +
'%" data-label="' +
((__t = ( words.baseStats.defense )) == null ? '' : __t) +
': ' +
((__t = ( baseStats.defense )) == null ? '' : __t) +
'"></div></li>\n    <li><div style="width: ' +
((__t = ( baseStatsRatio.specialAttack )) == null ? '' : __t) +
'%" data-label="' +
((__t = ( words.baseStats.specialAttack )) == null ? '' : __t) +
': ' +
((__t = ( baseStats.specialAttack )) == null ? '' : __t) +
'"></div></li>\n    <li><div style="width: ' +
((__t = ( baseStatsRatio.specialDefense )) == null ? '' : __t) +
'%" data-label="' +
((__t = ( words.baseStats.specialDefense )) == null ? '' : __t) +
': ' +
((__t = ( baseStats.specialDefense )) == null ? '' : __t) +
'"></div></li>\n    <li><div style="width: ' +
((__t = ( baseStatsRatio.speed )) == null ? '' : __t) +
'%" data-label="' +
((__t = ( words.baseStats.speed )) == null ? '' : __t) +
': ' +
((__t = ( baseStats.speed )) == null ? '' : __t) +
'"></div></li>\n    <li><div style="width: ' +
((__t = ( baseStatsRatio.total )) == null ? '' : __t) +
'%" data-label="' +
((__t = ( words.baseStats.total )) == null ? '' : __t) +
': ' +
((__t = ( baseStats.total )) == null ? '' : __t) +
'"></div></li>\n  </ul>\n</section>\n\n<section>\n  <h2>' +
((__t = ( words.type )) == null ? '' : __t) +
'</h2>\n  ';
 _.forEach(types, function(type) { ;
__p += '<span class="b-monster-type m-type-' +
((__t = ( type.type )) == null ? '' : __t) +
'">' +
((__t = ( type.typeStr )) == null ? '' : __t) +
'</span>';
 }) ;
__p += '\n</section>\n\n<section>\n  <h2>' +
((__t = ( words.typeChart )) == null ? '' : __t) +
'</h2>\n  <ul class="b-type-charts">\n    ';
 if (typesChartStr.efx400.length) { ;
__p += '\n    <li class="box">\n      <div class="e-label">x 4</div>\n      <div class="flex">\n        ';
 _.forEach(typesChartStr.efx400, function(type) { ;
__p += '<span class="b-monster-type m-type-' +
((__t = ( type.type )) == null ? '' : __t) +
'">' +
((__t = ( type.typeStr )) == null ? '' : __t) +
'</span>';
 }) ;
__p += '\n      </div>\n    </li>\n    ';
 } ;
__p += '\n    ';
 if (typesChartStr.efx200.length) { ;
__p += '\n    <li class="box">\n      <div class="e-label">x 2</div>\n      <div class="flex">\n        ';
 _.forEach(typesChartStr.efx200, function(type) { ;
__p += '<span class="b-monster-type m-type-' +
((__t = ( type.type )) == null ? '' : __t) +
'">' +
((__t = ( type.typeStr )) == null ? '' : __t) +
'</span>';
 }) ;
__p += '\n      </div>\n    </li>\n    ';
 } ;
__p += '\n    ';
 if (typesChartStr.efx50.length) { ;
__p += '\n    <li class="box">\n      <div class="e-label m-small">x 1/2</div>\n      <div class="flex">\n        ';
 _.forEach(typesChartStr.efx50, function(type) { ;
__p += '<span class="b-monster-type m-type-' +
((__t = ( type.type )) == null ? '' : __t) +
'">' +
((__t = ( type.typeStr )) == null ? '' : __t) +
'</span>';
 }) ;
__p += '\n      </div>\n    </li>\n    ';
 } ;
__p += '\n    ';
 if (typesChartStr.efx25.length) { ;
__p += '\n    <li class="box">\n      <div class="e-label m-small">x 1/4</div>\n      <div class="flex">\n        ';
 _.forEach(typesChartStr.efx25, function(type) { ;
__p += '<span class="b-monster-type m-type-' +
((__t = ( type.type )) == null ? '' : __t) +
'">' +
((__t = ( type.typeStr )) == null ? '' : __t) +
'</span>';
 }) ;
__p += '\n      </div>\n    </li>\n    ';
 } ;
__p += '\n    ';
 if (typesChartStr.efx0.length) { ;
__p += '\n    <li class="box">\n      <div class="e-label">x 0</div>\n      <div class="flex">\n        ';
 _.forEach(typesChartStr.efx0, function(type) { ;
__p += '<span class="b-monster-type m-type-' +
((__t = ( type.type )) == null ? '' : __t) +
'">' +
((__t = ( type.typeStr )) == null ? '' : __t) +
'</span>';
 }) ;
__p += '\n      </div>\n    </li>\n    ';
 } ;
__p += '\n  </ul>\n</section>\n\n<section>\n  <h2>' +
((__t = ( words.abilities.normal )) == null ? '' : __t) +
'</h2>\n  ';
 _.forEach(abilities.normal, function(abilitiy) { ;
__p += '\n  <h3 class="js-toggle-trigger">' +
((__t = ( abilitiy.name )) == null ? '' : __t) +
'</h3>\n  <div class="texts">' +
((__t = ( abilitiy.desc )) == null ? '' : __t) +
'</div>\n  ';
 }) ;
__p += '\n</section>\n\n';
 if (abilities.hidden.length) { ;
__p += '\n<section>\n  <h2>' +
((__t = ( words.abilities.hidden )) == null ? '' : __t) +
'</h2>\n  ';
 _.forEach(abilities.hidden, function(abilitiy) { ;
__p += '\n  <h3 class="js-toggle-trigger">' +
((__t = ( abilitiy.name )) == null ? '' : __t) +
'</h3>\n  <div class="texts">' +
((__t = ( abilitiy.desc )) == null ? '' : __t) +
'</div>\n  ';
 }) ;
__p += '\n</section>\n';
 } ;
__p += '\n\n<section>\n  <h2>' +
((__t = ( words.misc )) == null ? '' : __t) +
'</h2>\n  <div class="texts">' +
((__t = ( words.height )) == null ? '' : __t) +
': ' +
((__t = ( heightStr )) == null ? '' : __t) +
' / ' +
((__t = ( words.weight )) == null ? '' : __t) +
': ' +
((__t = ( weightStr )) == null ? '' : __t) +
'</div>\n</section>\n\n<a href="#" class="js-back-to b-anchor-btn">' +
((__t = ( titles.list )) == null ? '' : __t) +
'</a>\n<a href="#" class="js-go-to b-anchor-btn" data-href="/">' +
((__t = ( titles.index )) == null ? '' : __t) +
'</a>';

}
return __p
};

this["JST"]["index"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<section>\n  <h2>' +
((__t = ( texts.howto.h )) == null ? '' : __t) +
'</h2>\n  <div class="texts">' +
((__t = ( texts.howto.c )) == null ? '' : __t) +
'</div>\n</section>\n<section>\n  <h2>' +
((__t = ( texts.indexes.h )) == null ? '' : __t) +
'</h2>\n  <ul class="b-category-list">\n    ';
 _.forEach(categories, function(category) { ;
__p += '<!--\n    -->';
 if (category.isDummy) { ;
__p += '<!--\n    --><li><a href="#" class="b-anchor-btn m-btn-dummy">&nbsp;</a></li><!--\n    -->';
 } else { ;
__p += '<!--\n    --><li><a href="#" data-ctg-key="' +
((__t = ( category.key )) == null ? '' : __t) +
'" class="js-ctg-btn b-anchor-btn">' +
((__t = ( category.label )) == null ? '' : __t) +
'</a></li><!--\n    -->';
 } ;
__p += '<!--\n    -->';
 }) ;
__p += '\n  </ul>\n</section>\n<section>\n  <h2>' +
((__t = ( texts.list.h )) == null ? '' : __t) +
'</h2>\n  <a href="#" class="b-anchor-btn js-go-to m-no-margin" data-href="/list">' +
((__t = ( titles.list )) == null ? '' : __t) +
'</a>\n</section>\n\n<a href="#" class="b-anchor-btn m-btn-sub js-go-to m-about-site" data-href="/about"><div class="b-monster-icon m-icon-id-0"></div>' +
((__t = ( titles.about )) == null ? '' : __t) +
'</a>';

}
return __p
};

this["JST"]["list"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<ul class="b-monster-list">\n  ';
 _.forEach(monsters, function(monster) { ;
__p += '\n  <li><a data-cid="' +
((__t = ( monster.cid )) == null ? '' : __t) +
'" class="m-icon-id-' +
((__t = ( monster.id )) == null ? '' : __t) +
' js-show-detail">' +
((__t = ( monster.name )) == null ? '' : __t) +
'</a></li>\n  ';
 }) ;
__p += '\n</ul>\n<a href="#" class="js-go-to b-anchor-btn" data-href="/">' +
((__t = ( titles.index )) == null ? '' : __t) +
'</a>';

}
return __p
};