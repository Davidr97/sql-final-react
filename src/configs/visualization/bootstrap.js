import trackChartTypeState from "../../components/visualization/trackChartTypeState";
import withNoChartType from "../../components/visualization/withNoChartType";
import withNoChart from "../../components/visualization/withNoChart";
import withPieChart from "../../components/visualization/withPieChart";
import withScatterPlot from "../../components/visualization/withScatterPlot";
import withLineChart from "../../components/visualization/withLineChart";
import visualizationPresenter from "../../components/visualization/visualizationPresenter";

import compose from "lodash/fp/compose";

const VisualizationContainer = compose(
    trackChartTypeState,
    withNoChartType,
    withNoChart,
    withPieChart,
    withScatterPlot,
    withLineChart,
);

const Visualization = VisualizationContainer(visualizationPresenter);

export default Visualization;
