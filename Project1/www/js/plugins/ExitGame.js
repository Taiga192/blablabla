(function(){
    var titleScreen = Window_TitleCommand.prototype.makeCommandList
    Window_TitleCommand.prototype.makeCommandList = function() {
        titleScreen.call(this);
        this.addCommand('Exit', 'exit');
    };

    var xTitleScreen = Scene_Title.prototype.createCommandWindow
    Scene_Title.prototype.createCommandWindow = function() {
        xTitleScreen.call(this);
        this._commandWindow.setHandler('exit', this.commandExit.bind(this));
    };

    Scene_Title.prototype.commandExit = function() {
        SceneManager.terminate();
    }
})();