import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';

  itens = [
    {
      "titulo": "Texto 1",
      "texto": "Lorem ipsum dolor sit amet, etiam dicam corrumpit ex vis, ipsum vidisse te mel. Nec dicta legere at. Senserit scribentur per te, est vidit facilisis ut, id justo molestiae ius. Pro iuvaret cotidieque no, et sonet comprehensam eam. Ridens scriptorem id sea, quo noster aperiam intellegam ne. Has no tale vocent, ei duo illud delicata, ea mei erant delicatissimi."
    },
    {
      "titulo": "Texto 2",
      "texto": "In mei similique percipitur. Animal disputando sea eu, te sale latine euripidis eum, cu dolores molestiae voluptatibus est. Illum ludus lobortis at qui. Quo at altera omittam periculis, minim volutpat qui ad."
    },
    {
  
      "titulo": "Texto 3",
      "texto": "Impetus diceret eu nam. Ad duo elit nullam omittam. Eos cu erroribus definitionem, solum timeam nam an. Ad his feugiat vituperata efficiendi. No cum dicant delenit vocibus, id pri soleat numquam, populo euismod definiebas vis ea. Ex dicit delenit vel, mei feugiat convenire incorrupte at."
    }
  ];
}
