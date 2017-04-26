var Ajax = (function () {
	var res;

	function _getData(url, suc_func, fail_func) {
		$.ajax({
			type: "GET",
			url: url,
			success: function (args) { //wrapper
				suc_func(args);
			},
			error: function (e) {
			}
		});
	}

	return {
		getData: _getData
	};
}());

Ajax.getData('http://localhost:8080', function (args) {console.log(args)});
