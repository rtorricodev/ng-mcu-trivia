import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-start-page',
  template: `
    <div
      class="w-full h-screen bg-gradient-to-t from-blue-700 to-violet-800 flex justify-center items-center"
    >
      <h1 class="text-white text-bold text-3xl absolute top-14">
        Welcome to MCU Trivia !
      </h1>
      <button
        [routerLink]="['/trivia']"
        class="w-44 h-44 bg-indigo-500 rounded-full flex items-center cursor-pointer justify-center animate-bounce drop-shadow-md"
      >
        <p class="text-white text-bold text-2xl">START</p>
      </button>
    </div>
  `,
})
export class StartPageComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
