import { $ } from '@wdio/globals'
import Page from './page.js';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class Header extends Page {
    /**
     * define selectors using getter methods
     */

    public get search() {
        return $('span.DocSearch-Button-Placeholder');
    }

    public get searchInput () {
        return $('[id="docsearch-input"]');
    }

    public get searchResultsList () {
        return $('[id="docsearch-list"]');
    }

    public navItem (item: string) {
        return $('a[href="/docs/api/' + item + '"]');
    }

    public get apiNavItem () {
        return $('a[href="/docs/api"]');
    }

    public async apiNavItemClick() {
        await this.apiNavItem.click();
    }

    public async navItemClick (item: string) {
        await this.navItem(item).click();
    }

    public async searchInputClick() {
        await this.search.click()
    }

    public async searchInputClear() {
        await this.searchInput.clearValue();
    }

    public async searchInputType(searchTerm: string) {
        await this.searchInput.setValue(searchTerm);
    }
}

export default new Header();