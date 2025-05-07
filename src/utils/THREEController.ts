import * as THREE from "three";

export class THREEController {

    private static instance: THREEController | null = null;

    private mainContainer: HTMLElement | undefined;
    private mcWidth: number | undefined;
    private mcHeight: number | undefined;

    private mcRenderer: THREE.WebGLRenderer | undefined;

    private mcScene: THREE.Scene | undefined;

    private mcCamera: THREE.PerspectiveCamera | undefined;

    public static getInstance(mainContainer: HTMLElement): THREEController { // get singleton instance
        if (!this.instance) {
            this.instance = new THREEController(mainContainer);
        }
        return this.instance;
    }

    public constructor(mainContainer: HTMLElement) { // constructs renderer, scene
        this.setMainContainer(mainContainer);
        this.setMCWidth(mainContainer.offsetWidth);
        this.setMCHeight(mainContainer.offsetHeight);
        this.setMCRenderer(new THREE.WebGLRenderer());
        this.getMCRenderer()?.setSize(this.getMCWidth() ?? 0, this.getMCHeight() ?? 0);
        this.setMCScene(new THREE.Scene());
        this.setMCSceneBackgroundColor(new THREE.Color(THREE.Color.NAMES.red));
        this.setMCCamera(new THREE.PerspectiveCamera(75, (this.getMCWidth() ?? 0) / (this.getMCHeight() ?? 1), 0.1, 100));

        this.mcAppendChild(this.getMCRendererDomElement())
        this.mcRendererRender();
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

    private mcAppendChild(element: HTMLElement | undefined) {
        if (element && this.getMainContainer()) {
            this.getMainContainer()?.appendChild(element);
        }
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

    private getMCRendererDomElement(): HTMLElement | undefined {
        return this.getMCRenderer()?.domElement;
    }

    private mcRendererRender() {
        if (this.getMCRenderer() && this.mcScene && this.mcCamera) {
            this.getMCRenderer()?.render(this.mcScene, this.mcCamera);
        }
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

    private setMCCamera(camera: THREE.PerspectiveCamera): void {
        this.mcCamera = camera;
    }

    private getMCCamera(): THREE.PerspectiveCamera | undefined {
        return this.mcCamera;
    }
}
