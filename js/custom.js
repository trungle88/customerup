$(document).ready(function() {
	$('.tabs').tabs();
});

$(window).load(function(){
	jQuery('ul.list-mp3 li').each(function(i){
		selector = jQuery(this).find('.jp-jplayer').attr('id');
		name = jQuery(this).find('button').attr('rel');
		mp3(jQuery('#'+ selector),name,i+1);
	});
});

function position () {
	same('.img-say','.content-say');
	var h_img = jQuery('.img-say img').height();
	jQuery('.img-say img').css('marginTop',(jQuery('.img-say').height()-h_img)/2);
}

function same(select,select2){
	var h1 = jQuery(select).height();
	var h2 = jQuery(select2).height();
	if(h1 > h2){
		jQuery(select2).height(h1);
	}
	else{
		jQuery(select).height(h2);
	}
}

function mp3(selector,mp3,location){
	selector.jPlayer({
        ready: function(event) {
            jQuery(this).jPlayer("setMedia", {
				title: "Bubble",
				m4a: "mp3/"+mp3+".mp3",
				oga: "mp3/"+mp3+".ogg"
            });
        },
        cssSelectorAncestor: ".jp_interface_" + location,
        swfPath: "/js",
        supplied: "mp3, oga",
		wmode: "window",
		useStateClassSkin: true,
		autoBlur: false,
		smoothPlayBar: true,
		keyEnabled: true,
		remainingDuration: false,
		toggleDuration: false
    });
}


(function($){
	$.fn.tabs = function(){
		var tabs = this;
		position();
		if(tabs.length == 0) return tabs;
		
		tabs.find('.tab-title a').click(function(event){
			event.preventDefault();
			var id = $(this).attr('rel');
			tabs.find('.tab-title .active').removeClass('active');
			tabs.find('.tab-content').hide().filter('#' + id).show();
			$(this).addClass('active');
		});
		
		tabs.find('.tab-content').hide().filter('#' + tabs.find('.tab-title .active').attr('rel')).show();
		
		return this;
	}
})(jQuery);