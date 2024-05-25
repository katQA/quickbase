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

    public async clickSearch() {
        await this.search.click()
    }

    public async typeInSearchInput(searchTerm: string) {
        (await this.searchInput).setValue(searchTerm);
    }
}

export default new Header();