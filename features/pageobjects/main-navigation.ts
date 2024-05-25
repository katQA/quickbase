import { $ } from '@wdio/globals'
import Page from './page.js';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class MainNavigation extends Page {
    /**
     * define selectors using getter methods
     */

    public navItem (item: string) {
        return $('a[href="/docs/api/' + item + '"]');
    }

    public get apiNavItem () {
        return $('a[href="/docs/api"]');
    }

    public get envVariablesNavItem () {
        return $('a[href="/docs/api/environment"]');
    }

    public get search() {
        return $('span.DocSearch-Button-Placeholder');
    }

    public get searchInput () {
        return $('[id="docsearch-input"]');
    }

    public async clickAPINavItem() {
        await this.apiNavItem.click();
    }

    public async clickEnvVariablesNavItem() {
        await this.envVariablesNavItem.click();
    }

    public async clickSearch() {
        await this.search.click()
    }

    public async typeInSearchInput(searchTerm: string) {
        (await this.searchInput).setValue(searchTerm);
    }

    public async navItemClick (item: string) {
        await this.navItem(item).click();
    }
}

export default new MainNavigation();