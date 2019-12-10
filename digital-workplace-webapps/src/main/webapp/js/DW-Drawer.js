(function($) {
    var DWDrawer = {
        initDrawer : function() {
                $(document).ready(function() {
                    $(document).on('click','.openDrawerBtn',function(e) {
                        $('body').addClass('open-drawer');
                    });

                    var positionTop = 0;
                    var leftSideBar = $('#DWLeftNavigation');
                    var administrationDrawer = $('.administrationDrawer');
                    var adminTitleItem = $('.administrationTitle');

                    var spacesDrawer = $('.recentDrawer');
                    var spacesTitleItem = $('.spacesNavigationTitle');
                    DWDrawer.toggleLeftMenuDrawer(adminTitleItem, leftSideBar, administrationDrawer, 'openAdministrationMenu');
                    DWDrawer.toggleLeftMenuDrawer(spacesTitleItem, leftSideBar, spacesDrawer, 'openRecentSpaces');

                    /*----------------------------Recent spaces Mobiles ---------------------------*/

                    if ($(window).width() <= 599) {
                        $('.spacesNavigationTitle').on({
                            click: function() {
                                $(".recentDrawer").addClass("activeDrawerMobile");
                                $('#DWLeftNavigation').addClass('openRecentSpaces');
                            },
                        });

                        $(document).on('click','.backToMenu',function(e) {
                            $('.recentDrawer').removeClass('activeDrawerMobile');
                            $('#DWLeftNavigation').removeClass('openRecentSpaces');
                        });
                    };

                    $(document).on('click','#DWLeftNavigationContainer',function(e) {
                        if(e.target == this) {
                            $('body').removeClass('open-drawer');
                            $('#DWLeftNavigation').removeClass('openRecentSpaces');
                            $('#DWLeftNavigation').removeClass('openAdministrationMenu');
                            $("#DWLeftNavigation").scrollTop(0);
                        }
                    });

                });
        },
        getScrollTopPosition : function() {
            return $('#DWLeftNavigation').scrollTop();
        },
        toggleLeftMenuDrawer : function(item, leftNavigation, drawer, className ) {
            item.on({
                mouseenter: function() {
                    positionTop = DWDrawer.getScrollTopPosition();
                    leftNavigation.css("margin-top", "-"+ positionTop+"px");
                    drawer.css("margin-top", positionTop+"px");
                    leftNavigation.addClass(className);
                },
                mouseleave: function() {
                    if(drawer.mousenter) {
                        leftNavigation.css("margin-top", "-"+ positionTop+"px");
                        drawer.css("margin-top", positionTop+"px");
                    } else {
                        leftNavigation.removeClass(className);
                        leftNavigation.css("margin-top", "0");
                        drawer.css("margin-top", "0");
                    }
                }
            });
        }
    };
    return DWDrawer;
})($);