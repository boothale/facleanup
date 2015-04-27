// ==UserScript==
// @name        FA Cleanup
// @author      Erra Boothale <erra@boothale.net>
// @namespace   http://boothale.net/
// @description Fixes various annoyances with FA's user interface
// @include     http://www.furaffinity.net/view/*
// @include     https://www.furaffinity.net/view/*
// @include     http://www.furaffinity.net/full/*
// @include     https://www.furaffinity.net/full/*
// @updateURL   http://boothale.net/scripts/facleanup.user.js
// @version     2
// ==/UserScript==

console.log('Running FA Cleanup');

var tables      = document.querySelectorAll('.maintable'),
    descTable   = tables[2],
    descHead    = descTable.querySelectorAll('td')[0],
    description = descTable.querySelectorAll('tr')[1],
    sideTable   = tables[3],
    sideRow     = sideTable.parentNode,
    sideContent = sideTable.querySelectorAll('td')[1];

description.appendChild(sideContent);
sideRow.parentNode.removeChild(sideRow);
descHead.setAttribute('colspan', '2');

