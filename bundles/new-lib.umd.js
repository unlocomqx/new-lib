(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('new-lib', ['exports', '@angular/core'], factory) :
    (factory((global['new-lib'] = {}),global.ng.core));
}(this, (function (exports,i0) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var NewLibService = (function () {
        function NewLibService() {
        }
        NewLibService.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: 'root'
                    },] },
        ];
        /** @nocollapse */
        NewLibService.ctorParameters = function () { return []; };
        /** @nocollapse */ NewLibService.ngInjectableDef = i0.defineInjectable({ factory: function NewLibService_Factory() { return new NewLibService(); }, token: NewLibService, providedIn: "root" });
        return NewLibService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var NewLibComponent = (function () {
        function NewLibComponent() {
        }
        /**
         * @return {?}
         */
        NewLibComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
            };
        NewLibComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'ml-new-lib',
                        template: "\n    <p>\n      new-lib works!\n    </p>\n  ",
                        styles: []
                    },] },
        ];
        /** @nocollapse */
        NewLibComponent.ctorParameters = function () { return []; };
        return NewLibComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var ButtonComponent = (function () {
        function ButtonComponent() {
        }
        /**
         * @return {?}
         */
        ButtonComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
            };
        ButtonComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'ml-button',
                        template: "<p>\n  new button works!\n</p>\n",
                        styles: [""]
                    },] },
        ];
        /** @nocollapse */
        ButtonComponent.ctorParameters = function () { return []; };
        return ButtonComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var MytestComponent = (function () {
        function MytestComponent() {
        }
        /**
         * @return {?}
         */
        MytestComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
            };
        MytestComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'ml-mytest',
                        template: "<p>\n  mytest works!\n</p>\n",
                        styles: [""]
                    },] },
        ];
        /** @nocollapse */
        MytestComponent.ctorParameters = function () { return []; };
        return MytestComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var NewLibModule = (function () {
        function NewLibModule() {
        }
        NewLibModule.decorators = [
            { type: i0.NgModule, args: [{
                        imports: [],
                        declarations: [NewLibComponent, ButtonComponent, MytestComponent],
                        exports: [
                            NewLibComponent,
                            ButtonComponent
                        ]
                    },] },
        ];
        return NewLibModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */

    exports.NewLibService = NewLibService;
    exports.NewLibComponent = NewLibComponent;
    exports.NewLibModule = NewLibModule;
    exports.ButtonComponent = ButtonComponent;
    exports.ɵa = MytestComponent;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmV3LWxpYi51bWQuanMubWFwIiwic291cmNlcyI6WyJuZzovL25ldy1saWIvbGliL25ldy1saWIuc2VydmljZS50cyIsIm5nOi8vbmV3LWxpYi9saWIvbmV3LWxpYi5jb21wb25lbnQudHMiLCJuZzovL25ldy1saWIvbGliL2J1dHRvbi9idXR0b24uY29tcG9uZW50LnRzIiwibmc6Ly9uZXctbGliL2xpYi9teXRlc3QvbXl0ZXN0LmNvbXBvbmVudC50cyIsIm5nOi8vbmV3LWxpYi9saWIvbmV3LWxpYi5tb2R1bGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBOZXdMaWJTZXJ2aWNlIHtcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxufVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbWwtbmV3LWxpYicsXG4gIHRlbXBsYXRlOiBgXG4gICAgPHA+XG4gICAgICBuZXctbGliIHdvcmtzIVxuICAgIDwvcD5cbiAgYCxcbiAgc3R5bGVzOiBbXVxufSlcbmV4cG9ydCBjbGFzcyBOZXdMaWJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gIH1cblxufVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbWwtYnV0dG9uJyxcbiAgdGVtcGxhdGU6IGA8cD5cbiAgbmV3IGJ1dHRvbiB3b3JrcyFcbjwvcD5cbmAsXG4gIHN0eWxlczogW2BgXVxufSlcbmV4cG9ydCBjbGFzcyBCdXR0b25Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gIH1cblxufVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbWwtbXl0ZXN0JyxcbiAgdGVtcGxhdGU6IGA8cD5cbiAgbXl0ZXN0IHdvcmtzIVxuPC9wPlxuYCxcbiAgc3R5bGVzOiBbYGBdXG59KVxuZXhwb3J0IGNsYXNzIE15dGVzdENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgfVxuXG59XG4iLCJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTmV3TGliQ29tcG9uZW50IH0gZnJvbSAnLi9uZXctbGliLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBCdXR0b25Db21wb25lbnQgfSBmcm9tICcuL2J1dHRvbi9idXR0b24uY29tcG9uZW50JztcbmltcG9ydCB7IE15dGVzdENvbXBvbmVudCB9IGZyb20gJy4vbXl0ZXN0L215dGVzdC5jb21wb25lbnQnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW05ld0xpYkNvbXBvbmVudCwgQnV0dG9uQ29tcG9uZW50LCBNeXRlc3RDb21wb25lbnRdLFxuICBleHBvcnRzOiBbXG4gICAgTmV3TGliQ29tcG9uZW50LFxuICAgIEJ1dHRvbkNvbXBvbmVudFxuICBdXG59KVxuZXhwb3J0IGNsYXNzIE5ld0xpYk1vZHVsZSB7IH1cbiJdLCJuYW1lcyI6WyJJbmplY3RhYmxlIiwiQ29tcG9uZW50IiwiTmdNb2R1bGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtRQU9FO1NBQWlCOztvQkFMbEJBLGFBQVUsU0FBQzt3QkFDVixVQUFVLEVBQUUsTUFBTTtxQkFDbkI7Ozs7OzRCQUpEOzs7Ozs7O0FDQUE7UUFhRTtTQUFpQjs7OztRQUVqQixrQ0FBUTs7O1lBQVI7YUFDQzs7b0JBZEZDLFlBQVMsU0FBQzt3QkFDVCxRQUFRLEVBQUUsWUFBWTt3QkFDdEIsUUFBUSxFQUFFLCtDQUlUO3dCQUNELE1BQU0sRUFBRSxFQUFFO3FCQUNYOzs7OzhCQVZEOzs7Ozs7O0FDQUE7UUFZRTtTQUFpQjs7OztRQUVqQixrQ0FBUTs7O1lBQVI7YUFDQzs7b0JBYkZBLFlBQVMsU0FBQzt3QkFDVCxRQUFRLEVBQUUsV0FBVzt3QkFDckIsUUFBUSxFQUFFLGtDQUdYO3dCQUNDLE1BQU0sRUFBRSxDQUFDLEVBQUUsQ0FBQztxQkFDYjs7Ozs4QkFURDs7Ozs7OztBQ0FBO1FBWUU7U0FBaUI7Ozs7UUFFakIsa0NBQVE7OztZQUFSO2FBQ0M7O29CQWJGQSxZQUFTLFNBQUM7d0JBQ1QsUUFBUSxFQUFFLFdBQVc7d0JBQ3JCLFFBQVEsRUFBRSw4QkFHWDt3QkFDQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLENBQUM7cUJBQ2I7Ozs7OEJBVEQ7Ozs7Ozs7QUNBQTs7OztvQkFLQ0MsV0FBUSxTQUFDO3dCQUNSLE9BQU8sRUFBRSxFQUNSO3dCQUNELFlBQVksRUFBRSxDQUFDLGVBQWUsRUFBRSxlQUFlLEVBQUUsZUFBZSxDQUFDO3dCQUNqRSxPQUFPLEVBQUU7NEJBQ1AsZUFBZTs0QkFDZixlQUFlO3lCQUNoQjtxQkFDRjs7MkJBYkQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsifQ==