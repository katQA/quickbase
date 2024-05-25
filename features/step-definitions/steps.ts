import { Given, When, Then } from '@wdio/cucumber-framework';
import { expect, $ } from '@wdio/globals'
import { Key } from 'webdriverio'

import LeftNavigation from '../pageobjects/left-navigation.js';
import Header from '../pageobjects/header.js';
import MainNavigation from '../pageobjects/main-navigation.js';

const pages = {
    header: Header,
    leftNav: LeftNavigation,
    mainNav: MainNavigation,
}

Given(/^I am on the (\w+) page$/, async (page) => {
    await pages[page].open()
});

Given(/^I open webdriverio page$/, async () => {
    await browser.url('/')
});

When(/^I go to API$/, async () => {
    pages.mainNav.clickAPINavItem();
});

When(/^I go to Environment Variables$/, async () => {
    pages.mainNav.clickAPINavItem();
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

Then(/^the correct information\/page for Environment Variables is returned$/, async () => {
    await browser.url('https://webdriver.io/docs/api/environment');
    await expect(browser).toHaveUrl('https://webdriver.io/docs/api/environment/');
});

When(/^I click on the (.*) section in the left navigation bar$/, async (item: string) => {
    await pages.leftNav.navItemClick(item.toLowerCase());
});

Then(/^the correct list under the Protocols section is displayed$/, async () => {
    const navItemsProtocols = ['Appium', "Chromium", "Firefox", "JSON Wire Protocol", "Mobile JSON Wire Protocol", "Sauce Labs", "Selenium Standalone", "WebDriver Protocol", "WebDriver Bidi Protocol"];
    
    await browser.waitUntil(async function() {
    const items = await pages.leftNav.navItemProtocolsListItems;
    let output:string[] = [];

    await items.forEach(async (e, i)=> {
        const et = await e.getText();
        console.log('each ', et);
        if (!!et) {
            output.push(et)
        }
    })

    return output.length > 1;
    }, {
        timeout: 10000,
        timeoutMsg: 'success text not found',
        interval: 5000,
    })

    const items = await pages.leftNav.navItemProtocolsListItems;

    await expect(items.length).toEqual(9);

    await items.map(async (elem) => {
        expect(navItemsProtocols).toContain(await elem.getText());
    });  
});

Then(/^search results are displayed$/, async () => {
    await expect(pages.header.searchResultsList).toBeDisplayed();
});
