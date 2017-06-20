function breakTheMold() {
	$.post("", {idea: $("#idea").val()}).then(function(data) {
		console.log(data);
	});
}