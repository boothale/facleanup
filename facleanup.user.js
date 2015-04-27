// ==UserScript==
// @name        FA Cleanup
// @author      Erra Boothale <erra@boothale.net>
// @namespace   http://boothale.net/
// @description Fixes various annoyances with FA's user interface
// @include     http://www.furaffinity.net/view/*
// @include     https://www.furaffinity.net/view/*
// @include     http://www.furaffinity.net/full/*
// @include     https://www.furaffinity.net/full/*
// @downloadURL https://boothale.net/scripts/facleanup.user.js
// @version     3
// ==/UserScript==

var tables      = document.querySelectorAll('.maintable'),
    descTable   = tables[2],
    descHead    = descTable.querySelectorAll('td')[0],
    description = descTable.querySelectorAll('tr')[1],
    sideTable   = tables[3],
    sideRow     = sideTable.parentNode,
    sideContent = sideTable.querySelectorAll('td')[1];

if (sideTable.textContent.indexOf('Sidebar') != -1) {
    console.log('FA Cleanup: Moving sidebar');
    description.appendChild(sideContent);
    sideRow.parentNode.removeChild(sideRow);
    descHead.setAttribute('colspan', '2');
} else {
    console.log('FA Cleanup: Sidebar not detected');
}

