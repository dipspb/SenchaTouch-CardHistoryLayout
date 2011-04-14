SenchaTouch-CardHistoryLayout
===

This layout extends Ext.layout.CardLayout introducing item transitions history with appropriate methods. It can handle state of toolbar the back control.

## Features

* Doesn't require you to use any exact type of toolbar or back control. Any will do.
* Doesn't assume or require any exact order of switching cards forth. Any order supported. You can switch, say, A->B->E->D->C->B->A. It will step pages history back as A->B->C->D->E->B->A.
* Provides ability to setup default transition animation via *defaultAnimation* config option.
* Store in history the animation used in each step forth, to provide correct reverse animation for each step back.
* Optionally can store current cart title in history and restore it while transiting back.
* Optionally can update visibility state and text for any type of "Back" control.

See index.html and index.js for full usage example.

## Usage

Use this sample to define layout for container:

    var panel = new Ext.Panel({
        id: 'someId'
        fullscreen: true,
        layout: {
            xtype: 'layout',
            type:'cardhistory',
            defaultAnimation: 'slide',

            // To obtain current card title
            getTitle: function() {
                return Ext.getCmp('someToolbar').titleEl.getHTML();
            },

            // To apply title value
            setTitle: function(text) {
                var tb = Ext.getCmp('someToolbar');
                tb.setTitle(text);
                tb.doComponentLayout();
            },

            // To set Back control state
            setBack: function(visible, text) {
                var backBtn = Ext.getCmp('someBackButton');
                backBtn.setText(text);
                backBtn.setVisible(visible);
                backBtn.doComponentLayout();
            }
        },
        items: [
            {
                xtype: 'panel',
                // To define card title in a static way
                cardHistoryTitle: 'First list'
            },
            {
                xtype: 'panel',
                cardHistoryTitle: 'Second list'
            }
        ]
    });

Use this sample to switch active items forth and back:

    // Using of optionalItemTitle parameter here is one more way to setup card title dynamically
    panel.getLayout().forth('someItemId_orInstance', someOptionalAnimation_asName_orInstance, 'optionalItemTitle');
    panel.getLayout().back();

## Card title handling

You can use any type of titles and toolbars. To enable CardHistoryLayout handle titles automatically you need to define
two handlers as it shown in the sample above: *getTitle* and *setTitle*.

There are two ways to define next card title while transiting forth (in order of precedence, from high to low):

1. Using nextTitle parameter of the forth method
2. Using cardHistoryTitle custom config option for the card

## Back control state handling

To enable CardHistoryLayout handle the state of Back control you need to define *setBack* handler as it shown in the sample above.

## Meta
Created and maintained by Dmitry Prokhorov.

Released under the [MIT License](http://www.opensource.org/licenses/mit-license.php).