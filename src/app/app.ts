import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Autocomplete } from './componentes/autocomplete/autocomplete';
import { PlainInputAutocomplete } from './componentes/plain-input-autocomplete/plain-input-autocomplete';
import { Badgeoverview } from './componentes/badgeoverview/badgeoverview';
import { BottomSheetOverview } from './componentes/bottom-sheet-overview/bottom-sheet-overview';
import { Buttonoverview } from './componentes/buttonoverview/buttonoverview';
import { BasicbuttonToggles } from './componentes/basicbutton-toggles/basicbutton-toggles';
import { Listwithsections } from './componentes/listwithsections/listwithsections';
import { Inputwitherrormessages } from './componentes/inputwitherrormessages/inputwitherrormessages';
import { SVGicons } from './componentes/svgicons/svgicons';
import { Stepperoverview } from './componentes/stepperoverview/stepperoverview';
import { Treewithdynamicdata } from './componentes/treewithdynamicdata/treewithdynamicdata';
import { Formfield } from './componentes/formfield/formfield';
import { Datepicker } from './componentes/datepicker/datepicker';
import { SlideToggle } from './componentes/slide-toggle/slide-toggle';
import { Injecting } from './componentes/injecting/injecting';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, 
            Autocomplete,
            PlainInputAutocomplete,
            Badgeoverview,
            BottomSheetOverview,
            Buttonoverview,
            BasicbuttonToggles,
            Listwithsections,
            Inputwitherrormessages,
            SVGicons,
            Stepperoverview,
            Treewithdynamicdata,
            Formfield,
            Datepicker,
            SlideToggle,
            Injecting],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'EjerciciosAngular';
}
