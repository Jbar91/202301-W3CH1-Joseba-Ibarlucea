export type InsertPosition =
  | 'beforebegin'
  | 'afterbegin'
  | 'beforeend'
  | 'afterend';

export abstract class Component {
  selector!: string;
  element!: HTMLElement;
  template!: string;

  render(place: InsertPosition) {
    const element = document.querySelector(this.selector) as HTMLElement;
    element.insertAdjacentHTML(place, this.template);
  }
}
