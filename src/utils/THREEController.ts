import * as THREE from "three";

class THREEController {

    private static instance: THREEController | null = null;

    private mainContainer: HTMLElement | undefined;
    private mcWidth: number | undefined;
    private mcHeight: number | undefined;

    private mcRenderer: THREE.WebGLRenderer | undefined;

    private mcScene: THREE.Scene | undefined;

    public static getInstance(mainContainer: HTMLElement): THREEController { // get singleton instance
        if (!this.instance) {
            this.instance = new THREEController(mainContainer);
        }
        return this.instance;
    }

    private constructor(mainContainer: HTMLElement) { // constructs renderer, scene
        this.setMainContainer(mainContainer);
        this.setMCWidth(mainContainer.offsetWidth);
        this.setMCHeight(mainContainer.offsetHeight);
        this.setMCRenderer(new THREE.WebGLRenderer());
        this.getMCRenderer()?.setSize(this.getMCWidth() ?? 0, this.getMCHeight() ?? 0);
        this.setMCScene(new THREE.Scene());
        this.setMCSceneBackgroundColor(new THREE.Color(THREE.Color.NAMES.red));

    }

    private setMainContainer(mainContainer: HTMLElement): void {
        this.mainContainer = mainContainer;
    }

    private getMainContainer(): HTMLElement | undefined {
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

    private setMCRenderer(renderer: THREE.WebGLRenderer): void {
        this.mcRenderer = renderer;
    }

    private getMCRenderer(): THREE.WebGLRenderer | undefined {
        return this.mcRenderer;
    }

    private setMCScene(scene: THREE.Scene) {
        this.mcScene = scene;
    }

    private getMCScene(): THREE.Scene | undefined {
        return this.mcScene;
    }

    private setMCSceneBackgroundColor(backgroundColor: THREE.Color): void {
        if (this.mcScene && backgroundColor) {
            this.mcScene.background = backgroundColor;
        }
    }
}
