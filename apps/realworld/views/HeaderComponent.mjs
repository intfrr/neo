import {default as Component} from '../../../src/component/Base.mjs';
import NeoArray               from '../../../src/util/Array.mjs';

/**
 * @class RealWorld.views.HeaderComponent
 * @extends Neo.component.Base
 */
class HeaderComponent extends Component {
    static getConfig() {return {
        /**
         * @member {String} className='RealWorld.views.HeaderComponent'
         * @private
         */
        className: 'RealWorld.views.HeaderComponent',
        /**
         * @member {String} ntype='realworld-headercomponent'
         * @private
         */
        ntype: 'realworld-headercomponent',
        /**
         * @member {String} activeItem_='home'
         */
        activeItem_: 'home',
        /**
         * @member {String[]} cls=['navbar navbar-light']
         */
        cls: ['navbar navbar-light'],
        /**
         * @member {Object} _vdom
         */
        _vdom: {
            tag: 'nav',
            cls: ['navbar navbar-light'],
            cn : [{
                cls: ['container'],
                cn : [{
                    tag : 'a',
                    cls : ['navbar-brand'],
                    href: '#/',
                    html: 'conduit'
                }, {
                    tag: 'ul',
                    cls: ['nav navbar-nav', 'pull-xs-right'],
                    cn : [{
                        tag: 'li',
                        cls: ['nav-item'],
                        cn : [{
                            tag : 'a',
                            cls : ['nav-link'],
                            href: '#/',
                            html: 'Home'
                        }]
                    }, {
                        tag: 'li',
                        cls: ['nav-item'],
                        cn : [{
                            tag : 'a',
                            cls : ['nav-link'],
                            href: '#newpost',
                            cn: [{
                                tag: 'i',
                                cls: 'ion-compose'
                            }, {
                                vtype: 'text',
                                html : '&nbsp;New Post'
                            }]
                        }]
                    }, {
                        tag: 'li',
                        cls: ['nav-item'],
                        cn : [{
                            tag : 'a',
                            cls : ['nav-link'],
                            href: '#usersettings',
                            cn: [{
                                tag: 'i',
                                cls: 'ion-gear-a'
                            }, {
                                vtype: 'text',
                                html : '&nbsp;Settings'
                            }]
                        }]
                    }, {
                        tag: 'li',
                        cls: ['nav-item'],
                        cn : [{
                            tag : 'a',
                            cls : ['nav-link'],
                            href: '#/register',
                            html: 'Sign up'
                        }]
                    }]
                }]
            }]
        }
    }}

    /**
     *
     * @param {String} value
     * @returns {Number} The tartget index
     */
    getActiveIndex(value) {
        switch (value) {
            case 'newpost'     : return 1;
            case 'usersettings': return 2;
            case '/login'      : return 3;
            case '/register'   : return 3;
        }

        // default to home
        return 0;
    }

    /**
     * Tiggered after the activeItem config got changed
     * @param {String} value
     * @param {String} oldValue
     * @private
     */
    afterSetActiveItem(value, oldValue) {
        let me   = this,
            vdom = me.vdom;

        if (oldValue) {
            NeoArray.remove(vdom.cn[0].cn[1].cn[me.getActiveIndex(oldValue)].cn[0].cls, 'active');
        }

        NeoArray.add(vdom.cn[0].cn[1].cn[me.getActiveIndex(value)].cn[0].cls, 'active');

        me.vdom = vdom;
    }
}

Neo.applyClassConfig(HeaderComponent);

export {HeaderComponent as default};