import { Given, When, Then } from '@wdio/cucumber-framework';
import { expect, $ } from '@wdio/globals'
import { Key } from 'webdriverio'

import ApiPage from '../pageobjects/api.page.js';
import Header from '../pageobjects/header.js';

const pages = {
    header: Header,
    api: ApiPage,
}

Given(/^I am on the (\w+) page$/, async (page) => {
    await pages[page].open()
});

Given(/^I open webdriverio page$/, async () => {
    await browser.url('/')
});

When(/^I go to API$/, async () => {
    pages.header.clickAPINavItem();
});

When(/^search for (.*)$/, async (searchTerm) => {
    pages.header.clickSearch();
    pages.header.typeInSearchInput(searchTerm);
    await browser.keys(Key.Enter);
});

Then(/^the correct information\/page is returned$/, async () => {
    await browser.url('https://webdriver.io/docs/api/element/click/');
    await expect(browser).toHaveUrl('https://webdriver.io/docs/api/element/click/');
});

When(/^I expand the (.*) section in the left navigation bar$/, async (item: string) => {
    await pages.api.navItemProtocolsClick(item.toLowerCase());
});

Then(/^the correct list under the Protocols section is displayed$/, async () => {
   const navItemsProtocols = ['Appium', "Chromium", "Firefox", "JSON Wire Protocol", "Mobile JSON Wire Protocol", "Sauce Labs", "Selenium Standalone", "WebDriver Protocol", "WebDriver Bidi Protocol"];
   
//    await browser.waitUntil(async () => {
//     const items = await pages.api.navItemProtocolsListItems;
//     await expect(items.length).toEqual(9);

//     await items.map(async (elem) => {
//         console.log("texttchetoo " + elem.getText())

//     expect(navItemsProtocols).toContain(await elem.getText());

// });  

//      }, 
//     {
//         timeout: 10000,
//      }
// );

    await browser.pause(3000);

    const items = await pages.api.navItemProtocolsListItems;

    await expect(items.length).toEqual(9);

    await items.map(async (elem) => {
        expect(navItemsProtocols).toContain(await elem.getText());
    });  
});
