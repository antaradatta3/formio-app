import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-designer',
  templateUrl: './designer.component.html',
  styleUrls: ['./designer.component.css']
})
export class DesignerComponent implements OnInit {

  public form: Object = {
    components: []
  };

  constructor() { }

  ngOnInit(): void {
  }

  onChange(event) {
    console.log(JSON.stringify(event.form, null, 4));
  }

}
