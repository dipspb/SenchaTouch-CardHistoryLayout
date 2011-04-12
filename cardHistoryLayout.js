/**
 * @class Ext.ux.layout.CardHistoryLayout
 * @extends Ext.layout.CardLayout
 * 
This layout extends Ext.layout.CardLayout introducing item transitions history with appropriate methods. Also,
 * it provides ability to setup default transition animation via defaultAnimation config option. It remembers
 * each animation used to step forth and provides correct reverse animation for each step back.
 *
 * usage:
 *
 *             var panel = new Ext.Panel({
 *              fullscreen: true,
 *              layout: {
 *                  xtype: 'layout',
 *                  type:'cardhistory',
 *                  defaultAnimation: 'slide'
 *               },
 *               items: [
 *               ...
 *               ]
 *             });
 *
 *
 *  panel.getLayout().forth('someItemId_orInstance', someOptionalAnimation_asName_orInstance);
 *  panel.getLayout().back();
 *

 *
 */

if (!Ext.ux.layout) Ext.ux.layout = {};

Ext.ux.layout.CardHistoryLayout = Ext.extend(Ext.layout.CardLayout, {
    type: 'cardhistory',

    defaultAnimation: false,

    constructor: function(config){
        Ext.apply(this, config);
        Ext.ux.layout.CardHistoryLayout.superclass.constructor.apply(this, arguments);

        this.history = [];

        this.reverse = function(animation) {
            var a = ('string' == typeof animation) ? Ext.anims[animation] : animation;
            if (!a) return animation;

            function BackAnimation(){}
            BackAnimation.prototype = a;
            var ba = new BackAnimation();

            ba.config = Ext.apply({}, {reverse: true}, a.config);
            return ba;

        };
    },

/**
     * Return true if item history is empty.
     * @returns {boolean}
     */
    isHistoryEmpty: function() {
        return (0 == this.history.length);
    },

/**
     * Set new active item. Current active item is pushed to the history.
     * @param {Mixed} item The item to set as active.
     * @param {Mixed} animation Animation to use in transition.
     */
    forth: function(item, animation) {
        var anim = animation || this.defaultAnimation;
        if ('string' == typeof anim) {
            anim = Ext.anims[anim];
        }
        this.history.push({item: this.getActiveItem(), animation: anim});
        this.setActiveItem(item, anim);
    },

/**
     * Set active previous item from the history.
     */
    back: function() {
        if (this.isHistoryEmpty()) return;
        var prevState = this.history.pop();
        this.setActiveItem(prevState.item, this.reverse(prevState.animation));
    }
});

Ext.regLayout('cardhistory', Ext.ux.layout.CardHistoryLayout);