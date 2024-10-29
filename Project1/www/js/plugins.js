// Generated by RPG Maker.
// Do not edit this file directly.
var $plugins =
[
{"name":"SRD_SuperToolsEngine","status":true,"description":"The heart of all maker-style plugins; it adds a playtesting editor that can be opened with F12.","parameters":{"Connect Editor":"true","Auto Open Window":"false","Auto Move Window":"true","Menu Editor Exempt List":"[\"Window_BattleLog\",\"Window_MapName\"]"}},
{"name":"SRD_GameUpgrade","status":true,"description":"Enables more customization over the core mechanics of one's game while also providing additional functions for future plugins.","parameters":{"Game Window":"====================================","Game Reconstruction (1.5.X & below)":"true","Game Resolution":"{\"Width\":\"816\",\"Height\":\"624\"}","Screen Resolution":"{\"Width\":\"\",\"Height\":\"\"}","Minimum Resolution":"{\"Width\":\"408\",\"Height\":\"312\"}","Maximum Resolution":"{\"Width\":\"\",\"Height\":\"\"}","Window Title":"","Allow Resize":"true","Initial Fullscreen":"false","Show Frame":"true","Always on Top":"false","Core Defaults":"====================================","Audio Master Volume":"100","Video Master Volume":"100","Image Cache Limit":"30","Decrypter Ignore List":"[\"system/Window.png\"]","JsonEx Max Depth":"100","Retry Intervals":"[\"500\",\"1000\",\"3000\"]","HTML Settings":"====================================","Background Color":"#000000","Image Rendering":"auto","PIXI Settings":"====================================","Garbage Collection Mode":"Automatic","Round Pixels":"false","Scale Mode":"Nearest","Wrap Mode":"Clamp"}},
{"name":"SRD_TitleCommandCustomizer","status":true,"description":"Allows customization over the Title Command Window.\r\nCan customize size, position, rows, columns, and commands.","parameters":{"Command Data":"[\"{\\\"Text\\\":\\\"EVAL: \\\\\\\"\\\\\\\\\\\\\\\\i[73] \\\\\\\" + TextManager.newGame\\\",\\\"Symbol\\\":\\\"newGame\\\",\\\"Action\\\":\\\"this.commandNewGame.bind(this)\\\",\\\"Enabled\\\":\\\"true\\\",\\\"Visible\\\":\\\"true\\\"}\",\"{\\\"Text\\\":\\\"EVAL: this.isContinueEnabled() ? \\\\\\\"\\\\\\\\\\\\\\\\i[75] \\\\\\\" + TextManager.continue_ : \\\\\\\"\\\\\\\\\\\\\\\\i[74] No Saves\\\\\\\"\\\",\\\"Symbol\\\":\\\"continue\\\",\\\"Action\\\":\\\"this.commandContinue.bind(this)\\\",\\\"Enabled\\\":\\\"this.isContinueEnabled()\\\",\\\"Visible\\\":\\\"true\\\"}\",\"{\\\"Text\\\":\\\"EVAL: \\\\\\\"\\\\\\\\\\\\\\\\i[83] \\\\\\\" + TextManager.options\\\",\\\"Symbol\\\":\\\"options\\\",\\\"Action\\\":\\\"this.commandOptions.bind(this)\\\",\\\"Enabled\\\":\\\"true\\\",\\\"Visible\\\":\\\"true\\\"}\",\"{\\\"Text\\\":\\\"\\\\\\\\i[82] Shutdown\\\",\\\"Symbol\\\":\\\"shutdown\\\",\\\"Action\\\":\\\"window.close.bind(window)\\\",\\\"Enabled\\\":\\\"true\\\",\\\"Visible\\\":\\\"true\\\"}\",\"{\\\"Text\\\":\\\"Common Event 1\\\",\\\"Symbol\\\":\\\"common-event-1\\\",\\\"Action\\\":\\\"this.playCommonEvent.bind(this, 1)\\\",\\\"Enabled\\\":\\\"false\\\",\\\"Visible\\\":\\\"false\\\"}\"]","Command Order":"[\"newGame\",\"continue\",\"options\",\"shutdown\"]","Window Settings":"====================================","Allow Text Codes":"true","Command Text Alignment":"left","Command Text Font":"Times New Roman","Window Opacity":"255","Window Padding":"18","Window Position/Size":"====================================","Window X":"(Graphics.boxWidth - this.width) / 2 - 240","Window Y":"Graphics.boxHeight - this.height - 20","Window Width":"240 * this.maxCols()","Window Height":"this.fittingHeight(this.numVisibleRows())","Window Rows":"4","Window Columns":"1"}},
{"name":"CustomLogo","status":false,"description":"Shows RPG Maker and user logos at the start of the game.","parameters":{"logo1":"","logo1ImageName":"MadeWithMv","logo1Skippable":"true","logo1Coordinate":"","logo1X":"408","logo1Y":"312","logo1Origin":"0.5","logo1Time":"","logo1FadeinFrames":"12","logo1FadeoutFrames":"12","logo1DurationFrames":"120","logo2":"","logo2ImageName":"","logo2Skippable":"true","logo2Coordinate":"","logo2X":"408","logo2Y":"312","logo2Origin":"0.5","logo2Time":"","logo2FadeinFrames":"12","logo2FadeoutFrames":"12","logo2DurationFrames":"120","logo3":"","logo3ImageName":"","logo3Skippable":"true","logo3Coordinate":"","logo3X":"408","logo3Y":"312","logo3Origin":"0.5","logo3Time":"","logo3FadeinFrames":"12","logo3FadeoutFrames":"12","logo3DurationFrames":"120","allowTotalSkip":"true"}},
{"name":"TitleCommandPosition","status":false,"description":"Changes the position of the title command window.","parameters":{"Offset X":"-230","Offset Y":"30","Width":"240","Background":"0"}}
];
