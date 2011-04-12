SenchaTouch-CardHistoryLayout
===

This layout extends Ext.layout.CardLayout introducing item transitions history with appropriate methods. Also,
it provides ability to setup default transition animation via defaultAnimation config option.

It remembers each animation used to step forth and provides correct reverse animation for each step back.

See index.html and index.js for full usage example.

## Usage

Use this sample to define layout for container:

    var panel = new Ext.Panel({
        fullscreen: true,
        layout: {
            xtype: 'layout',
            type:'cardhistory',
            defaultAnimation: 'slide'
        },
        items: [
            //some items goes here..
        ]
    });

Use this sample to switch active items forth an back:

    panel.getLayout().forth('someItemId_orInstance', someOptionalAnimation_asName_orInstance);
    panel.getLayout().back();

## Meta
Created and maintained by Dmitry Prokhorov.

Released under the [MIT License](http://www.opensource.org/licenses/mit-license.php).