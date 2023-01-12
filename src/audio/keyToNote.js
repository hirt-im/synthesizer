import { octave } from '../index';

let keyToNote;
  
function updateKeyToNote(){
    keyToNote = {
      'z': 'C' + octave.octave,
      's': 'C#'+ octave.octave,
      'x': 'D' + octave.octave,
      'd': 'D#'+ octave.octave,
      'c': 'E' + octave.octave,
      'v': 'F' + octave.octave,
      'g': 'F#'+ octave.octave,
      'b': 'G' + octave.octave,
      'h': 'G#'+ octave.octave,
      'n': 'A' + octave.octave,
      'j': 'A#'+ octave.octave,
      'm': 'B' + octave.octave,
      ',': 'C' + (octave.octave + 1),
      'q': 'C' + (octave.octave + 1),
      '2': 'C#'+ (octave.octave + 1),
      'w': 'D' + (octave.octave + 1),
      '3': 'D#'+ (octave.octave + 1),
      'e': 'E' + (octave.octave + 1),
      'r': 'F' + (octave.octave + 1),
      '5': 'F#'+ (octave.octave + 1),
      't': 'G' + (octave.octave + 1),
      '6': 'G#'+ (octave.octave + 1),
      'y': 'A' + (octave.octave + 1),
      '7': 'A#'+ (octave.octave + 1),
      'u': 'B' + (octave.octave + 1),
      'i': 'C' + (octave.octave + 2),
      '9': 'C#'+ (octave.octave + 2),
      'o': 'D' + (octave.octave + 2),
      '0': 'D#'+ (octave.octave + 2),
      'p': 'E' + (octave.octave + 2),
      '[': 'F' + (octave.octave + 2),
      '=': 'F#'+ (octave.octave + 2),
      ']': 'G' + (octave.octave + 2),
      'Backspace': 'G#' + (octave.octave + 2),
      '\\': 'A' + (octave.octave + 2)
    }
  }

  export { keyToNote, updateKeyToNote };