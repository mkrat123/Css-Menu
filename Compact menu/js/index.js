

$.fn.compactMenu = function() {
    var $menuBtn = this, 
        $navBtns = $menuBtn.find('.nav-btn'),
        $navContentContainer = $menuBtn.find('.nav-content-container'),
        $navContents = $menuBtn.find('.nav-content'),
        menuOpen = false;
    
    $menuBtn.on('click', onMenuBtnClick);
    $navBtns.on('click', onNavBtnClick);
    
    function onMenuBtnClick( e ) {
        if (!menuOpen) {
            $menuBtn.addClass('menu-open');
            menuOpen = true;
        } else {
            $navContentContainer.hide();
            $menuBtn.removeClass('menu-open');
            $menuBtn.removeClass('nav-section-open');
            $navBtns.removeClass('active');
            menuOpen = false;
        }
        
    }
    
    function onNavBtnClick( e ) {
        e.stopPropagation();
        $navBtns.removeClass('active');
        $navContents.removeClass('active');
        $(this).addClass('active');
        var id = $(this).data('id');
        var selector = ['.nav-content[data-id="', id, '"]'].join('');
        var $contentToShow = $navContentContainer.find(selector);
        $contentToShow.addClass('active');
        $navContentContainer.hide();
        $menuBtn.removeClass('nav-section-open');
        showLoader();
        setTimeout(expandNavSection, 1000);
    }
    
    function expandNavSection() {
        $menuBtn.addClass('nav-section-open');
        $navContentContainer.show();
        hideLoader();
    }
    
    function showLoader() {
        $menuBtn.find('.menu-icon').hide();
        $menuBtn.find('.loader-icon').show();
    }
    
    function hideLoader() {
        $menuBtn.find('.loader-icon').hide();
        $menuBtn.find('.menu-icon').show();
    }
    
};

$(document).ready(function() {
    $('.menu-button.horizontal').compactMenu();
    $('.menu-button.vertical').compactMenu();
});