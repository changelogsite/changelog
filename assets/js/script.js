$(function() {
    var options = {
        padding: 0,
        nextSelector: 'a.next-page:last',
        contentSelector: '.post_list',
        autoTrigger: false,
        debug: true
    };

    $('.post_list').jscroll(options);
    $(document).on('click', '#expand-list', function(){
        $('.post-content').hide();
    });
    $(document).on('click', '#collapse-list', function(){
        $('.post-content').show();
    });
});