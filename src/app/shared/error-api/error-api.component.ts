import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-error-api',
  template: `
    <img
      src="assets/error.png"
      alt="Erro ao carregar os detalhes do pokemon"
      width="100%"
    />

  `,

})
export class ErrorApiComponent implements OnInit {

  constructor() { }

  ngOnInit(): void { }


}
