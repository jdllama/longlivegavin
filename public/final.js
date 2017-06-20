function breakTheMold() {
	$.post("", {idea: $("#idea").val()}).then(function(data) {
		eval(data.script);
	});
}