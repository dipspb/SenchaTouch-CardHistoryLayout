(function(Ext) {

    new Ext.Application({
        launch: function(){

            var panel = new Ext.Panel({
                fullscreen: true,
                layout: {
                    xtype: 'layout',
                    type:'cardhistory',
                    defaultAnimation: 'slide'
                },
                dockedItems: [
                    {
                        xtype: 'toolbar',
                        dock : 'top',
                        title: 'CardHistoryLayout demo',
                        items: [
                            {
                                xtype: 'button',
                                text: 'Back',
                                ui: 'back',
                                handler: function() {
                                    panel.getLayout().back();
                                }
                            },
                            {xtype: 'spacer'},
                            {xtype: 'spacer'},
                            {
                                xtype: 'button',
                                text: 'page1',
                                handler: function() {
                                    panel.getLayout().forth('page1');
                                }
                            },
                            {
                                xtype: 'button',
                                text: 'page2',
                                handler: function() {
                                    panel.getLayout().forth('page2');
                                }
                            },
                            {
                                xtype: 'button',
                                text: 'page3',
                                handler: function() {
                                    panel.getLayout().forth('page3');
                                }
                            }
                        ]
                    }
                ],
                items: [
                    {
                        xtype: 'panel',
                        html: '<h2>Main Panel</h2><p>Press page buttons in any order, ' +
                                'then use Back button to navigate history back.</p>',
                        styleHtmlContent: true
                    },
                    {
                        id: 'page1',
                        xtype: 'panel',
                        html: 'Page #1',
                        styleHtmlContent: true
                    },
                    {
                        id: 'page2',
                        xtype: 'panel',
                        html: 'Page #2',
                        styleHtmlContent: true
                    },
                    {
                        id: 'page3',
                        xtype: 'panel',
                        html: 'Page #3',
                        styleHtmlContent: true
                    }
                ]
            });
        }
    });

})(Ext);
