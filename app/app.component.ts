import { Component ,OnInit,OnDestroy} from '@angular/core';

@Component({
    selector: 'app',
    templateUrl: 'app.component.html'
})

export class AppComponent implements OnInit,OnDestroy{ 
constructor()
{
    console.log("In Constructor");
}
ngOnInit()
{
    console.log("In ngOnInit");
}
ngOnDestroy()
{
    console.log("In ngOnDestory");
}

}