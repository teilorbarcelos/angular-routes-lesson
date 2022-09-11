import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent implements OnInit {
  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe({
      next: (response) =>
        console.log(response['id'], response['username'], response),
    })

    this.activatedRoute.queryParams.subscribe({
      next: (response) => console.log(response['name'], response),
    })
  }
}
