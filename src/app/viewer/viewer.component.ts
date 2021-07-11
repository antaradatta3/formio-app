import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-viewer',
  templateUrl: './viewer.component.html',
  styleUrls: ['./viewer.component.css'],
})
export class ViewerComponent implements OnInit {
  public forms;
  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.getJSON().subscribe(
      (data) => (this.forms = data),
      (error) => console.log(error)
    );
  }

  private getJSON(): Observable<any> {
    return this.http.get('assets/forms.json');
  }

  onSubmit(event) {
    console.log(JSON.stringify(event, null, 4));
  }
}
