getState().then(() => {
window.template = {
    template: {
      name: "template",
      fx: 0,
      fp: 0,
      ix: 128,
      fxSpeed: 128,
      nf: 2,
      extra: "",
      colorOne: "FF0000",
      colorTwo: "FFB14A",
      colorThree: "000000",
      timeInMin: 10,
      brightnessStart: 5,
      brightnessEnd: 255,
      urlString: `http://${globals.ip}/win&FX=0&SX=128&CL=h00FF0000&C2=h00FFB14A&A=5&NL=10&NT=255&FP=0&IX=128&NF=2`,
      useFX: true,
      useSX: true,
      useCL: true,
      useC2: true,
      useA: true,
      useNL: true,
      useNT: true,
      useFP: true,
      useIX: true,
      useNF: true,
      useC3: true,
      useEXTRA: true,
    },
  };
  window.effectsyz = { ...template, ...effects };
})



const hideDev = () => {
  $('.dev').each((i, ele) => {
    $(ele).hide();
  });
};
hideDev();

const setURLonEffect = (effect, el) => {
  console.log('LookAtThatShiny', effect);
  effectsyz[effect.name].urlString = `http://${globals.ip}/win${
    effectsyz[effect.name].useFX ? `&FX=${effectsyz[effect.name].fx}` : ``
  }${
    effectsyz[effect.name].useSX ? `&SX=${effectsyz[effect.name].fxSpeed}` : ``
  }${
    effectsyz[effect.name].useCL
      ? `&CL=h00${effectsyz[effect.name].colorOne}`
      : ``
  }${
    effectsyz[effect.name].useC2
      ? `&C2=h00${effectsyz[effect.name].colorTwo}`
      : ``
  }${
    effectsyz[effect.name].useC3
      ? `&C3=h00${effectsyz[effect.name].colorThree}`
      : ``
  }${
    effectsyz[effect.name].useA
      ? `&A=${effectsyz[effect.name].brightnessStart}`
      : ``
  }${
    effectsyz[effect.name].useNL
      ? `&NL=${effectsyz[effect.name].timeInMin}`
      : ``
  }${
    effectsyz[effect.name].useNT
      ? `&NT=${effectsyz[effect.name].brightnessEnd}`
      : ``
  }${effectsyz[effect.name].useNF ? `&NF=${effectsyz[effect.name].nf}` : ``}${
    effectsyz[effect.name].useFP ? `&FP=${effectsyz[effect.name].fp}` : ``
  }${effectsyz[effect.name].useIX ? `&IX=${effectsyz[effect.name].ix}` : ``}${
    effectsyz[effect.name].useEXTRA ? `${effectsyz[effect.name].extra}` : ``
  }`;

  $('.url', el)[0].innerText = effectsyz[effect.name].urlString;
  $('.url', el)[0].href = effectsyz[effect.name].urlString;
  $('.title-url', el)[0].href = effectsyz[effect.name].urlString;
  $('.settings-row a.url', el)[0].innerText = effectsyz[effect.name].urlString;
  $('.settings-row a.url', el)[0].href = effectsyz[effect.name].urlString;
};

const renderEffectList = (effectList, filterString) => {
  if ($('#effectlist') && $('#effectlist').length > 0) {
    $("#effectlist")[0].innerHTML = (filterString
      ? Object.keys(effectList)
          .filter((p) => p.toLowerCase() !== "template")
          .filter((p) => p.toLowerCase().includes(filterString.toLowerCase()))
      : Object.keys(effectList)
    )
      .map(
        (e, i) => /*html*/ `   
            <div class="effect ${
              effectList[e].name === "template" ? "template dev" : ""
            }">
          <div class="title">
            <a class="title-url" target="hiddenFrame" href="${
              effectList[e].urlString
            }">${effectList[e].name}<span class="countdown"></span></a>      
            ${
              effectList[e].name === "template"
                ? ""
                : effectList[e].name === "sunrise"
                ? ""
                : '<div  class="deleteButton dev"><i class="icons">&#xe037;</i></div><div  class="shareButton dev"><i class="fa-fw fas fa-share-alt"></i></div>'
            }
            
            <div  class="settingsButton">
              <div class="chevron-arrow down"></div>
            </div>
          </div>
          <div class="settings">
              <div class="settings-row">
              <div class="settings-row-group floating mw100">
              <label class="floating">URL</label>
                  <a class="url" class="url" target="hiddenFrame" href="${
                    effectList[e].urlString
                  }"
                  >${effectList[e].urlString}</a>
              </div>
              </div>
            <div class="settings-row">
              <div class="settings-row-group floating mw205">
                <label class="floating">Color1</label>
                
                <i class="icons ${
                  effectList[e].useCL ? "active" : ""
                } cl" style="margin-right: 0.5rem">&#xe2b3;</i>
        
                
                <input class="colorPickerOne" type="color" value="#${
                  effectList[e].colorOne || "000000"
                }" />
              
              </div>
              <div class="settings-row-group floating mw205">
                <label class="floating">Color2</label>
                <i class="icons ${
                  effectList[e].useC2 ? "active" : ""
                } c2" style="margin-right: 0.5rem">&#xe2b3;</i>
                <input class="colorPickerTwo" type="color" value="#${
                  effectList[e].colorTwo || "000000"
                }" />
               
              </div>
              <div class="settings-row-group floating mw205">
                <label class="floating">Color3</label>
                <i class="icons ${
                  effectList[e].useC3 ? "active" : ""
                } c3" style="margin-right: 0.5rem">&#xe2b3;</i>
                <input class="colorPickerThree" type="color" value="#${
                  effectList[e].colorThree || "000000"
                }" />                
              </div>
              <div class="settings-row-group floating" style="flex: 1">
                <label class="floating">Extra:</label>
                <i class="icons ${
                  effectList[e].useEXTRA ? "active" : ""
                } extra" style="margin-right: 0.5rem">&#xe23d;</i>
                <input class="extra " type="text"  value="${
                  effectList[e].extra
                }" style="flex: 1" />
              </div> 
            </div>
            <div class="settings-row">
              <div class="settings-row-group floating wrap slim">
                <label class="floating">Nightlight:</label>
                <div>
                  <i class="icons ${
                    effectList[e].useNF ? "active" : ""
                  } nf fas fa-fw fa-moon" style="margin-right: 0.5rem"></i>              
                  <input
                        style='width: 60px;'
                        class='nf'
                        min='0'
                        max='2'
                        type='number'
                        value='${effectList[e].nf || 2}'
                      />                   
                </div>
              </div>
              <div class="settings-row-group floating mw205">
                <label class="floating">Start</label>
                <i class="icons ${
                  effectList[e].useA ? "active" : ""
                } brightnessA" style="margin-left: 1rem;margin-right: 0.5rem;">&#xe2a6;</i>
                <input
                  class="brightStart"
                  type="range"
                  min="0"
                  max="255"
                  value="${effectList[e].brightnessStart || 255}"
                />
              </div>
              <div class="settings-row-group floating mw205">
                <label class="floating">End</label>              
                <i class="icons ${
                  effectList[e].useNT ? "active" : ""
                } brightnessB" style="margin-left: 1rem;margin-right: 0.5rem;">&#xe2a6;</i>
                  <input
                    class="brightEnd"
                    type="range"
                    min="0"
                    max="255"
                    value="${effectList[e].brightnessEnd || 0}"
                  />
                </div>
                <div class="settings-row-group floating mw205 slim">
                  <label class="floating">Time in Min</label>
                  <i class="icons ${
                    effectList[e].useNL ? "active" : ""
                  } nl" style="margin-right: 0.5rem">&#xe325;</i>
                    <input class="time" type="range" min="1" max="120" value="${
                      effectList[e].timeInMin || 1
                    }" />
                  </div>              
                </div>
            
              <div class="settings-row">
                <div class="settings-row-group floating wrap slim">
                  <label class="floating">FX:</label>
                  <div>
                    <i class="icons ${
                      effectList[e].useFX ? "active" : ""
                    } fx fas fa-fw fa-magic" style="margin-right: 0.5rem"></i>
                    
                    ${
                      globals.wledEffects && globals.wledEffects.length > 1
                        ? `<select id='fxList' class='fx' value='${
                            effectList[e].fx
                          }'>
                        ${globals.wledEffects.map(
                          (ele, i) => `
                        <option ${
                          effectList[e].fx == i ? `selected="selected"` : ""
                        } value='${i}'>${ele}</option>
                        `
                        )}
                          
                        </select>`
                        : `<input
                          style='width: 60px;'
                          class='fx'
                          min='0'
                          max='150'
                          type='number'
                          value='${effectList[e].fx || 0}'
                        />
                      `
                    }
                  </div>
                  <div>
                    <i class="icons ${
                      effectList[e].useSX ? "active" : ""
                    } sx ml1" style="margin-right: 0.5rem;">&#xe325;</i>
                    <input
                      class="fxSpeed"
                      type="range"
                      min="0"
                      max="255"
                      value="${effectList[e].fxSpeed || 128}"
                    />
                  </div>
                  <div>
                    <i class="icons ${
                      effectList[e].useIX ? "active" : ""
                    } ix ml1" style="margin-right: 0.5rem;">&#xe409;</i>
                    <input
                      class="ix"
                      type="range"
                      min="0"
                      max="255"
                      value="${effectList[e].ix || 128}"
                    />
                  </div>
                </div>
                <div class="settings-row-group floating ml1 slim" style="flex: 1;">
                <label class="floating">PALETTE:</label>
                  <i class="icons ${
                    effectList[e].useFP ? "active" : ""
                  } fp fas fa-fw fa-swatchbook" style="margin-right: 0.5rem"></i>
                  ${
                    globals.wledPalettes && globals.wledPalettes.length > 1
                      ? `<select id='fpList' style="flex:1; margin-right: 10px;" class='fp' value='${
                          effectList[e].fp
                        }'>
                      ${globals.wledPalettes.map(
                        (ele, i) => `
                      <option ${
                        effectList[e].fp == i ? `selected="selected"` : ""
                      } value='${i}'>${ele}</option>
                      `
                      )}
                        
                      </select>`
                      : `<input style="width: 60px;" class="fp" min="0" max="50" type="number" value="${
                          effectList[e].fp || 0
                        }" />
                    `
                  }
                  
                </div>
              </div>
              <div class="settings-row">
                
                </div>
              </div>
            </div>
            `
      )
      .join("");
  }
};
/* START Event-Handlers*/
const handleInputIP = () => {
  $('#inputIP').each((i, ele) => {
    $(ele).focusout(() => {      
      getCurrentState();
    });
    $(ele).keypress(e => {
      if (e.which === 13) {
        $(ele).blur();
      }
    });
    $(ele).on('input', e => {
      globals.ip = e.currentTarget.value;
      $('#effectlist .effect').each((i, element) => {
        const effectName = $('.title-url', element)[0].innerText.toLowerCase();
        setURLonEffect(effectsyz[effectName], element);
      });
    });
  });
};
setTimeout(() => {
  handleInputIP();  
}, 200);

$(() => {
  setTimeout(() => {
    getCurrentState();
    $("#inputIP")[0].value = globals.ip;

    const changeHandlers = () => {
      let timer2 = null;
      let isRunning = false;
      $(".effect").each((i, el) => {
        $(el).on("click", ".title .settingsButton", (e) => {
          $(el).toggleClass("show");
          $(".settings", el).toggleClass("show");
          $(".chevron-arrow", el).toggleClass("down");
          $(".chevron-arrow", el).toggleClass("up");
        });
        $(el).on("click", ".settings-row-group.floating i", (e) => {
          const effectName = $(".title-url", el)[0].innerText.toLowerCase();
          const cl = $(e.currentTarget).hasClass("cl");
          const brightnessA = $(e.currentTarget).hasClass("brightnessA");
          const c2 = $(e.currentTarget).hasClass("c2");
          const brightnessB = $(e.currentTarget).hasClass("brightnessB");
          const nl = $(e.currentTarget).hasClass("nl");
          const sx = $(e.currentTarget).hasClass("sx");
          const fx = $(e.currentTarget).hasClass("fx");
          const extra = $(e.currentTarget).hasClass("extra");
          const ix = $(e.currentTarget).hasClass("ix");
          const fp = $(e.currentTarget).hasClass("fp");
          const nf = $(e.currentTarget).hasClass("nf");
          const c3 = $(e.currentTarget).hasClass("c3");
          $(e.currentTarget).toggleClass("active");
          if (cl) {
            effectsyz[effectName].useCL = $(e.currentTarget).hasClass("active");
          }
          if (brightnessA) {
            effectsyz[effectName].useA = $(e.currentTarget).hasClass("active");
          }
          if (c2) {
            effectsyz[effectName].useC2 = $(e.currentTarget).hasClass("active");
          }
          if (c3) {
            effectsyz[effectName].useC3 = $(e.currentTarget).hasClass("active");
          }
          if (brightnessB) {
            effectsyz[effectName].useNT = $(e.currentTarget).hasClass("active");
          }
          if (nl) {
            effectsyz[effectName].useNL = $(e.currentTarget).hasClass("active");
          }
          if (nf) {
            effectsyz[effectName].useNF = $(e.currentTarget).hasClass("active");
          }
          if (sx) {
            effectsyz[effectName].useSX = $(e.currentTarget).hasClass("active");
          }
          if (fx) {
            effectsyz[effectName].useFX = $(e.currentTarget).hasClass("active");
          }
          if (fp) {
            effectsyz[effectName].useFP = $(e.currentTarget).hasClass("active");
          }
          if (ix) {
            effectsyz[effectName].useIX = $(e.currentTarget).hasClass("active");
          }
          if (extra) {
            effectsyz[effectName].useEXTRA = $(e.currentTarget).hasClass(
              "active"
            );
          }
          setURLonEffect(effectsyz[effectName], el);
        });

        $(el).on("click", ".title a.title-url", (e) => {
          const timer = $("input.time", el)[0].value * 60;
          const display = $("span.countdown", el)[0];

          if (timer2 && timer2.running && isRunning) {
            timer2.stop();
            isRunning = false;
            $(".effect").each((i, element) => {
              $(element).removeClass("active");
            });
            setLastCheckedState();
            renderEffectList(effectsyz);
            changeHandlers();
          } else {
            if (isRunning) {
              timer2.stop();
              isRunning = false;
              $(".effect").each((i, element) => {
                $(element).removeClass("active");
              });
              setLastCheckedState();
              renderEffectList(effectsyz);
              changeHandlers();
            }
            if (e.currentTarget.href.includes("&NL")) {
              timer2 = new CountDownTimer(timer);
              $(el).addClass("active");
              isRunning = true;
              timer2.onTick(format(display)).onTick(checkExpired).start();
            }
          }

          function checkExpired() {
            if (this.expired()) {
              $(el).removeClass("active");
            } else {
            }
          }

          function format(display) {
            return function (minutes, seconds) {
              minutes = minutes < 10 ? "0" + minutes : minutes;
              seconds = seconds < 10 ? "0" + seconds : seconds;
              display.textContent = minutes + ":" + seconds;
            };
          }
        });

        $(el).on("click", ".title .deleteButton", (e) => {
          const effectName = $(".title-url", el)[0].innerText.toLowerCase();
          const confirmDelete = confirm(
            `Are you sure you want to delete ${effectName}?`
          );
          if (confirmDelete === true) {
            delete effectsyz[effectName];
            renderEffectList(effectsyz);
            changeHandlers();
          }
        });
        $(el).on("click", ".title .shareButton", (e) => {
          const effectName = $(".title-url", el)[0].innerText.toLowerCase();

          window.open(
            `https://wled.yeonv.com/wp-admin/post-new.php?post_title=${encodeURIComponent(
              effectName
            )}&excerpt=${encodeURIComponent(
              effectsyz[effectName].urlString.split("win")[1]
            )}`,
            "_blank"
          );
          renderEffectList(effectsyz);
          changeHandlers();
        });

        $(el).on("click", ".title .deleteButton", (e) => {
          const effectName = $(".title-url", el)[0].innerText.toLowerCase();
          const confirmDelete = confirm(
            `Are you sure you want to delete ${effectName}?`
          );
          if (confirmDelete === true) {
            delete effectsyz[effectName];
            renderEffectList(effectsyz);
            changeHandlers();
          }
        });

        $(".time", el).each((i, ele) => {
          $(ele).on("input", (e) => {
            const effectName = $(".title-url", el)[0].innerText.toLowerCase();
            effectsyz[effectName].timeInMin = e.currentTarget.value;
            setURLonEffect(effectsyz[effectName], el);
          });
        });
        $(".colorPickerOne", el).each((i, ele) => {
          $(ele).on("input", (e) => {
            const effectName = $(".title-url", el)[0].innerText.toLowerCase();
            effectsyz[effectName].colorOne = e.currentTarget.value
              .replace("#", "")
              .toUpperCase();
            setURLonEffect(effectsyz[effectName], el);
          });
        });
        $(".colorPickerTwo", el).each((i, ele) => {
          $(ele).on("input", (e) => {
            const effectName = $(".title-url", el)[0].innerText.toLowerCase();
            effectsyz[effectName].colorTwo = e.currentTarget.value
              .replace("#", "")
              .toUpperCase();
            setURLonEffect(effectsyz[effectName], el);
          });
        });
        $(".colorPickerThree", el).each((i, ele) => {
          $(ele).on("input", (e) => {
            const effectName = $(".title-url", el)[0].innerText.toLowerCase();
            effectsyz[effectName].colorThree = e.currentTarget.value
              .replace("#", "")
              .toUpperCase();
            setURLonEffect(effectsyz[effectName], el);
          });
        });
        $(".brightStart", el).each((i, ele) => {
          $(ele).on("input", (e) => {
            const effectName = $(".title-url", el)[0].innerText.toLowerCase();
            effectsyz[effectName].brightnessStart = e.currentTarget.value;
            setURLonEffect(effectsyz[effectName], el);
          });
        });
        $(".brightEnd", el).each((i, ele) => {
          $(ele).on("input", (e) => {
            const effectName = $(".title-url", el)[0].innerText.toLowerCase();
            effectsyz[effectName].brightnessEnd = e.currentTarget.value;
            setURLonEffect(effectsyz[effectName], el);
          });
        });
        $(".fx", el).each((i, ele) => {
          $(ele).on("input", (e) => {
            const effectName = $(".title-url", el)[0].innerText.toLowerCase();
            effectsyz[effectName].fx = e.currentTarget.value;
            setURLonEffect(effectsyz[effectName], el);
          });
        });
        $(".ix", el).each((i, ele) => {
          $(ele).on("input", (e) => {
            const effectName = $(".title-url", el)[0].innerText.toLowerCase();
            effectsyz[effectName].ix = e.currentTarget.value;
            setURLonEffect(effectsyz[effectName], el);
          });
        });

        $(".fp", el).each((i, ele) => {
          $(ele).on("input", (e) => {
            const effectName = $(".title-url", el)[0].innerText.toLowerCase();
            effectsyz[effectName].fp = e.currentTarget.value;
            setURLonEffect(effectsyz[effectName], el);
          });
        });
        $(".nf", el).each((i, ele) => {
          $(ele).on("input", (e) => {
            const effectName = $(".title-url", el)[0].innerText.toLowerCase();
            effectsyz[effectName].nf = e.currentTarget.value;
            setURLonEffect(effectsyz[effectName], el);
          });
        });
        $(".fxSpeed", el).each((i, ele) => {
          $(ele).on("input", (e) => {
            const effectName = $(".title-url", el)[0].innerText.toLowerCase();
            effectsyz[effectName].fxSpeed = e.currentTarget.value;
            setURLonEffect(effectsyz[effectName], el);
          });
        });
        $(".extra", el).each((i, ele) => {
          $(ele).on("input", (e) => {
            const effectName = $(".title-url", el)[0].innerText.toLowerCase();
            effectsyz[effectName].extra = e.currentTarget.value;
            setURLonEffect(effectsyz[effectName], el);
          });
        });
        $(".dev").each((i, ele) => {
          $(ele).hide();
        });
        $("#inputIP").removeClass("and-dev");
      });
    };

    if (
      globals.wledEffects &&
      globals.wledEffects.length > 1 &&
      globals.wledPalettes &&
      globals.wledPalettes.length > 1
    ) {
      renderEffectList(effectsyz);
      changeHandlers();
    } else {
      setTimeout(() => {
        renderEffectList(effectsyz);
        changeHandlers();
      }, 2000);
    }

    $(".save").on("click", (e) => {
      const userEffectName = prompt("Effect Name", "Sunrise");

      if (userEffectName !== null) {
        if (!Object.keys(effectsyz).includes(userEffectName.toLowerCase())) {
          const newName = userEffectName.toLowerCase();
          const tempOldName = Object.keys(effectsyz)[0];
          const tempObj = {
            name: newName,
            colorOne: effectsyz[tempOldName].colorOne,
            colorTwo: effectsyz[tempOldName].colorTwo,
            colorThree: effectsyz[tempOldName].colorThree,
            timeInMin: effectsyz[tempOldName].timeInMin,
            brightnessStart: effectsyz[tempOldName].brightnessStart,
            brightnessEnd: effectsyz[tempOldName].brightnessEnd,
            urlString: effectsyz[tempOldName].urlString,
            fx: effectsyz[tempOldName].fx,
            fp: effectsyz[tempOldName].fp,
            fxSpeed: effectsyz[tempOldName].fxSpeed,
            extra: effectsyz[tempOldName].extra,
            useCL: effectsyz[tempOldName].useCL,
            useA: effectsyz[tempOldName].useA,
            useC2: effectsyz[tempOldName].useC2,
            useNT: effectsyz[tempOldName].useNT,
            useFX: effectsyz[tempOldName].useFX,
            useFP: effectsyz[tempOldName].useFP,
            useIX: effectsyz[tempOldName].useIX,
            useSX: effectsyz[tempOldName].useSX,
            useEXTRA: effectsyz[tempOldName].useEXTRA,
          };
          effectsyz[newName] = tempObj;
          console.log("SAVED:", effectsyz);
          $("#inputIP").removeClass("and-dev");
          renderEffectList(effectsyz);
          changeHandlers();
        } else {
          alert("Effect already in List!");
        }
      }
    });
    $("#searchInput").each((i, ele) => {
      $(ele).on("input", (e) => {
        renderEffectList(effectsyz, e.currentTarget.value);
        $(".effect.template.dev").each((i, element) => {
          $("#inputIP").hasClass("and-dev") ? false : false;
        });
        changeHandlers();
      });
    });

    $("#json").on("click", (e) => {
      $(".menu-item").each((i, ele) => {
        $(ele).removeClass("active");
        $(e.currentTarget).addClass("active");
      });
      $(".http").each((i, ele) => {
        $(ele).hide();
      });
      $(".dev2").each((i, ele) => {
        $(ele).fadeIn();
      });
      $(".dev").each((i, ele) => {
        $(ele).hide();
      });
      $("#inputIP").removeClass("and-dev");
    });
    $("#http").on("click", (e) => {
      $(".menu-item").each((i, ele) => {
        $(ele).removeClass("active");
        $(e.currentTarget).addClass("active");
      });
      $(".dev2").each((i, ele) => {
        $(ele).hide();
      });
      $(".http").each((i, ele) => {
        $(ele).fadeIn();
      });
    });

    $("#dev-toggler").on("click", () => {
      $(".dev").each((i, ele) => {
        $(ele).toggle();
      });
      $("#inputIP").toggleClass("and-dev");
    });

    $("#export").on("click", (e) => {
      const filtered = Object.filter(
        effectsyz,
        (effect) => effect.name !== "template"
      );
      chrome.storage.local.set(
        {
          effects: filtered
        },
        function () {
          console.log("Value is set to ", arguments);
        }
      );
      chrome.storage.local.set(
        {
          globals: {
            ip: $("#inputIP")[0].value,
            wledPalettes: globals.wledPalettes,
            wledEffects: globals.wledEffects,
          },
        },
        function () {
          console.log("Value is set to ", arguments);
        }
      );
  //     download(
  //       "config.js",
  //       `const effects = ${JSON.stringify(filtered, "\t", 2)};
  // const globals = {
  //   "ip": "${$("#inputIP")[0].value}",
  //   "wledPalettes": ${JSON.stringify(globals.wledPalettes, "\t", 4)},
  //   "wledEffects": ${JSON.stringify(globals.wledEffects, "\t", 4)}}`
  //     );
    });
  }, 200);
  
});

/* END Event-Handlers*/
