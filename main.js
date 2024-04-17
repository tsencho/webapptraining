require([
  "esri/WebMap",
  "esri/views/MapView",
  "esri/config",
  "esri/widgets/Expand",
  "esri/widgets/BasemapGallery",
  "esri/widgets/Legend",
  "esri/widgets/Locate",
  "esri/widgets/ScaleBar",
  "esri/widgets/Home",
  "esri/widgets/LayerList",
], function (
  WebMap,
  MapView,
  esriConfig,
  Expand,
  BasemapGallery,
  Legend,
  Locate,
  ScaleBar,
  Home,
  LayerList
) {
  esriConfig.portalUrl = "https://cgi.nlcs.gov.bt/portal";
  // Create a Map instance
  const myMap = new WebMap({
    portalItem: {
      // autocasts as new PortalItem()
      id: "51cc7f1a592b4cafaef7a82b5fdf5062",
    },
  });
  // Create a MapView instance (for 2D viewing) and reference the map instance
  const view = new MapView({
    container: "viewDiv",
    map: myMap,
    zoom: 13,
    center: [89.6386, 27.4716], // longitude, latitude
  });

  let layerList = new LayerList({
    view: view,
    container: "layer-container",
  });
  let homeWidget = new Home({
    view: view,
  });

  // adds the home widget to the top left corner of the MapView
  view.ui.add(homeWidget, "top-left");

  let basemapGallery = new BasemapGallery({
    view: view,
    container: "basemap-container",
  });

  let legend = new Legend({
    view: view,
    container: "legend-container",
  });

  // Create an Expand instance and set the content
  // property to the DOM node of the basemap gallery widget
  // Use an Esri icon font to represent the content inside
  // of the Expand widget

  // let bgExpand = new Expand({
  //   view: view,
  //   content: basemapGallery,
  // });

  // let llExpand = new Expand({
  //   view: view,
  //   content: layerList,
  // });

  // view.ui.add([bgExpand], "top-right");

  const locateBtn = new Locate({
    view: view,
  });

  // Add the locate widget to the top left corner of the view
  view.ui.add(locateBtn, {
    position: "top-left",
  });

  let scaleBar = new ScaleBar({
    view: view,
    unit: "metric",
  });
  // Add widget to the bottom left corner of the view
  view.ui.add(scaleBar, {
    position: "bottom-left",
  });
  const appDetailModalBtn = document.getElementById("app-details-action");
  const appDetailModalEl = document.getElementById("app-details-modal");
  appDetailModalBtn.addEventListener("click", () => {
    appDetailModalEl.open = !appDetailModalEl.open;
  });
});
