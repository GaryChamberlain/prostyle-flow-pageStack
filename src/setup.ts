/// <reference path="../ts/pro.motion.d.ts" />
/// <reference path="Extension.ts" />

module Pro.Motion.Extensions.Flows.pageStack {

    import Models = Pro.Motion.Models;
    import Scripts = Pro.Motion.Models.Scripts;
    import Util = Pro.Motion.Util;

    export function readJson(story: Models.Story, json: any): Models.Flows.Flow {

        //
        // Configuration common to all flows
        //
        var placement = Types.Placement.fromJson(Util.getSetup(json, "placement"));
        var pageAspectRatio = Util.convertToNumber(Util.getSetup(json, "pageAspectRatio"), 4 / 3); //stack flows default to 4/3 ratio

        //
        // Configuration specific to stack flows
        //
        var stacks = Types.Stacks.fromJson(Util.getSetup(json, "stacks") || Extension.defaultStacksJson);

        return new Extension(story, placement, Util.getSetup(json, "defaultPageClass"), pageAspectRatio, stacks);
    }

    export function writeJson(flow: Extension, json: any) {

        //TODO: write the json configuration back out.
        // Important,
        //   don't write current page placement values if it is default
        //   don't write future and past page placements and their offsets if they equal the defaults

        var setup: any = {};
        if (flow.defaultPageClass !== undefined) setup.defaultPageClass = flow.defaultPageClass;

    }
}