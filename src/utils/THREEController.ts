import * as THREE from 'three';

class THREEController
{
    private static instance:THREEController | null = null;
    private mainContainer: HTMLElement;
    

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
    }
}