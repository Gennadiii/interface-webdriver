declare function elementFn(): ElementAWB
elementFn.css = () => ElementAWB
elementFn.xpath = () => ElementAWB
elementFn.id = () => ElementAWB
elementFn.assesabilityId = () => ElementAWB

declare function elementsFn(): ElementAWB
elementsFn.css = () => ElementsAWB
elementsFn.xpath = () => ElementsAWB
elementsFn.id = () => ElementsAWB
elementsFn.assesabilityId = () => ElementsAWB

export declare class ElementAWB {
  constructor(selector: string, sessionId: string | null, elementId: string | null, baseElement: ElementAWB)

  waitForElement(time: number): ElementAWB
  waitForClickable(time: number): ElementAWB
  waitForElementVisible(time: number): ElementAWB
  waitForElementPresent(time: number): ElementAWB
  waitUntilDisappear(time: number): Promise<void>
  wait(time: number, cb: Promise<any>): ElementsAWB
  size(): Promise<{ width: number, height: number }>
  location(): Promise<{ x: number, y: number }>
  locationView(): Promise<{ x: number, y: number }>
  clear(): Promise<any>
  getElementHTML(): Promise<string>
  getText(): Promise<string>
  element: elementFn
  $: elementFn
  elements: elementsFn
  $$: elementsFn
  elements(selector: string): ElementsAWB
  sendKeys(keys: string | Array<string>): Promise<any>
  getAttribute(attribute: string): Promise<string>
  click(): Promise<any>
  toElement(): Promise<any>
  isDisplayed(): Promise<boolean>
  isPresent(): Promise<boolean>
  mouseDownAndMove(position: { x: number, y: number }): Promise<any>
}


function cb(el: ElementAWB): Promise<any>
export declare class ElementsAWB {
  constructor(selector: string, sessionId: string | null, baseElement: ElementAWB)

  get(index: number): Promise<ElementAWB>
  count(): Promise<number>
  wait(time: number, cb): ElementsAWB
  filter(cb: cb): Promise<any>
  map(cb: cb): Promise<any>
  forEach(cb: cb): Promise<any>
  some(cb: cb): Promise<boolean>
  every(cb: cb): Promise<boolean>
  waitForElements(time: number): ElementsAWB
}

export declare function $$(): ElementsAWB
export declare function $(): ElementAWB