'use strict'
// Dropbox node module
var Dropbox2 = require('dropbox')

registerPlugin(proto(Gem, function(){
	this.name = 'DropboxIntegration'

	this.build = function(ticket, optionsObservee, api){
		var filesContainer = List()
		var buttonOptions = {
			success: function(files){
				files.forEach(function(file){
					filesContainer.item(file)
				})
			},
			cancel: function(){

			},
			linkType: 'preview',
			multiselect: true,
			folderSelect: true			
		}
		var button = Dropbox.createChooseButton(buttonOptions)

		this.add(button, filesContainer)
	}
}))