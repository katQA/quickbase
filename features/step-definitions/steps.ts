import { Given, When, Then } from '@wdio/cucumber-framework';
import { expect, $ } from '@wdio/globals'
import { Key } from 'webdriverio'

import LeftNavigation from '../pageobjects/left-navigation.js';
import Header from '../pageobjects/header.js';

const pages = {
    header: Header,
    leftNav: LeftNavigation,
}

const NAV_ITEMS_PROTOCOLS = ["Appium", "Chromium", "Firefox", "JSON Wire Protocol", "Mobile JSON Wire Protocol", "Sauce Labs", "Selenium Standalone", "WebDriver Protocol", "WebDriver Bidi Protocol"];

Given(/^I am on the (\w+) page$/, async (page) => {
    await pages[page].open();
});

Given(/^I open webdriverio page$/, async () => {
    await browser.url('/');
});

When(/^I go to API$/, async () => {
    await pages.header.apiNavItemClick();
    await pages.header.beadcrumbs.waitForExist({ timeout: 10000 });
});

When(/^I go to Environment Variables$/, async () => {
    await pages.header.navItemClick('environment');
});


When(/^I search for (.*)$/, async (searchTerm) => {
    await pages.header.searchClick();
    await pages.header.searchInputType(searchTerm);
    await browser.keys(Key.Enter);
});

Then(/^the correct API page is returned$/, async () => {
    await browser.url('https://webdriver.io/docs/api/element/click/');
    await expect(browser).toHaveUrl('https://webdriver.io/docs/api/element/click/');
});

Then(/^the correct Environment Variables page is returned$/, async () => {
    await browser.url('https://webdriver.io/docs/api/environment');
    await expect(browser).toHaveUrl('https://webdriver.io/docs/api/environment/');
});

When(/^I click on the (.*) section in the left navigation bar$/, async (navItem: string) => {
    await pages.leftNav.navItemClick(navItem.toLowerCase());
});

Then(/^the correct list under the Protocols section is displayed$/, async () => {    
    await browser.waitUntil(async function() {
        const items = await pages.leftNav.navItemProtocolsListItems;
        const output: (string | undefined)[] = await items.map(async (e, i) => {
            const el = await e.getText();

            return !!el ? el : '';
        });

        return !!output && !!output[1];
    }, {
        timeout: 10000,
        timeoutMsg: 'success text not found',
    });

    const navItemsText = await pages.leftNav.navItemProtocolsListItems;

    await navItemsText.forEach(async (elem, index) => {
        const currentText: string = await elem.getText();

        await expect(NAV_ITEMS_PROTOCOLS).toContain(currentText);
    });

    await expect(navItemsText.length).toEqual(9);
});

Then(/^no search results are displayed$/, async () => {
    await expect(await pages.header.searchNoResults).toBeDisplayed();
});

When(/^I open navigation (.*)$/, async (item: string) => {
   await  pages.header.navItemClick(item);
});

Then(/^the corresponding (.*) is returned$/, async (page: string) => {
    await browser.url('https://webdriver.io/' + page + '/');
    await expect(browser).toHaveUrl('https://webdriver.io/' + page + '/');
});
