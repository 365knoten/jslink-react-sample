// import needed Libraries
import * as React from "react";
import * as ReactDOM from "react-dom";
import { RatingJSLink } from "./components/RatingJSLink"


// Setup JSlink Template overrides
var tplctx: SPClientTemplates.TemplateOverridesOptions = {};
tplctx.Templates = {};

//
tplctx.Templates.Fields = {
    'Rating': {
        'EditForm': renderField,
        'NewForm': renderField
    }
}

// Register a PostRender Function
tplctx.OnPostRender = postRender;

// Register the template 
SPClientTemplates.TemplateManager.RegisterTemplateOverrides(tplctx);


// this is needed to store the current value of the component
var currentvalue = 0;
// this is 
var component: JSX.Element;

function renderField(ctx: any) {
    // Prepare Context
    var formCtx = SPClientTemplates.Utility.GetFormContextForCurrentField(ctx);
    currentvalue=ctx.CurrentFieldValue;
    // Register a callback just before submit.
    formCtx.registerGetValueCallback(formCtx.fieldName, function () {
        return currentvalue;
    });
    component = <RatingJSLink
        value={currentvalue}
        onChange={function (val: number) {
            currentvalue = val;
        }} />;

    return '<span id="ratingfield_mount"></span>';
}


var currentPostRenderField = 0;

function postRender(ctx: any) {
    currentPostRenderField++;
    if (currentPostRenderField == Object.keys(ctx.Templates.Fields).length) {
        ReactDOM.render(
            component,
            document.getElementById("ratingfield_mount")
        );
    }
}

