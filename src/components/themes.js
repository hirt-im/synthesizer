const root = document.querySelector(':root');

function updateTheme(theme){
    root.style.setProperty('--bg-color', themes[theme]['--bg-color']);
    root.style.setProperty('--label-color', themes[theme]['--label-color']);

    root.style.setProperty('--menu-bg-color', themes[theme]['--menu-bg-color']);

    root.style.setProperty('--synth-bg-color', themes[theme]['--synth-bg-color']);
    root.style.setProperty('--border-color', themes[theme]['--border-color']);
    root.style.setProperty('--knob-color', themes[theme]['--knob-color']);
    root.style.setProperty('--label-text-color', themes[theme]['--label-text-color']);
    root.style.setProperty('--knob-value-color', themes[theme]['--knob-value-color']);
    root.style.setProperty('--knob-group-bg-color', themes[theme]['--knob-group-bg-color']);


    currTheme = themes[theme];
}

let themes = {
    default: {
        '--bg-color': '#282c34',
        '--label-color': 'rgb(255, 196, 0)',
        '--menu-bg-color': 'rgb(212, 206, 186)',
        '--synth-bg-color': 'rgb(32, 32, 30)',
        '--border-color': 'transparent',
        '--knob-color': 'white',
       ' --label-text-color': '#deb9e0',
        '--knob-value-color': '#bbaea6',
        '--knob-group-bg-color': 'rgb(45, 46, 42)'
    },

    theme2: {
        '--bg-color': 'lightblue',
        '--label-color': 'rgb(255, 196, 0)',
        '--menu-bg-color': 'rgb(212, 206, 186)',
        '--synth-bg-color': 'rgb(32, 32, 30)',
        '--border-color': 'transparent',
        '--knob-color': 'white',
       ' --label-text-color': '#deb9e0',
        '--knob-value-color': '#bbaea6',
        '--knob-group-bg-color': 'rgb(45, 46, 42)'
    }


}


let currTheme = themes.default;


export { updateTheme, themes, currTheme };