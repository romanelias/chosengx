function ChosenGx($)
{
	this.NoResults;
	this.EmptyItem;
	this.Separator;

	this.show = function()
	{
		///UserCodeRegionStart:[show] (do not remove this comment.)
		
		
		///UserCodeRegionEnd: (do not remove this comment.)
	}
	///UserCodeRegionStart:[User Functions] (do not remove this comment.)
	if (!this.IsPostBack){
		var _thischosen = this;
		var config = {
		'.chosen-select' : {}, '.chosen-multi' : {}
		}

	    gx.fx.obs.addObserver('gx.onready',this,function() { //gx.evt.on_ready(window, function() {
			for (var selector in config) {
				config[selector].allow_single_deselect = true;
				config[selector].placeholder_text = _thischosen.EmptyItem;
				config[selector].no_results_text = _thischosen.NoResults;
				config[selector].separator = _thischosen.Separator;
				$(selector).each(function() {
					if (!($(this).css('display') == 'none')) {
						var optionempty = $(this).find('option[value=""]');
						if (optionempty.length) {
							$(this).attr('data-placeholder',optionempty.text())
							optionempty.text('');
							if (selector == '.chosen-multi') {
								optionempty && optionempty.removeAttr('selected');
								$(this).attr('multiple','multiple');
							}
						} else {
							if (selector == '.chosen-multi') {
								$(this).prepend( "<option value></option>" )
								$(this).attr('multiple','multiple');
							}
						}
						$(this).chosen(config[selector]);
					}
				});
			};
		});
		
		gx.fx.obs.addObserver('gx.control.onafterpropertychange',this,function(c) {
			if (($(c.control).hasClass('chosen-select') || $(c.control).hasClass('chosen-multi')) && c.property == "Visible" && c.value == true) {
				$(c.control).hide();
			}
			if (($(c.control).hasClass('chosen-select') || $(c.control).hasClass('chosen-multi')) && c.property == "Value") {
				$(c.control).trigger("chosen:updated.chosen");
			}
			if (($(c.control).hasClass('chosen-select') || $(c.control).hasClass('chosen-multi')) && c.property == "Enabled") {
				$(c.control).trigger("chosen:updated.chosen");
			}	
		});
	}	
	
	///UserCodeRegionEnd: (do not remove this comment.):
}
