function doIt() {
	$("#button").attr("disabled", true);
	$("body").addClass("evilbody").append("<br /><div>Thank you so much for all of your help! I wish I could pay you back somehow, but whenever you hear my idea, think of me! I hope you think I'm cool forever LOL</div>");
	setTimeout(function() {
		$("body").append("<br /><div class='evilreturns'><a href='fake'>>:)</a></div>");
	}, 1000 * 20);
}