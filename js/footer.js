soundManager.useFlashBlock = true; // optional - if used, required flashblock.css
soundManager.url = 'soundmanager2.swf';

function play_mp3(flg, ids, mp3url, volume, loops) {
	//Check the file URL parameter value
	var pieces = mp3url.split("|");
	if (pieces.length > 1) {//We have got an .ogg file too
		mp3file = pieces[0];
		oggfile = pieces[1];
		//set the file URL to be an array with the mp3 and ogg file
		mp3url = new Array(mp3file, oggfile);
	}

	soundManager.createSound({
		id: 'btnplay_' + ids,
		volume: volume,
		url: mp3url
	});

	if (flg == 'play') {
		soundManager.play('btnplay_' + ids, {
			onfinish: function() {
				if (loops == 'true') {
					loopSound('btnplay_' + ids);
				}
				else {
					document.getElementById('btnplay_' + ids).style.display = 'inline';
					document.getElementById('btnstop_' + ids).style.display = 'none';
				}
			}
		});
	}
	else if (flg == 'stop') {
		//soundManager.stop('btnplay_'+ids);
		soundManager.pause('btnplay_' + ids);
	}
}
function show_hide(flag, ids) {
	if (flag == 'play') {
		document.getElementById('btnplay_' + ids).style.display = 'none';
		document.getElementById('btnstop_' + ids).style.display = 'inline';
	}
	else if (flag == 'stop') {
		document.getElementById('btnplay_' + ids).style.display = 'inline';
		document.getElementById('btnstop_' + ids).style.display = 'none';
	}
}
function loopSound(soundID) {
	window.setTimeout(function() {
		soundManager.play(soundID, {
			onfinish: function() {
				loopSound(soundID);
			}
		});
	}, 1);
}
function stop_all_tracks() {
	soundManager.stopAll();
	var inputs = document.getElementsByTagName("input");
	for (var i = 0; i < inputs.length; i++) {
		if (inputs[i].id.indexOf("btnplay_") == 0) {
			inputs[i].style.display = 'inline';//Toggle the play button
		}
		if (inputs[i].id.indexOf("btnstop_") == 0) {
			inputs[i].style.display = 'none';//Hide the stop button
		}
	}
}