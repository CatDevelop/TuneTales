import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Directive({
    standalone: true,
    selector: 'img[appInlineSvg]'
})
export class InlineSvgDirective implements OnInit {

    @Input()
    public src: string = '';

    constructor(private _el: ElementRef, private _http: HttpClient, private _renderer: Renderer2) {
    }

    public ngOnInit(): void {
        this.loadSvg();
    }

    /**
     * Вставляет svg-код инлайн вместо картинки
     * @private
     */
    private loadSvg(): void {
        if (this.src) {
            this._http.get(this.src, { responseType: 'text' }).subscribe(
                (svg: string) => {
                    const div: HTMLDivElement = document.createElement('div');
                    div.innerHTML = svg;
                    const svgElement: SVGSVGElement | null = div.querySelector('svg');

                    if (svgElement) {
                        const imgElement: HTMLImageElement = this._el.nativeElement;
                        svgElement.classList.add(...Array.from(imgElement.classList));
                        Array.from(imgElement.attributes).forEach((attr: Attr) => {
                            if (attr.name !== 'src' && attr.name !== 'appInlineSvg') {
                                this._renderer.setAttribute(svgElement, attr.name, attr.value);
                            }
                        });

                        const ngContentAttribute: any = Array.from(imgElement.attributes).find(attr => attr.name.startsWith('_ngcontent-'));
                        if (ngContentAttribute) {
                            this.applyNgContentAttribute(svgElement, ngContentAttribute.name, ngContentAttribute.value);
                        }

                        imgElement.replaceWith(svgElement);
                    }
                },
                (err: any) => {
                    console.error(`Could not load SVG: ${this.src}`, err);
                }
            );
        }
    }

    /**
     * Применяет атрибуты для вложенных элементов
     * @param element
     * @param attributeName
     * @param attributeValue
     * @private
     */
    private applyNgContentAttribute(element: Element, attributeName: string, attributeValue: string): void {
        this._renderer.setAttribute(element, attributeName, attributeValue);
        Array.from(element.children).forEach((child: Element) => {
            this.applyNgContentAttribute(child, attributeName, attributeValue);
        });
    }
}
