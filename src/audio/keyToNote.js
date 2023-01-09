import { octave } from '../index';

let keyToNote;
  
function updateKeyToNote(){
    keyToNote = {
      'z': 'C' + octave,
      's': 'C#'+ octave,
      'x': 'D' + octave,
      'd': 'D#'+ octave,
      'c': 'E' + octave,
      'v': 'F' + octave,
      'g': 'F#'+ octave,
      'b': 'G' + octave,
      'h': 'G#'+ octave,
      'n': 'A' + octave,
      'j': 'A#'+ octave,
      'm': 'B' + octave,
      ',': 'C' + (octave + 1),
      'q': 'C' + (octave + 1),
      '2': 'C#'+ (octave + 1),
      'w': 'D' + (octave + 1),
      '3': 'D#'+ (octave + 1),
      'e': 'E' + (octave + 1),
      'r': 'F' + (octave + 1),
      '5': 'F#'+ (octave + 1),
      't': 'G' + (octave + 1),
      '6': 'G#'+ (octave + 1),
      'y': 'A' + (octave + 1),
      '7': 'A#'+ (octave + 1),
      'u': 'B' + (octave + 1),
      'i': 'C' + (octave + 2)
    }
  }

  export { keyToNote, updateKeyToNote };