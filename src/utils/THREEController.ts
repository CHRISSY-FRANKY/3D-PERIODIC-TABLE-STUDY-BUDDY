import * as THREE from "three";

class THREEController {
  private static instance: THREEController | null = null;
  private mainContainer: HTMLElement | undefined;
  private mcWidth: number | undefined;
  private mcHeight: number | undefined;

  public static getInstance(mainContainer: HTMLElement): THREEController {
    if (!this.instance) {
      this.instance = new THREEController(mainContainer);
    }
    return this.instance;
  }

  private constructor(mainContainer: HTMLElement) {
    this.setMainContainer(mainContainer);
    this.setMCWidth(mainContainer.offsetWidth);
    this.setMCHeight(mainContainer.offsetHeight);
  }

  private setMainContainer(mainContainer: HTMLElement): void {
    this.mainContainer = mainContainer;
  }

  private getMainContainer(): HTMLElement {
    return this.mainContainer;
  }

  private setMCWidth(width: number): void {
    this.mcWidth = width;
  }

  private setMCHeight(height: number): void {
    this.mcHeight = height;
  }

  private getMCWidth(): number | undefined {
    return this.mcWidth;
  }

  private getMCHeight(): number | undefined {
    return this.mcHeight;
  }
}
