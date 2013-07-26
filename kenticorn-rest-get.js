$.get('http://localhost/vasilovi/rest/cms.country?topn=10&columns=CountryID,CountryName,CountryDisplayName&where=countryid=271&format=json', function(data) {
    $(data.cms_countries).each(function() {
	        $(this.cms_country).each(function(){
            $('#box').append( "Country: " + this.CountryDisplayName);
        });
    });
}, "json");
