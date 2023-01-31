import { Component } from '../component/component';

export class CharactersList extends Component {
  constructor(public selector: string) {
    super();
    this.selector = selector;
    this.template = this.createTemplate();
  }

  private createTemplate() {
    return `
    <li class="character col">
    </li>
    `;
  }
}
