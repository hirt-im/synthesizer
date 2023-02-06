
import { useEffect, useState } from "react";
import { presets } from '../audio/presets';

let currSettings = presets['Soothing Pluck'];

function updateSettings(settings)
{
    currSettings = settings;
}

export { updateSettings, currSettings };
