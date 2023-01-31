import { Component } from '../component/component';

export class CardContainer extends Component {
  constructor(public selector: string) {
    super();
    this.selector = selector;
    this.template = this.createTemplate();
  }

  private createTemplate() {
    return `
    <ul class="characters-list row list-unstyled">

      </ul>
    `;
  }
}
