﻿/*!
    *
    * Wijmo Library 5.20202.724
    * http://wijmo.com/
    *
    * Copyright(c) GrapeCity, Inc.  All rights reserved.
    *
    * Licensed under the GrapeCity Commercial License.
    * sales@wijmo.com
    * wijmo.com/products/wijmo-5/license/
    *
    */

"use strict";Object.defineProperty(exports,"__esModule",{value:!0});const wijmo_vue2_base_1=require("wijmo/wijmo.vue2.base"),wjcChartAnalytics=require("wijmo/wijmo.chart.analytics");class WjFlexChartTrendLineBehavior extends wijmo_vue2_base_1.WjComponentBehavior{}WjFlexChartTrendLineBehavior.tag="wj-flex-chart-trend-line";WjFlexChartTrendLineBehavior.parentProp="series";WjFlexChartTrendLineBehavior.siblingId="series";WjFlexChartTrendLineBehavior.props=["wjProperty","axisX","axisY","binding","bindingX","cssClass","name","altStyle","symbolMarker","symbolSize","symbolStyle","visibility","itemsSource","interpolateNulls","tooltipContent","itemFormatter","sampleCount","order","fitType"];WjFlexChartTrendLineBehavior.events=["initialized","rendering","rendered"];WjFlexChartTrendLineBehavior.changeEvents={"chart.seriesVisibilityChanged":["visibility"]};WjFlexChartTrendLineBehavior.classCtor=function(){return wjcChartAnalytics.TrendLine};exports.WjFlexChartTrendLine=WjFlexChartTrendLineBehavior.register();function registerV3WjFlexChartTrendLine(e){e.component(WjFlexChartTrendLineBehavior.tag,exports.WjFlexChartTrendLine)}class WjFlexChartMovingAverageBehavior extends wijmo_vue2_base_1.WjComponentBehavior{}WjFlexChartMovingAverageBehavior.tag="wj-flex-chart-moving-average";WjFlexChartMovingAverageBehavior.parentProp="series";WjFlexChartMovingAverageBehavior.siblingId="series";WjFlexChartMovingAverageBehavior.props=["wjProperty","axisX","axisY","binding","bindingX","cssClass","name","altStyle","symbolMarker","symbolSize","symbolStyle","visibility","itemsSource","interpolateNulls","tooltipContent","itemFormatter","sampleCount","period","type"];WjFlexChartMovingAverageBehavior.events=["initialized","rendering","rendered"];WjFlexChartMovingAverageBehavior.changeEvents={"chart.seriesVisibilityChanged":["visibility"]};WjFlexChartMovingAverageBehavior.classCtor=function(){return wjcChartAnalytics.MovingAverage};exports.WjFlexChartMovingAverage=WjFlexChartMovingAverageBehavior.register();function registerV3WjFlexChartMovingAverage(e){e.component(WjFlexChartMovingAverageBehavior.tag,exports.WjFlexChartMovingAverage)}class WjFlexChartYFunctionSeriesBehavior extends wijmo_vue2_base_1.WjComponentBehavior{}WjFlexChartYFunctionSeriesBehavior.tag="wj-flex-chart-y-function-series";WjFlexChartYFunctionSeriesBehavior.parentProp="series";WjFlexChartYFunctionSeriesBehavior.siblingId="series";WjFlexChartYFunctionSeriesBehavior.props=["wjProperty","axisX","axisY","binding","bindingX","cssClass","name","altStyle","symbolMarker","symbolSize","symbolStyle","visibility","itemsSource","interpolateNulls","tooltipContent","itemFormatter","sampleCount","min","max","func"];WjFlexChartYFunctionSeriesBehavior.events=["initialized","rendering","rendered"];WjFlexChartYFunctionSeriesBehavior.changeEvents={"chart.seriesVisibilityChanged":["visibility"]};WjFlexChartYFunctionSeriesBehavior.classCtor=function(){return wjcChartAnalytics.YFunctionSeries};exports.WjFlexChartYFunctionSeries=WjFlexChartYFunctionSeriesBehavior.register();function registerV3WjFlexChartYFunctionSeries(e){e.component(WjFlexChartYFunctionSeriesBehavior.tag,exports.WjFlexChartYFunctionSeries)}class WjFlexChartParametricFunctionSeriesBehavior extends wijmo_vue2_base_1.WjComponentBehavior{}WjFlexChartParametricFunctionSeriesBehavior.tag="wj-flex-chart-parametric-function-series";WjFlexChartParametricFunctionSeriesBehavior.parentProp="series";WjFlexChartParametricFunctionSeriesBehavior.siblingId="series";WjFlexChartParametricFunctionSeriesBehavior.props=["wjProperty","axisX","axisY","binding","bindingX","cssClass","name","altStyle","symbolMarker","symbolSize","symbolStyle","visibility","itemsSource","interpolateNulls","tooltipContent","itemFormatter","sampleCount","min","max","func","xFunc","yFunc"];WjFlexChartParametricFunctionSeriesBehavior.events=["initialized","rendering","rendered"];WjFlexChartParametricFunctionSeriesBehavior.changeEvents={"chart.seriesVisibilityChanged":["visibility"]};WjFlexChartParametricFunctionSeriesBehavior.classCtor=function(){return wjcChartAnalytics.ParametricFunctionSeries};exports.WjFlexChartParametricFunctionSeries=WjFlexChartParametricFunctionSeriesBehavior.register();function registerV3WjFlexChartParametricFunctionSeries(e){e.component(WjFlexChartParametricFunctionSeriesBehavior.tag,exports.WjFlexChartParametricFunctionSeries)}class WjFlexChartWaterfallBehavior extends wijmo_vue2_base_1.WjComponentBehavior{}WjFlexChartWaterfallBehavior.tag="wj-flex-chart-waterfall";WjFlexChartWaterfallBehavior.parentProp="series";WjFlexChartWaterfallBehavior.siblingId="series";WjFlexChartWaterfallBehavior.props=["wjProperty","axisX","axisY","binding","bindingX","cssClass","name","altStyle","symbolMarker","symbolSize","symbolStyle","visibility","itemsSource","interpolateNulls","tooltipContent","itemFormatter","relativeData","start","startLabel","showTotal","totalLabel","showIntermediateTotal","intermediateTotalPositions","intermediateTotalLabels","connectorLines","styles"];WjFlexChartWaterfallBehavior.events=["initialized","rendering","rendered"];WjFlexChartWaterfallBehavior.changeEvents={"chart.seriesVisibilityChanged":["visibility"]};WjFlexChartWaterfallBehavior.classCtor=function(){return wjcChartAnalytics.Waterfall};exports.WjFlexChartWaterfall=WjFlexChartWaterfallBehavior.register();function registerV3WjFlexChartWaterfall(e){e.component(WjFlexChartWaterfallBehavior.tag,exports.WjFlexChartWaterfall)}class WjFlexChartBoxWhiskerBehavior extends wijmo_vue2_base_1.WjComponentBehavior{}WjFlexChartBoxWhiskerBehavior.tag="wj-flex-chart-box-whisker";WjFlexChartBoxWhiskerBehavior.parentProp="series";WjFlexChartBoxWhiskerBehavior.siblingId="series";WjFlexChartBoxWhiskerBehavior.props=["wjProperty","axisX","axisY","binding","bindingX","cssClass","name","altStyle","symbolMarker","symbolSize","symbolStyle","visibility","itemsSource","interpolateNulls","tooltipContent","itemFormatter","quartileCalculation","groupWidth","gapWidth","showMeanLine","meanLineStyle","showMeanMarker","meanMarkerStyle","showInnerPoints","showOutliers"];WjFlexChartBoxWhiskerBehavior.events=["initialized","rendering","rendered"];WjFlexChartBoxWhiskerBehavior.changeEvents={"chart.seriesVisibilityChanged":["visibility"]};WjFlexChartBoxWhiskerBehavior.classCtor=function(){return wjcChartAnalytics.BoxWhisker};exports.WjFlexChartBoxWhisker=WjFlexChartBoxWhiskerBehavior.register();function registerV3WjFlexChartBoxWhisker(e){e.component(WjFlexChartBoxWhiskerBehavior.tag,exports.WjFlexChartBoxWhisker)}class WjFlexChartErrorBarBehavior extends wijmo_vue2_base_1.WjComponentBehavior{}WjFlexChartErrorBarBehavior.tag="wj-flex-chart-error-bar";WjFlexChartErrorBarBehavior.parentProp="series";WjFlexChartErrorBarBehavior.siblingId="series";WjFlexChartErrorBarBehavior.props=["wjProperty","axisX","axisY","binding","bindingX","cssClass","name","altStyle","symbolMarker","symbolSize","symbolStyle","visibility","itemsSource","interpolateNulls","tooltipContent","itemFormatter","chartType","errorBarStyle","value","errorAmount","endStyle","direction"];WjFlexChartErrorBarBehavior.events=["initialized","rendering","rendered"];WjFlexChartErrorBarBehavior.changeEvents={"chart.seriesVisibilityChanged":["visibility"]};WjFlexChartErrorBarBehavior.classCtor=function(){return wjcChartAnalytics.ErrorBar};exports.WjFlexChartErrorBar=WjFlexChartErrorBarBehavior.register();function registerV3WjFlexChartErrorBar(e){e.component(WjFlexChartErrorBarBehavior.tag,exports.WjFlexChartErrorBar)}class WjFlexChartBreakEvenBehavior extends wijmo_vue2_base_1.WjComponentBehavior{}WjFlexChartBreakEvenBehavior.tag="wj-flex-chart-break-even";WjFlexChartBreakEvenBehavior.parentProp="series";WjFlexChartBreakEvenBehavior.siblingId="series";WjFlexChartBreakEvenBehavior.props=["wjProperty","axisX","axisY","binding","bindingX","cssClass","name","altStyle","symbolMarker","symbolSize","symbolStyle","visibility","itemsSource","interpolateNulls","tooltipContent","itemFormatter","fixedCost","variableCost","salesPrice","styles"];WjFlexChartBreakEvenBehavior.events=["initialized","rendering","rendered"];WjFlexChartBreakEvenBehavior.changeEvents={"chart.seriesVisibilityChanged":["visibility"]};WjFlexChartBreakEvenBehavior.classCtor=function(){return wjcChartAnalytics.BreakEven};exports.WjFlexChartBreakEven=WjFlexChartBreakEvenBehavior.register();function registerV3WjFlexChartBreakEven(e){e.component(WjFlexChartBreakEvenBehavior.tag,exports.WjFlexChartBreakEven)}function registerChartAnalytics(e){if(wijmo_vue2_base_1.VueApi.isV3Plus){registerV3WjFlexChartTrendLine(e);registerV3WjFlexChartMovingAverage(e);registerV3WjFlexChartYFunctionSeries(e);registerV3WjFlexChartParametricFunctionSeries(e);registerV3WjFlexChartWaterfall(e);registerV3WjFlexChartBoxWhisker(e);registerV3WjFlexChartErrorBar(e);registerV3WjFlexChartBreakEven(e)}}exports.registerChartAnalytics=registerChartAnalytics;