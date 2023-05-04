$(document).ready(function() {
    var plinks = [
       	{
            name: 'twitter',
			plink: 'https://twitter.com/princeweixiann'
        },
       	{
            name: 'instagram',
			plink: 'https://www.instagram.com/xiannxtdoor/?hl=en'
        },
       	{
            name: 'steam profile',
			plink: 'http://steamcommunity.com/id/smokeweed420policecantcatchme'
        },
	{
            name: 'tiktok',
			plink: 'https://www.tiktok.com/@shawnxiann'
        },
		];    
		
    for (var i in plinks) {
        var plink = plinks[i];
        $('#marquee').append('<a href="'+ plink.plink + '" target="_blank" style="text-decoration:none;">' + plink.name + '</a>');
        var plink = $('#marquee').children('a').last();
        if (i != plinks.length - 1) {
            $('#marquee').append(' · ')
        }
    }
    $('#marquee').marquee({
        duration: 7000,
        gap: 310,
        delayBeforeStart: 0,
        direction: 'left',
        duplicated: true,
    })
	
	});
