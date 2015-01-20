var cheerio = require("cheerio");
var crawler = require("./crawler");

var url = "http://www.afconsult.com/sv/Karriar/Lediga-jobb/?country=SE&viewall=1";
var path = "td.column-1 > a";

//Do the crawl
crawler.download(url, function(data) {
	if (data) {
		var $ = cheerio.load(data);
		// Tell program where to look
		$("td.column-1 > a").each(function(i, e) {
			console.log($(e).attr("href"));
		});
		
		console.log("done");
	}
	else {
		console.log("error");
	}
});

// TODO Make something instead of just throw it all in the log...