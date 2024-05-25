import { $ } from '@wdio/globals'
import Page from './page.js';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class APIPage extends Page {

    public navItem (item: string) {
        return $('a[href="/docs/api/' + item + '"]');
    }

    public get navItemProtocolsList () {
        return $$('.theme-doc-sidebar-item-category.theme-doc-sidebar-item-category-level-1.menu__list-item ul.menu__list');
    }

    public get navItemProtocolsListItems () {
        return $$('ul.theme-doc-sidebar-menu.menu__list .theme-doc-sidebar-item-link.theme-doc-sidebar-item-link-level-2.menu__list-item a.menu__link');
    }

    public async navItemProtocolsClick (item: string) {
        await this.navItem(item).click();
    }
}

export default new APIPage();