(function($) {
    var DWDrawer = {
        initDrawer : function() {
                $(document).ready(function() {
                    $(document).on('click','.openDrawerBtn',function(e) {
                        $('body').addClass('open-drawer');
                    });

                    var positionTop = 0;
                    $("#DWLeftNavigation").on('scroll', function() {
                        positionTop = $("#DWLeftNavigation").scrollTop();
                        console.log(positionTop);
                    });

                    /*------------------- Administration drawer-------------------------*/

                    $('.administrationTitle').on({
                        mouseenter: function() {
                            $("#DWLeftNavigation").css("margin-top", "-"+ positionTop+"px");
                            $(".administrationDrawer").css("margin-top", positionTop+"px");
                            $("#DWLeftNavigation").addClass("openAdministrationMenu");
                        },
                        mouseleave: function() {
                            if($(".recentDrawer").mousenter) {
                                $("#DWLeftNavigation").css("margin-top", "-"+ positionTop+"px");
                                $(".administrationDrawer").css("margin-top", positionTop+"px");
                            } else {
                                $("#DWLeftNavigation").removeClass("openAdministrationMenu");
                                $("#DWLeftNavigation").css("margin-top", "0");
                                $(".administrationDrawer").css("margin-top", "0");
                            }
                        }
                    });


                    /*------------------- Recent spaces drawer-------------------------*/

                    $('.spacesNavigationTitle').on({
                        mouseenter: function() {
                            $("#DWLeftNavigation").css("margin-top", "-"+ positionTop+"px");
                            $(".recentDrawer").css("margin-top", positionTop+"px");
                            $("#DWLeftNavigation").addClass("openRecentSpaces");
                        },
                        mouseleave: function() {
                            if($(".recentDrawer").mousenter) {
                                $("#DWLeftNavigation").css("margin-top", "-"+ positionTop+"px");
                                $(".administrationDrawer").css("margin-top", positionTop+"px");
                            } else {
                                $("#DWLeftNavigation").removeClass("openRecentSpaces");
                                $("#DWLeftNavigation").css("margin-top", "0");
                                $(".recentDrawer").css("margin-top", "0");
                            }
                        }
                    });

                    $(document).on('click','#DWLeftNavigationContainer',function(e) {
                        if(e.target == this) {
                            $('body').removeClass('open-drawer');
                            $('#DWLeftNavigation').removeClass('openRecentSpaces');
                            $('#DWLeftNavigation').removeClass('openAdministrationMenu');
                            $("#DWLeftNavigation").scrollTop(0);
                        }
                    });

                });
        }
    };
    return DWDrawer;
})($);