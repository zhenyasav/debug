if Meteor.settings?.public?.debugCss isnt false
	Meteor.startup ->
		$(window).on 'keyup', (e) ->
			if e.keyCode is 192 and e.ctrlKey
				$('html').toggleClass 'debug'