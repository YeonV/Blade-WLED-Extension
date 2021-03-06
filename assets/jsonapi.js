let currentState = {};

window.getCurrentState = () => {
  $.getJSON(
    `http://${globals.ip}/json/state`,
    function(data) {
      currentState = data;
      $('.globals-wrapper li').addClass('online');
      $('.dev2 textarea#currentState')[0].value = JSON.stringify(
        currentState,
        null,
        4
      );
    },
    function(data, status, xhr) {
      // console.log('RESPONSE', data, status, xhr);
    }
  );
};

window.getEffectList = () => {
  $.getJSON(`http://${globals.ip}/json/effect`, function(data) {
    globals.wledEffects = data;
    // console.log('Got Effects:', globals.wledEffects);
  });
};
window.getPaletteList = () => {
  $.getJSON(`http://${globals.ip}/json/palette`, function(data) {
    globals.wledPalettes = data;
    // console.log('Got Palettes:', globals.wledPalettes);
  });
};
setTimeout(() => {
  getEffectList();
  getPaletteList();
}, 200);

window.setLastCheckedState = () => {
  // console.log('Setting Last Current State');
  setState(currentState);
};
window.setState = state => {
  // console.log('Setting State:', state);
  $.ajax({
    type: 'POST',
    url: `http://${globals.ip}/json/state`,
    async: true,
    timeout: 1000,
    data: JSON.stringify(state),
    contentType: 'application/json; charset=utf-8',
    dataType: 'json',
    success: function(data) {
      // console.log('State set', data);
    },
    failure: function(errMsg) {
      alert(errMsg);
    }
  });
};

$('#dev-button2 , #json-get-current').on('click', () => {
  getCurrentState();
});
$('#dev-button5').on('click', () => {
  getEffectList();
  getPaletteList();
});

$('#dev-button3').on('click', () => {
  setLastCheckedState();
});
$('#dev-button4').on('click', () => {
  const newState = $('.dev2 textarea#currentState')[0].value;
  setState(JSON.parse(newState));
});
