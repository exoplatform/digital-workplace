(function($) {
    var DWDrawer = {
        initDrawer : function() {
                $(document).ready(function() {
                    $(document).on('click','.openDrawerBtn',function(e) {
                        $('body').addClass('open-drawer');
                    });

                    $(document).on('click','#DWLeftNavigationContainer',function(e) {
                        if(e.target == this) {
                            $('body').removeClass('open-drawer');
                            $('#DWLeftNavigation').removeClass('openRecentSpaces');
                        }
                    });

                });
        }
    };
    return DWDrawer;
})($);