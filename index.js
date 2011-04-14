(function(Ext) {

    var page2VisitCounter = 0;

    new Ext.Application({
        launch: function(){

            var panel = new Ext.Panel({
                fullscreen: true,
                layout: {
                    xtype: 'layout',
                    type:'cardhistory',
                    defaultAnimation: 'slide',
                    // To define card title dynamically
                    getTitle: function() {
                        return Ext.getCmp('topToolbar').titleEl.getHTML();
                    },

                    // To apply title value
                    setTitle: function(text) {
                        var tb = Ext.getCmp('topToolbar');
                        tb.setTitle(text);
                        tb.doComponentLayout();
                    },

                    // To set Back control state
                    setBack: function(visible, text) {
                        var backBtn = Ext.getCmp('backButton');
                        backBtn.setText(text);
                        backBtn.setVisible(visible);
                        backBtn.doComponentLayout();
                    }
                },
                dockedItems: [
                    {
                        xtype: 'toolbar',
                        id: 'topToolbar',
                        dock : 'top',
                        title: 'CardHistoryLayout demo',
                        items: [
                            {
                                xtype: 'button',
                                id: 'backButton',
                                text: 'Back',
                                ui: 'back',
                                hidden: true,
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
                                    page2VisitCounter += 1;
                                    // set non-default title for page2
                                    var title = 'Page2 visited ' +page2VisitCounter +' times';
                                    panel.getLayout().forth('page2', null /*use default animation*/, title);
                                }
                            },
                            {
                                xtype: 'button',
                                text: 'page3',
                                handler: function() {
                                    // set non-default animation for page3
                                    panel.getLayout().forth('page3', 'pop' /*non default animation*/);
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
                        cardHistoryTitle: 'Title #1',
                        html: '<div class="demo1">Page #1</div>',
                        styleHtmlContent: true
                    },
                    {
                        id: 'page2',
                        xtype: 'panel',
                        cardHistoryTitle: 'Title #2',
                        html: '<div class="demo2">Page #2</div>',
                        styleHtmlContent: true
                    },
                    {
                        id: 'page3',
                        xtype: 'panel',
                        cardHistoryTitle: 'Title #3',
                        html: '<div class="demo3">Page #3</div>',
                        styleHtmlContent: true
                    }
                ]
            });
        }
    });

})(Ext);
