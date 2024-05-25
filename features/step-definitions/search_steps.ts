import { Given, When, Then } from '@wdio/cucumber-framework';
import { Key } from 'webdriverio'
import { expect, $ } from '@wdio/globals'

import APIPage from '../pageobjects/api.page';
import Header from '../pageobjects/header';

const pages = {
    header: Header,
    api: APIPage
}

Given(/^I open webdriverio page$/, async (page) => {
    await pages[page].open();
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

// Then(/^I should see a flash message saying (.*)$/, async (message) => {
//     await expect(SecurePage.flashAlert).toBeExisting();
//     await expect(SecurePage.flashAlert).toHaveTextContaining(message);
// });