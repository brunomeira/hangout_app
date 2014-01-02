var HOST = 'https://raw.github.com/brunomeira/hangout_app/master/';

var initHangout = function (apiInitEvent) {
  gapi.hangout.layout.setChatPaneVisible(true);
  gapi.hangout.onApiReady.remove(initHangout);
}

gapi.hangout.onApiReady.add(initHangout);