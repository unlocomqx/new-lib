import { Injectable, Component, NgModule, defineInjectable } from '@angular/core';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var NewLibService = /** @class */ (function () {
    function NewLibService() {
    }
    NewLibService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] },
    ];
    /** @nocollapse */
    NewLibService.ctorParameters = function () { return []; };
    /** @nocollapse */ NewLibService.ngInjectableDef = defineInjectable({ factory: function NewLibService_Factory() { return new NewLibService(); }, token: NewLibService, providedIn: "root" });
    return NewLibService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var NewLibComponent = /** @class */ (function () {
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
        { type: Component, args: [{
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
var ButtonComponent = /** @class */ (function () {
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
        { type: Component, args: [{
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
var MytestComponent = /** @class */ (function () {
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
        { type: Component, args: [{
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
var NewLibModule = /** @class */ (function () {
    function NewLibModule() {
    }
    NewLibModule.decorators = [
        { type: NgModule, args: [{
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

export { NewLibService, NewLibComponent, NewLibModule, ButtonComponent, MytestComponent as ɵa };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmV3LWxpYi5qcy5tYXAiLCJzb3VyY2VzIjpbIm5nOi8vbmV3LWxpYi9saWIvbmV3LWxpYi5zZXJ2aWNlLnRzIiwibmc6Ly9uZXctbGliL2xpYi9uZXctbGliLmNvbXBvbmVudC50cyIsIm5nOi8vbmV3LWxpYi9saWIvYnV0dG9uL2J1dHRvbi5jb21wb25lbnQudHMiLCJuZzovL25ldy1saWIvbGliL215dGVzdC9teXRlc3QuY29tcG9uZW50LnRzIiwibmc6Ly9uZXctbGliL2xpYi9uZXctbGliLm1vZHVsZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIE5ld0xpYlNlcnZpY2Uge1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG59XG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdtbC1uZXctbGliJyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8cD5cbiAgICAgIG5ldy1saWIgd29ya3MhXG4gICAgPC9wPlxuICBgLFxuICBzdHlsZXM6IFtdXG59KVxuZXhwb3J0IGNsYXNzIE5ld0xpYkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgfVxuXG59XG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdtbC1idXR0b24nLFxuICB0ZW1wbGF0ZTogYDxwPlxuICBuZXcgYnV0dG9uIHdvcmtzIVxuPC9wPlxuYCxcbiAgc3R5bGVzOiBbYGBdXG59KVxuZXhwb3J0IGNsYXNzIEJ1dHRvbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgfVxuXG59XG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdtbC1teXRlc3QnLFxuICB0ZW1wbGF0ZTogYDxwPlxuICBteXRlc3Qgd29ya3MhXG48L3A+XG5gLFxuICBzdHlsZXM6IFtgYF1cbn0pXG5leHBvcnQgY2xhc3MgTXl0ZXN0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICB9XG5cbn1cbiIsImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOZXdMaWJDb21wb25lbnQgfSBmcm9tICcuL25ldy1saWIuY29tcG9uZW50JztcbmltcG9ydCB7IEJ1dHRvbkNvbXBvbmVudCB9IGZyb20gJy4vYnV0dG9uL2J1dHRvbi5jb21wb25lbnQnO1xuaW1wb3J0IHsgTXl0ZXN0Q29tcG9uZW50IH0gZnJvbSAnLi9teXRlc3QvbXl0ZXN0LmNvbXBvbmVudCc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbTmV3TGliQ29tcG9uZW50LCBCdXR0b25Db21wb25lbnQsIE15dGVzdENvbXBvbmVudF0sXG4gIGV4cG9ydHM6IFtcbiAgICBOZXdMaWJDb21wb25lbnQsXG4gICAgQnV0dG9uQ29tcG9uZW50XG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgTmV3TGliTW9kdWxlIHsgfVxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBO0lBT0U7S0FBaUI7O2dCQUxsQixVQUFVLFNBQUM7b0JBQ1YsVUFBVSxFQUFFLE1BQU07aUJBQ25COzs7Ozt3QkFKRDs7Ozs7OztBQ0FBO0lBYUU7S0FBaUI7Ozs7SUFFakIsa0NBQVE7OztJQUFSO0tBQ0M7O2dCQWRGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsWUFBWTtvQkFDdEIsUUFBUSxFQUFFLCtDQUlUO29CQUNELE1BQU0sRUFBRSxFQUFFO2lCQUNYOzs7OzBCQVZEOzs7Ozs7O0FDQUE7SUFZRTtLQUFpQjs7OztJQUVqQixrQ0FBUTs7O0lBQVI7S0FDQzs7Z0JBYkYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxXQUFXO29CQUNyQixRQUFRLEVBQUUsa0NBR1g7b0JBQ0MsTUFBTSxFQUFFLENBQUMsRUFBRSxDQUFDO2lCQUNiOzs7OzBCQVREOzs7Ozs7O0FDQUE7SUFZRTtLQUFpQjs7OztJQUVqQixrQ0FBUTs7O0lBQVI7S0FDQzs7Z0JBYkYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxXQUFXO29CQUNyQixRQUFRLEVBQUUsOEJBR1g7b0JBQ0MsTUFBTSxFQUFFLENBQUMsRUFBRSxDQUFDO2lCQUNiOzs7OzBCQVREOzs7Ozs7O0FDQUE7Ozs7Z0JBS0MsUUFBUSxTQUFDO29CQUNSLE9BQU8sRUFBRSxFQUNSO29CQUNELFlBQVksRUFBRSxDQUFDLGVBQWUsRUFBRSxlQUFlLEVBQUUsZUFBZSxDQUFDO29CQUNqRSxPQUFPLEVBQUU7d0JBQ1AsZUFBZTt3QkFDZixlQUFlO3FCQUNoQjtpQkFDRjs7dUJBYkQ7Ozs7Ozs7Ozs7Ozs7OzsifQ==