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
    root.style.setProperty('--selection-image', themes[theme]['--selection-image']);
    root.style.setProperty('--menu-text-color', themes[theme]['--menu-text-color']);
    currTheme = themes[theme];
}


let themes = {
    default: {
        name: 'default',
        '--bg-color': '#282c34',
        '--label-color': 'rgb(255, 196, 0)',
        '--menu-bg-color': 'rgb(212, 206, 186)',
        '--menu-text-color': 'black',
        '--synth-bg-color': 'rgb(32, 32, 30)',
        '--border-color': 'transparent',
        '--knob-color': 'white',
        '--label-text-color': '#deb9e0',
        '--knob-value-color': '#bbaea6',
        '--knob-group-bg-color': 'rgb(45, 46, 42)',
        '--selection-image': 'invert(80%) sepia(51%) saturate(1018%) hue-rotate(338deg) brightness(104%) contrast(103%)',
        'waveform-color': 'white'
    },

    blue: {
        name: 'blue',
        '--bg-color': '#006d77',
        '--label-color': '#006d77',
        '--menu-bg-color': 'rgb(212, 206, 186)',
        '--menu-text-color': 'black',
        '--synth-bg-color': 'rgb(32, 32, 30)',
        '--border-color': 'transparent',
        '--knob-color': 'white',
        '--label-text-color': '#91d5ff',
        '--knob-value-color': '#bde6ff',
        '--knob-group-bg-color': '#282c34',
        '--selection-image': 'invert(19%) sepia(96%) saturate(5432%) hue-rotate(176deg) brightness(88%) contrast(101%)',
        'waveform-color': 'white'
    },

    blue2: {
        name: 'blue2',
        '--bg-color': '#66eaee',
        '--label-color': 'black',
        '--menu-bg-color': 'white',
        '--menu-text-color': 'white',
        '--synth-bg-color': '#bdf9ff',
        '--border-color': 'black',
        '--knob-color': 'black',
        '--label-text-color': 'black',
        '--knob-value-color': 'black',
        '--knob-group-bg-color': '#e6e3e3',
        '--selection-image': 'none',
        'waveform-color': 'black'
    },

    // korg: {
    //     name: 'korg',
    //     '--bg-color': 'black',
    //     '--label-color': 'white',
    //     '--menu-bg-color': 'white',
    //     '--menu-text-color': 'black',
    //     '--synth-bg-color': '#7a0000',
    //     '--border-color': 'white',
    //     '--knob-color': 'white',
    //     '--label-text-color': 'white',
    //     '--knob-value-color': 'white',
    //     '--knob-group-bg-color': '#7a0000',
    //     '--selection-image': 'invert(100%) sepia(100%) saturate(2%) hue-rotate(128deg) brightness(101%) contrast(101%)',
    //     'waveform-color': 'white'
    // }
}


let currTheme = themes.default;
if (localStorage.getItem('theme') != null){
    currTheme = localStorage.getItem('theme');
    console.log(currTheme.name)
}

document.addEventListener('DOMContentLoaded', function() {
    updateTheme(currTheme);
 }, false);

// setTimeout(() => {
//     updateTheme(currTheme);
// }, "100");

export { updateTheme, themes, currTheme };