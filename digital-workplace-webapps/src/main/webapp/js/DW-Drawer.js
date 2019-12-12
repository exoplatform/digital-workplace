(function($) {
    var positionTop = 0;
    var topScroll = 0;
    var DWDrawer = {
        initDrawer : function() {
                $(document).ready(function() {
                    $(document).on('click','.openDrawerBtn',function(e) {
                        $('body').addClass('open-drawer');
                    });

                    var leftSideBar = $('#DWLeftNavigation');
                    var administrationDrawer = $('.administrationDrawer');
                    var adminTitleItem = $('.administrationTitle');

                    var spacesDrawer = $('.recentDrawer');
                    var spacesTitleItem = $('.spacesNavigationTitle');

                    $("#DWLeftNavigation").on('scroll', function() {
                        topScroll = $("#DWLeftNavigation").scrollTop();
                    });

                    DWDrawer.toggleLeftMenuDrawer(adminTitleItem, leftSideBar, administrationDrawer, 'openAdministrationMenu');
                    DWDrawer.toggleLeftMenuDrawer(spacesTitleItem, leftSideBar, spacesDrawer, 'openRecentSpaces');

                    /*----------------------------Recent spaces Mobiles ---------------------------*/

                    if ($(window).width() <= 599) {
                        $('.spacesNavigationTitle').on({
                            click: function() {
                                $(".recentDrawer").addClass("activeDrawerMobile");
                                leftSideBar.addClass('openRecentSpaces');
                            },
                        });

                        $(document).on('click','.backToMenu',function(e) {
                            $('.recentDrawer').removeClass('activeDrawerMobile');
                            leftSideBar.removeClass('openRecentSpaces');
                        });
                    }

                    $(document).on('click','#DWLeftNavigationContainer',function(e) {
                        if(e.target == this) {
                            $('body').removeClass('open-drawer');
                            leftSideBar.removeClass('openRecentSpaces');
                            leftSideBar.removeClass('openAdministrationMenu');
                            leftSideBar.scrollTop(0);
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
                    if(topScroll < positionTop) {
                        topScroll = positionTop;
                    }
                    leftNavigation.css("margin-top", "-"+ topScroll+"px");
                    drawer.css("margin-top", topScroll+"px");
                    leftNavigation.addClass(className);
                },
                mouseleave: function() {
                    if(drawer.mousenter) {
                        leftNavigation.css("margin-top", "-"+ topScroll+"px");
                        drawer.css("margin-top", topScroll+"px");
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