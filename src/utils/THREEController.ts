import * as THREE from 'three';

class THREEController
{
    private static instance:THREEController | null = null;
    private mainContainer: HTMLElement;
    private mcWidth:number;
    private mcHeight:number;
    

    public static getInstance(mainContainer: HTMLElement): THREEController
    {
        if (!this.instance)
        {
            this.instance = new THREEController(mainContainer);
        }
        return this.instance;
    }

    private constructor(mainContainer: HTMLElement)
    {
        this.mainContainer = mainContainer;
        this.mcWidth = mainContainer.offsetWidth;
        this.mcHeight = mainContainer.offsetHeight;
    }

    private getMainContainer(): HTMLElement
    {
        return this.mainContainer;
    }
}