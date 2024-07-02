import { DefaultLayoutConfig, MazerLayoutConfig, SingleLayoutConfig, VerticalNavbarLayoutConfig } from "../components/MazerLayoutProvider";

export namespace TypeGuard{
    export const isVerticalNavbarLayoutConfg = (config: MazerLayoutConfig): config is VerticalNavbarLayoutConfig => 
        config.type === 'vertical-navbar';
    export const isSingleLayoutConfg = (config: MazerLayoutConfig): config is SingleLayoutConfig => 
        config.type === 'single';
    export const isDefaultConfig = (config: MazerLayoutConfig): config is DefaultLayoutConfig => 
        config.type === 'default';
}