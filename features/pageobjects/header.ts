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
        return $('button.DocSearch.DocSearch-Button');
    }

    public get searchInput () {
        return $('.DocSearch-Input');
    }

    public get searchResultsList () {
        return $('[id="docsearch-list"]');
    }

    public get searchNoResults () {
        return $('.DocSearch-NoResults');
    }


    public navItem (item: string) {
        return $('a[href="/' + item + '"]');
    }

    public get apiNavItem () {
        return $('a[href="/docs/api"]');
    }

    public get beadcrumbs () {
        return $('ul.breadcrumbs');
    }

    public async apiNavItemClick() {
        await this.apiNavItem.click();
    }

    public async navItemClick (item: string) {
        await this.navItem(item).click();
    }

    public async searchClick() {
        await this.search.click();
    }

    public async searchInputClear() {
        await this.searchInput.clearValue();
    }

    public async searchInputClick() {
        await this.searchInput.click();
    }

    public async searchInputType(searchTerm: string) {
        await this.searchInput.setValue(searchTerm);
    }

    // public async searchInputType(searchTerm: string) {
    //     await this.searchInput.setValue(searchTerm);
    // }
}

export default new Header();